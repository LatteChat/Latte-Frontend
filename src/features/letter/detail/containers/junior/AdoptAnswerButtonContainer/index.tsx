import useAdoptAnswerQuery from '@/features/letter/hooks/useAdoptAnswerQuery'
import { useAnswerAdoptState } from '@/features/letter/stores/answerAdoptStore'
import Button from '@/shared/components/Button'
import { useModal } from '@/shared/contexts/ModalContext'
import { useParams } from 'next/navigation'

export default function AdoptAnswerButtonContainer() {
  const params = useParams()
  const letterId = params.id ? Number(params.id) : null

  if (!letterId) return

  const { openModal, closeModal } = useModal()
  const { selectedAnswer } = useAnswerAdoptState()
  const { mutate: adoptAnswerMutate } = useAdoptAnswerQuery()

  const handleAdoptLetter = () => {
    openModal(
      <div className="flex w-full flex-col items-center gap-5 bg-white px-5 py-10">
        <div className="flex flex-col items-center gap-2">
          <h1 className="h2 text-black">답변을 정말 채택할까요?</h1>
          <p className="b6 text-gray-5">해당 답변을 채택하시겠어요?</p>
        </div>

        <div className="flex w-full gap-2">
          <button
            onClick={() => {
              closeModal()
              adoptAnswerMutate({
                letterId: letterId,
                answerId: selectedAnswer,
              })
            }}
            className="b4 w-full rounded-10 bg-secondary-brown-2 py-2.5 text-white"
          >
            채택하기
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

  return <Button buttonText="채택하기" onClick={handleAdoptLetter} />
}
