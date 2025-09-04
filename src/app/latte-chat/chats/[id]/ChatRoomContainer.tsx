'use client'

import ChatThread from '@/features/chat/components/ChatThread'
import ChatInput from '@/features/chat/components/ChatInput'
import ChatTopbar from '@/features/chat/components/ChatTopbar'
import MentorStateMessage from '@/features/chat/components/MentorStateMessage'
import MentorRequestMessageContainer from '@/features/chat/containers/MentorRequestMessageContainer'
import { useChatUserState } from '@/features/chat/stores/chatUserStore'
import { useUserInfo } from '@/shared/hooks/useUserInfo'
import { useEffect } from 'react'
import useEnterChatRoomQuery from '@/features/chat/hooks/useEnterChatRoomQuery'
import { useParams } from 'next/navigation'
import useLeaveChatRoomQuery from '@/features/chat/hooks/useLeaveChatRoomQuery'
import { useChatStatusState } from '@/features/chat/stores/chatStatusStore'
import { useSocket } from '@/shared/contexts/SocketContext'
import { useQueryClient } from '@tanstack/react-query'

const TOPBAR_ICONS = [
  {
    iconUrl: '/icons/cam-icon.svg',
    alt: '영상통화',
    href: '',
  },
  {
    iconUrl: '/icons/setting-icon.svg',
    alt: '설정',
    href: '',
  },
]

export default function ChatRoomContainer() {
  const params = useParams()
  const chatRoomId = Number(params.id) ?? null
  const {
    connectSocket,
    disconnectSocket,
    subscribe,
    unsubscribe,
    sendMessage,
  } = useSocket()
  const queryClient = useQueryClient()

  const { receiver } = useChatUserState()
  const { status: chatRoomStatus } = useChatStatusState()

  const { data: userInfo } = useUserInfo()
  const chatUser = useChatUserState()

  const isRequester = !!userInfo?.juniorId

  const { mutate: enterChatRoomMutate } = useEnterChatRoomQuery()
  const { mutate: leaveChatRoomMutate } = useLeaveChatRoomQuery()

  useEffect(() => {
    if (!chatRoomId || !userInfo?.memberType) return
    enterChatRoomMutate({ chatRoomId, memberType: userInfo?.memberType })

    return () =>
      leaveChatRoomMutate({ chatRoomId, memberType: userInfo?.memberType })
  }, [])

  useEffect(() => {
    const setup = async () => {
      await connectSocket()
      subscribe(`/sub/chat/room/${chatRoomId}`, (msg: any) => {
        console.log(msg)
        queryClient.setQueryData(['/chat', msg.chatRoomId], (oldData: any) => {
          if (!oldData) {
            return [
              {
                chatId: msg.chatId ?? new Date().toISOString(),
                chatRoomId: msg.chatRoomId,
                content: msg.content,
                createdAt: new Date().toISOString(),
                isProfile: false,
                isRead: false,
                isShowTime: true,
                senderId: msg.juniorId ?? msg.seniorId,
                senderType: msg.memberType,
              },
            ]
          }

          const exists = oldData.some((m: any) => m.chatId === msg.chatId)
          if (exists) return oldData

          return [
            ...oldData,
            {
              chatId: msg.chatId ?? new Date().toISOString(),
              chatRoomId: msg.chatRoomId,
              content: msg.content,
              createdAt: msg.createdAt ?? new Date().toISOString(),
              isProfile: false,
              isRead: true,
              isShowTime: true,
              senderId: msg.juniorId ?? msg.seniorId,
              senderType: msg.memberType,
            },
          ]
        })
      })
    }
    setup()

    return () => {
      unsubscribe(`/sub/chat/room/${chatRoomId}`)
      disconnectSocket()
    }
  }, [chatRoomId])

  const renderMentorApplicationBubble = () => {
    switch (chatRoomStatus) {
      case 'WAITING':
        return (
          <div className="px-5">
            {isRequester ? (
              <div className="flex flex-col items-center gap-5">
                <p className="b10 flex w-full items-center justify-center rounded-10 bg-gray-1 py-2 text-black">
                  멘토 요청을 기다리고 있어요
                </p>
                <img src="/icons/comment-more-icon.svg" className="w-12" />
              </div>
            ) : (
              <MentorRequestMessageContainer />
            )}
          </div>
        )
      case 'ACTIVE':
        return (
          <>
            <div className="px-5">
              <MentorStateMessage state="ACCEPT" />
            </div>
            <ChatThread />
          </>
        )
      case 'INACTIVE':
        return (
          <div className="px-5">
            <MentorStateMessage state="REJECT" />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex min-h-[calc(100svh-5rem)] flex-col bg-white">
      <ChatTopbar icons={TOPBAR_ICONS} nickname={receiver.nickname ?? ''} />

      <main className="h-full flex-1 py-5">
        {renderMentorApplicationBubble()}
      </main>

      {chatRoomStatus === 'ACTIVE' && (
        <div className="sticky bottom-0">
          <ChatInput chatRoomId={chatRoomId} />
        </div>
      )}
    </div>
  )
}
