'use client'

import SockJS from 'sockjs-client'
import { Client, IMessage, StompSubscription } from '@stomp/stompjs'
import { createContext, useContext, useRef, useState, ReactNode } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { useUserInfo } from '../hooks/useUserInfo'

interface SocketMessage<T> {
  type: string
  message: string
  data: T
}

interface StompContextType {
  connectSocket: () => Promise<void>
  disconnectSocket: () => void
  isConnect: boolean
  sendMessage: <T extends object>(destination: string, body: T) => void
  subscribe: (
    topic: string,
    callback: <T>(message: SocketMessage<T>) => void
  ) => void
  unsubscribe: (topic: string) => void
  registerCallback: <T>(type: string, callback: (data: T) => void) => void
}

const StompContext = createContext<StompContextType | null>(null)

export const StompProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = useQueryClient()
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/connection`
  const client = useRef<Client | null>(null)
  const [isConnect, setIsConnected] = useState(false)
  const subscriptions = useRef<Map<string, StompSubscription>>(new Map())
  const callbackRegistry = useRef(new Map<string, <T>(data: T) => void>())
  const accessToken =
    typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null

  const connectSocket = () => {
    if (!accessToken) {
      console.warn('AccessToken 없으므로 소켓에 연결할 수 없습니다')
      return Promise.resolve()
    }
    if (client.current?.connected) {
      console.log('이미 연결된 상태입니다')
      return Promise.resolve()
    }

    return new Promise<void>((resolve, reject) => {
      client.current = new Client({
        webSocketFactory: () => new SockJS(url),
        reconnectDelay: 4000,
        heartbeatIncoming: 3000,
        heartbeatOutgoing: 3000,
        connectHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
      })

      client.current.onConnect = () => {
        console.log('Socket Connected')
        setIsConnected(true)
        resolve()
      }

      client.current.onDisconnect = () => {
        console.log('Socket Disconnected')
        setIsConnected(false)
      }

      client.current.onStompError = (frame) => {
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
    setIsConnected(false)
    subscriptions.current.clear()
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
      console.warn('subscribe 실패: 소켓이 연결되지 않음')
      return
    }
    if (!subscriptions.current.has(topic)) {
      const sub = client.current.subscribe(topic, (message: IMessage) => {
        try {
          const parsed = JSON.parse(message.body)
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

  return (
    <StompContext.Provider
      value={{
        connectSocket,
        disconnectSocket,
        isConnect,
        sendMessage,
        subscribe,
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
