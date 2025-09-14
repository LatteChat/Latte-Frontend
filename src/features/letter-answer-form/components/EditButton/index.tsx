import { useToast } from '@/shared/contexts/ToastContext'
import useUpdateAnswerMutation from '@/features/letter-answer-form/hooks/useUpdateAnswerMutation'
import { useAnswerCreateState } from '@/features/letter-answer-form/store/answerCreateStore'
import { validateAnswer } from '@/features/letter-answer-form/libs/validation'

export default function EditButton({
  letterId,
  answerId,
}: {
  letterId: number
  answerId: number
}) {
  const answerCreateState = useAnswerCreateState()
  const { mutate: updateAnswerMutate } = useUpdateAnswerMutation()
  const { showToast } = useToast()

  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (!letterId || !answerId) return

    const errorMessage = validateAnswer(answerCreateState)
    if (errorMessage) {
      showToast(errorMessage)
      return
    }

    updateAnswerMutate({
      letterId,
      answerId,
      body: answerCreateState,
    })
  }

  return (
    <button
      className="b3 absolute bottom-5 left-1/2 -translate-x-1/2 rounded-10 bg-secondary-brown-2 px-7 py-2 text-secondary-brown-1 shadow-border"
      onClick={handleClick}
    >
      수정하기
    </button>
  )
}
