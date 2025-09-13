import { useUserInfo } from '@/shared/hooks/useUserInfo'
import { useToast } from '@/shared/contexts/ToastContext'
import useUpdateLetterMutation from '../../hooks/useUpdateLetterMutation'
import { useLetterCreateState } from '../../store/letterCreateStore'
import { validateLetter } from '../../libs/validation'

export default function EditButton({ letterId }: { letterId: number }) {
  const { data: userInfo } = useUserInfo()
  const letterCreateState = useLetterCreateState()
  const { mutate: updateLetterMutate } = useUpdateLetterMutation()
  const { showToast } = useToast()

  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (!userInfo?.juniorId) return

    const errorMessage = validateLetter(letterCreateState)
    if (errorMessage) {
      showToast(errorMessage)
      return
    }

    updateLetterMutate({
      letterId,
      body: letterCreateState,
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
