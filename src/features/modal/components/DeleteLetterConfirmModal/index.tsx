import useDeleteLetterQuery from '@/features/letter/hooks/useDeleteLetterQuery'
import { useModal } from '@/shared/contexts/ModalContext'

export default function DeleteLetterConfirmModal({
  deleteList,
}: {
  deleteList: number[]
}) {
  const { closeModal, openModal } = useModal()
  const { mutate: deleteLetterMutate } = useDeleteLetterQuery()

  return (
    <div className="flex w-full flex-col items-center gap-5 bg-white px-5 py-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="h2 text-black">글을 삭제할까요?</h1>
        <p className="b6 text-gray-5">작성하신 사연을 정말 삭제하시겠어요?</p>
      </div>

      <div className="flex w-full gap-2">
        <button
          onClick={() => {
            deleteLetterMutate({ letterIds: deleteList })
          }}
          className="w-full rounded-10 bg-secondary-brown-2 py-2.5 text-white"
        >
          삭제
        </button>
        <button
          onClick={closeModal}
          className="w-full rounded-10 bg-gray-3 py-2.5 text-black"
        >
          취소
        </button>
      </div>
    </div>
  )
}
