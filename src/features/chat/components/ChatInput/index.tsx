import { useSocket } from '@/shared/contexts/SocketContext'
import { useUserInfo } from '@/shared/hooks/useUserInfo'
import { useState } from 'react'
import { useChatUserState } from '../../stores/chatUserStore'

export default function ChatInput({ chatRoomId }: { chatRoomId: number }) {
  const { data: userInfo } = useUserInfo()
  const chatUser = useChatUserState()

  const { sendMessage } = useSocket()
  const [content, setContent] = useState('')

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault()
    if (!content.trim()) return

    sendMessage(`/pub/message`, {
      chatRoomId,
      juniorId: chatUser.junior.id,
      seniorId: chatUser.senior.id,
      memberType: userInfo?.memberType,
      content: content,
    })

    setContent('')
  }

  return (
    <form
      onSubmit={handleSendMessage}
      className="flex gap-2 bg-white px-5 py-4"
    >
      <img src="/icons/plus-icon.svg" />

      <div className="flex w-full overflow-hidden rounded-[1.25rem] bg-gray-200 pr-3">
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="b10 flex-1 bg-transparent px-4 py-2 outline-none"
        />
        <button type="submit">
          <img src="/icons/send-icon.svg" />
        </button>
      </div>
    </form>
  )
}
