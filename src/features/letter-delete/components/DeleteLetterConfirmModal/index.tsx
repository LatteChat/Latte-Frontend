import { useModal } from '@/shared/contexts/ModalContext'
import useDeleteLetterMutation from '../../hooks/useDeleteLetterMutation'
import Button from '@/shared/components/Button'

export default function DeleteLetterConfirmModal({
  deleteList,
}: {
  deleteList: number[]
}) {
  const { closeModal } = useModal()
  const { mutate: deleteLetterMutate } = useDeleteLetterMutation()

  return (
    <div className="flex w-full flex-col items-center gap-5 bg-white px-5 py-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="h2 text-black">글을 삭제할까요?</h1>
        <p className="b6 text-gray-5">작성하신 사연을 정말 삭제하시겠어요?</p>
      </div>

      <div className="flex w-full gap-2">
        <Button
          type="MODAL"
          buttonText=" 삭제"
          onClick={() => {
            deleteLetterMutate({ letterIds: deleteList })
          }}
        />

        <Button
          type="MODAL"
          buttonText="취소"
          onClick={closeModal}
          bgColor="bg-gray-3"
          textColor="text-black"
        />
      </div>
    </div>
  )
}
