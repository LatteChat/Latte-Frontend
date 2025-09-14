import { useUserInfo } from '@/shared/hooks/useUserInfo'
import { useToast } from '@/shared/contexts/ToastContext'
import useSaveAnswerMutation from '../../hooks/useSaveAnswerMutation'
import { useAnswerCreateState } from '../../store/answerCreateStore'
import { validateAnswer } from '../../libs/validation'

export default function SaveButton({ letterId }: { letterId: number }) {
  const { data: userInfo } = useUserInfo()
  const answerCreateState = useAnswerCreateState()
  const { showToast } = useToast()

  const { mutate: saveAnswerMutate } = useSaveAnswerMutation({
    letterId,
  })

  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (!userInfo?.seniorId) return

    const errorMessage = validateAnswer(answerCreateState)
    if (errorMessage) {
      showToast(errorMessage)
      return
    }

    saveAnswerMutate({
      letterId,
      seniorId: userInfo?.seniorId,
      body: answerCreateState,
    })
  }

  return (
    <button
      className="b3 absolute bottom-5 left-1/2 -translate-x-1/2 rounded-10 bg-secondary-brown-2 px-7 py-2 text-secondary-brown-1 shadow-border"
      onClick={handleClick}
    >
      저장하기
    </button>
  )
}
