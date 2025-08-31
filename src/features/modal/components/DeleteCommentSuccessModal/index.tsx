import { useModal } from '@/shared/contexts/ModalContext'

export default function DeleteCommentSuccessModal() {
  const { closeModal } = useModal()
  return (
    <div className="flex w-full flex-col items-center gap-5 bg-white">
      <div className="flex flex-col items-center gap-2">
        <h1 className="h2 text-black">댓글이 삭제되었어요</h1>
        <p className="b6 text-gray-5">댓글이 삭제되었어요.</p>
      </div>

      <div className="flex w-full gap-2">
        <button
          onClick={closeModal}
          className="w-full rounded-10 bg-gray-3 py-2.5 text-black"
        >
          닫기
        </button>
      </div>
    </div>
  )
}
