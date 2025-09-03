import { useChatUserState } from '@/features/chat/stores/chatUserStore'
import { useSocket } from '@/shared/contexts/SocketContext'
import { useUserInfo } from '@/shared/hooks/useUserInfo'

export default function MentorRequestModal({
  modalStatus,
  setModalStatus,
  closeModal,
  isPremium,
}: {
  modalStatus: 'REQUEST' | 'SUCCESS' | 'FAIL'
  setModalStatus: React.Dispatch<
    React.SetStateAction<'REQUEST' | 'SUCCESS' | 'FAIL'>
  >
  closeModal: () => void
  isPremium: boolean
}) {
  const { data: userInfo } = useUserInfo()
  const { sendMessage } = useSocket()

  const chatUser = useChatUserState()

  console.log(modalStatus)
  if (modalStatus === 'REQUEST') {
    return (
      <div className="flex w-full flex-col items-center gap-5 bg-white px-5 py-10">
        <div className="flex flex-col items-center gap-2">
          <h1 className="h2 text-black">멘토링을 정말 요청할까요?</h1>
          <p className="b6 whitespace-pre-line text-center text-gray-5">
            {isPremium
              ? '프리미엄 회원 전용 1회 무료권을 사용하여\n멘토링을 요청할까요?'
              : `매칭 성사 시, 내 원두 포인트 500콩이 차감됩니다.\n남은 원두 포인트: 5,000콩`}
          </p>
        </div>
        <div className="flex w-full gap-2">
          <button
            onClick={() => {
              // setModalStatus('SUCCESS')
              console.log('요청', chatUser)

              if (chatUser) {
                sendMessage(`/pub/request`, chatUser)
              }
            }}
            className="b4 w-full rounded-10 bg-secondary-brown-2 py-2.5 text-white"
          >
            요청하기
          </button>
          <button
            onClick={closeModal}
            className="b4 w-full rounded-10 bg-gray-3 py-2.5 text-black"
          >
            취소
          </button>
        </div>
      </div>
    )
  }
  if (modalStatus === 'SUCCESS') {
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
            onClick={closeModal}
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
  if (modalStatus === 'FAIL') {
    return (
      <div className="flex w-full flex-col items-center gap-5 bg-white px-5 py-10">
        <div className="flex flex-col items-center gap-2">
          <h1 className="h2 text-black">원두 포인트가 부족해요</h1>
          <p className="b6 whitespace-pre-line text-center text-gray-5">
            {'멘토링을 요청하려면 500콩이 필요해요.\n남은 원두 포인트: 200콩'}
          </p>
        </div>

        <div className="flex w-full gap-2">
          <button
            onClick={closeModal}
            className="b4 w-full rounded-10 bg-secondary-brown-2 py-2.5 text-white"
          >
            구매하러 가기
          </button>
          <button
            onClick={closeModal}
            className="b4 w-full rounded-10 bg-gray-3 py-2.5 text-black"
          >
            취소
          </button>
        </div>
      </div>
    )
  }
}
