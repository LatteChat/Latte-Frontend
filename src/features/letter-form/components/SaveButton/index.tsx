import { useUserInfo } from '@/shared/hooks/useUserInfo'
import { useToast } from '@/shared/contexts/ToastContext'
import useSaveLetterMutation from '../../hooks/userSaveLetterMutation'
import { useLetterCreateState } from '../../store/letterCreateStore'
import { validateLetter } from '../../libs/validation'

export default function SaveButton() {
  const { data: userInfo } = useUserInfo()
  const letterCreateState = useLetterCreateState()
  const { mutate: saveLetterMutate } = useSaveLetterMutation()
  const { showToast } = useToast()

  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (!userInfo?.juniorId) return

    const errorMessage = validateLetter(letterCreateState)
    if (errorMessage) {
      showToast(errorMessage)
      return
    }

    saveLetterMutate({
      juniorId: userInfo.juniorId,
      body: letterCreateState,
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
