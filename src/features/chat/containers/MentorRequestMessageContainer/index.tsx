import { useSocket } from '@/shared/contexts/SocketContext'
import { useChatUserState } from '../../stores/chatUserStore'
import { useParams } from 'next/navigation'
import { useChatStatusActions } from '../../stores/chatStatusStore'

export default function MentorRequestMessageContainer() {
  const params = useParams()
  const chatRoomId = params.id ? Number(params.id) : null

  const { sendMessage } = useSocket()
  const chatUser = useChatUserState()
  const { setStatus } = useChatStatusActions()

  const handleAcceptMetor = () => {
    sendMessage(`/pub/accept`, {
      seniorId: chatUser.senior.id,
      juniorId: chatUser.junior.id,
      chatRoomId,
    })
    setStatus('ACTIVE')
  }

  const handleRejectMetor = () => {
    setStatus('INACTIVE')
    // sendMessage(`/pub/reject`, { ...chatUser, chatRoomId })
  }

  return (
    <div className="flex flex-col gap-5">
      <p className="b10 flex items-center justify-center rounded-10 bg-gray-1 py-2">
        상대방이 멘토 신청과 함께 커피콩을 보내고 싶어해요!
      </p>
      <div className="flex justify-center gap-5">
        <button
          onClick={handleAcceptMetor}
          className="b12 flex items-center justify-center rounded-10 bg-secondary-brown-4 px-5 py-2 text-white"
        >
          수락하기
        </button>
        <button
          onClick={handleRejectMetor}
          className="b12 flex items-center justify-center rounded-10 bg-gray-1 px-5 py-2 text-black"
        >
          거절하기
        </button>
      </div>
    </div>
  )
}
