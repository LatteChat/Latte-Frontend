import Image from 'next/image'

type Chat = {
  id: number
  user: {
    profile: string
    nickname: string
  }
  lastChat: {
    date: string
    content: string
  }
  unreadMessageCount: number
}

type ChatItemProps = {
  chat: Chat
}

export default function ChatItem({ chat }: ChatItemProps) {
  return (
    <div
      className="flex gap-4 border-b border-gray-300 px-5 py-4"
      key={chat.id}
    >
      <Image
        src={chat.user.profile}
        alt="사용자 프로필 이미지"
        width={44}
        height={44}
        className="aspect-square h-11 w-11 rounded-full"
      />

      <div className="flex w-full items-center gap-5">
        <div className="flex w-full flex-1 flex-col gap-1">
          <div className="flex flex-wrap items-center gap-1">
            <span className="b5 text-gray-6">{chat.user.nickname}</span>
            <span className="b9 text-gray-4">{chat.lastChat.date}</span>
          </div>
          <p className="b6 text-gray-6 line-clamp-2">{chat.lastChat.content}</p>
        </div>

        <div>
          <span className="b7 bg-secondary-chat flex aspect-square h-5 w-6 items-center justify-center rounded-full text-white">
            {chat.unreadMessageCount}
          </span>
        </div>
      </div>
    </div>
  )
}
