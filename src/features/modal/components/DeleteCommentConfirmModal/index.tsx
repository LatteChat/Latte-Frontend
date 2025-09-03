import useDeleteCommentQuery from '@/features/post/comment/hooks/useDeleteCommentQuery'
import { useModal } from '@/shared/contexts/ModalContext'
import { useParams } from 'next/navigation'

export default function DeleteCommentConfirmModal({
  commentId,
}: {
  commentId: number
}) {
  const params = useParams()
  const letterId = Number(params.id) ?? null
  const { closeModal } = useModal()
  const { mutate: deleteCommentMutate } = useDeleteCommentQuery(letterId)

  return (
    <div className="flex w-full flex-col items-center gap-5 bg-white px-5 py-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="h2 text-black">댓글을 삭제할까요?</h1>
        <p className="b6 text-gray-5">해당 댓글을 완전히 삭제할까요?</p>
      </div>

      <div className="flex w-full gap-2">
        <button
          onClick={() => {
            if (!commentId) return
            deleteCommentMutate({ commentId })
          }}
          className="w-full rounded-10 bg-secondary-brown-2 py-2.5 text-white"
        >
          삭제하기
        </button>
        <button
          onClick={() => {
            closeModal()
          }}
          className="w-full rounded-10 bg-gray-3 py-2.5 text-black"
        >
          취소
        </button>
      </div>
    </div>
  )
}
