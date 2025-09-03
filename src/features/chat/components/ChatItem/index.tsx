import { formatDateTime } from '@/shared/utils/formatDate'
import Image from 'next/image'
import Link from 'next/link'

type ChatItemProps = {
  chat: {
    chatRoomId: number
    chatRoomCondition: string
    lastMessage: string
    unreadCount: number
    lastMessageAt: string
  }
  user: {
    name?: string
    profile?: string | null
  }
}

export default function ChatItem({
  chat: { chatRoomId, lastMessage, unreadCount, lastMessageAt },
  user: { name, profile },
}: ChatItemProps) {
  return (
    <Link
      href={`/latte-chat/chats/${chatRoomId}`}
      className="flex w-full gap-4 border-b border-gray-300 px-5 py-4"
      key={chatRoomId}
    >
      <Image
        src={profile ?? '/images/coffee-bean-image.png'}
        alt="사용자 프로필 이미지"
        width={44}
        height={44}
        className="aspect-square h-11 w-11 rounded-full bg-primary p-1"
      />

      <div className="flex min-w-0 flex-1 items-center gap-5">
        <div className="flex w-full min-w-0 flex-1 flex-col gap-1">
          <div className="flex flex-wrap items-center gap-1">
            <span className="b5 text-gray-6">
              {name ?? '사용자를 찾을 수 없습니다'}
            </span>
            <span className="b9 text-gray-4">
              {formatDateTime(lastMessageAt)}
            </span>
          </div>
          <p className="b6 line-clamp-2 break-words text-gray-6">
            {lastMessage}
          </p>
        </div>

        <div>
          <span className="b7 flex aspect-square h-5 w-6 items-center justify-center rounded-full bg-secondary-chat text-white">
            {unreadCount}
          </span>
        </div>
      </div>
    </Link>
  )
}
