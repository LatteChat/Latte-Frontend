import { useModal } from '@/shared/contexts/ModalContext'
import { useRouter } from 'next/navigation'

export default function MentorSuccessModal() {
  const router = useRouter()
  const { closeModal } = useModal()
  return (
    <div className="flex w-full flex-col items-center gap-5 bg-white px-5 py-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="h2 text-black">멘토링이 요청되었어요</h1>
        <p className="b6 whitespace-pre-line text-center text-gray-5">
          {
            '1:1 멘토링이 요청되었어요.\n채팅방에서 멘토링 성사 여부를 확인할 수 있어요.'
          }
        </p>
      </div>

      <div className="flex w-full gap-2">
        <button
          onClick={() => {
            router.replace('/latte-chat/chats')
            closeModal()
          }}
          className="b4 w-full rounded-10 bg-secondary-brown-2 py-2.5 text-white"
        >
          확인하기
        </button>
        <button
          onClick={closeModal}
          className="b4 w-full rounded-10 bg-gray-3 py-2.5 text-black"
        >
          닫기
        </button>
      </div>
    </div>
  )
}
