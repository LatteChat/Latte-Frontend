import { useModal } from '@/shared/contexts/ModalContext'
import { useAnswerAdoptState } from '../../stores/answerAdoptStore'
import useAdoptAnswerMutation from '../../hooks/useAdoptAnswerMutation'
import Button from '@/shared/components/Button'

export default function AdoptConfirmModal({ letterId }: { letterId: number }) {
  const { closeModal } = useModal()
  const { selectedAnswer } = useAnswerAdoptState()
  const { mutate: adoptAnswerMutate } = useAdoptAnswerMutation()

  const handleAdoptAnswer = () => {
    closeModal()
    adoptAnswerMutate({
      letterId: letterId,
      answerId: selectedAnswer,
    })
  }

  return (
    <div className="flex w-full flex-col items-center gap-5 bg-white px-5 py-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="h2 text-black">답변을 정말 채택할까요?</h1>
        <p className="b6 text-gray-5">해당 답변을 채택하시겠어요?</p>
      </div>

      <div className="flex w-full gap-2">
        <Button
          buttonText="채택하기"
          type="MODAL"
          onClick={handleAdoptAnswer}
        />
        <Button
          buttonText="취소"
          onClick={closeModal}
          type="MODAL"
          bgColor="bg-gray-3"
          textColor="text-black"
        />
      </div>
    </div>
  )
}
