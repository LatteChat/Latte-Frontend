'use client'

import SockJS from 'sockjs-client'
import { Client, IMessage, StompSubscription } from '@stomp/stompjs'
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { useUserInfo } from '../hooks/useUserInfo'

interface SocketMessage<T> {
  type: string
  message: string
  data: T
}

interface StompContextType {
  connectSocket: () => Promise<void> | null | undefined
  disconnectSocket: () => void
  isConnect: boolean
  sendMessage: <T extends object>(destination: string, body: T) => void
  unsubscribe: (topic: string) => void
  registerCallback: <T>(type: string, callback: (data: T) => void) => void
}

const StompContext = createContext<StompContextType | null>(null)

export const StompProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = useQueryClient()
  const url = `http://localhost:8080/connection`
  const client = useRef<Client | null>(null)
  const [isConnect, setIsConnected] = useState(false)
  const subscriptions = useRef<Map<string, StompSubscription>>(new Map())
  const callbackRegistry = useRef(new Map<string, <T>(data: T) => void>())
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const { data: userInfo, isFetched } = useUserInfo()
  const userInfoRef = useRef(userInfo)

  useEffect(() => {
    userInfoRef.current = userInfo
  }, [userInfo])

  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    setAccessToken(token)
  }, [])

  const handleCallback = (msg: any) => {
    console.log('msg:', msg)
  }

  const connectSocket = () => {
    if (!accessToken) return
    return new Promise<void>((resolve, reject) => {
      client.current = new Client({
        webSocketFactory: () => {
          return new SockJS(url)
        },
        reconnectDelay: 4000,
        heartbeatIncoming: 3000,
        heartbeatOutgoing: 3000,
        connectHeaders: {
          Authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      })

      client.current.onConnect = () => {
        console.log('Socket Connected')
        // if (tempRoomCode) {
        //   setIsConnected(true)
        //   subscribe(`/topic/room/${tempRoomCode}`, handleCallback)
        //   subscribe(`/topic/game/${tempRoomCode}`, handleCallback)
        // }
        subscribe(`/sub/chat/room/1`, handleCallback)

        resolve()
      }
      client.current.onDisconnect = () => {
        console.error('Socket Disconnected')
        setIsConnected(false)
      }
      client.current.onStompError = (frame) => {
        console.log(frame)
        console.error('Socket Connect Error:', frame.headers['message'])
        setIsConnected(false)
        reject(new Error(frame.headers['message']))
      }

      client.current.activate()
    })
  }

  const disconnectSocket = () => {
    client.current?.deactivate()
    client.current = null
  }

  const sendMessage = <T extends object>(destination: string, body: T) => {
    if (client.current?.connected) {
      client.current.publish({
        destination,
        body: JSON.stringify(body),
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    } else {
      console.warn('메시지를 보낼 수 없습니다. 소켓이 연결되지 않았습니다.')
    }
  }

  const subscribe = (
    topic: string,
    callback: <T>(message: SocketMessage<T>) => void
  ) => {
    if (!client.current?.connected) {
      console.warn('subscribe에 실패했습니다. 소켓이 연결되지 않았습니다.')
      return
    }
    if (!subscriptions.current.has(topic)) {
      const sub = client.current.subscribe(topic, (message: IMessage) => {
        try {
          const parsed = JSON.parse(message.body)

          console.log(userInfo)

          console.log(parsed)

          queryClient.setQueryData(
            ['/chat', parsed.chatRoomId],
            (oldData: any) => {
              console.log('oldData:', oldData)
              console.log(userInfoRef.current)
              if (!oldData) return [parsed]

              const exists = oldData.some(
                (msg: any) => msg.chatId === parsed.chatId
              )
              if (exists) return oldData

              const createdAt = new Date().toISOString()
              createdAt.replace('Z', '')

              return [
                ...oldData,
                {
                  chatId: createdAt,
                  chatRoomId: parsed.chatRoomId,
                  content: parsed.content,
                  createdAt: createdAt,
                  isProfile: false,
                  isRead: true,
                  isShowTime: true,
                  senderId: parsed.juniorId ?? parsed.seniorId,
                  senderType: parsed.memberType,
                },
              ]
            }
          )

          callback(parsed)
        } catch (err) {
          console.error('파싱 에러:', err)
        }
      })
      subscriptions.current.set(topic, sub)
    }
  }

  const unsubscribe = (topic: string) => {
    const sub = subscriptions.current.get(topic)
    if (sub) {
      sub.unsubscribe()
      subscriptions.current.delete(topic)
    }
  }

  const registerCallback = <T,>(type: string, callback: (data: T) => void) => {
    callbackRegistry.current.set(type, callback as (data: unknown) => void)
  }

  useEffect(() => {
    const connect = async () => {
      try {
        await connectSocket()
      } catch (err) {
        console.error('자동 소켓 연결 실패:', err)
      }
    }
    connect()

    return () => {
      disconnectSocket()
      subscriptions.current.clear()
    }
  }, [accessToken])

  return (
    <StompContext.Provider
      value={{
        connectSocket,
        disconnectSocket,
        isConnect,
        sendMessage,
        unsubscribe,
        registerCallback,
      }}
    >
      {children}
    </StompContext.Provider>
  )
}

export const useSocket = () => {
  const context = useContext(StompContext)
  if (!context) {
    throw new Error('useSocket must be used within a StompProvider')
  }
  return context
}
