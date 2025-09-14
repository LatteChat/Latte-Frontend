import { formatDateTime } from '@/shared/utils/formatDate'
import Image from 'next/image'
import Link from 'next/link'
import { useChatUserActions } from '../../stores/chatUserStore'
import { useChatStatusActions } from '../../stores/chatStatusStore'
import { userInfo } from 'os'
import { useUserInfo } from '@/shared/hooks/useUserInfo'

type ChatItemProps = {
  chat: {
    chatRoomId: number
    chatRoomCondition: string
    lastMessage: string
    unreadCount: number
    lastMessageAt: string
    chatRoomStatus: 'WAITING' | 'ACTIVE' | 'INACTIVE'
  }
  user: {
    nickname?: string
    profile?: string | null
    seniorId?: number
    juniorId?: number
  }
}

export default function ChatItem({
  chat: { chatRoomId, lastMessage, unreadCount, lastMessageAt, chatRoomStatus },
  user: { nickname, profile, juniorId, seniorId },
}: ChatItemProps) {
  const { data: userInfo } = useUserInfo()
  const { setReceiver, setJunior, setSenior } = useChatUserActions()
  const { setStatus } = useChatStatusActions()

  return (
    <Link
      href={`/latte-chat/chats/${chatRoomId}`}
      className="flex w-full gap-4 border-b border-gray-300 px-5 py-4"
      key={chatRoomId}
      onClick={() => {
        if (!nickname || profile === undefined) return
        let nSeniorId = seniorId ?? userInfo?.seniorId!
        let nJuniorId = juniorId ?? userInfo?.juniorId!
        setJunior({
          id: nJuniorId,
          nickname: null,
          profile: null,
        })
        setSenior({
          id: nSeniorId,
          nickname: null,
          profile: null,
        })
        setReceiver({
          id: null,
          nickname,
          profile,
        })
        setStatus(chatRoomStatus)
      }}
    >
      <img
        src={profile ?? '/images/coffee-bean-image.png'}
        alt="사용자 프로필 이미지"
        width={44}
        height={44}
        className="aspect-square h-11 w-11 rounded-full bg-primary"
      />

      <div className="flex min-w-0 flex-1 items-center gap-5">
        <div className="flex w-full min-w-0 flex-1 flex-col gap-1">
          <div className="flex flex-wrap items-center gap-1">
            <span className="b5 text-gray-6">
              {nickname ?? '사용자를 찾을 수 없습니다'}
            </span>
            <span className="b9 text-gray-4">
              {formatDateTime(lastMessageAt)}
            </span>
          </div>
          <p className="b6 line-clamp-2 break-words text-gray-6">
            {lastMessage}
          </p>
        </div>

        {chatRoomStatus === 'ACTIVE' && (
          <div>
            <span className="b7 flex aspect-square h-5 w-6 items-center justify-center rounded-full bg-secondary-chat text-white">
              {unreadCount}
            </span>
          </div>
        )}
      </div>
    </Link>
  )
}
