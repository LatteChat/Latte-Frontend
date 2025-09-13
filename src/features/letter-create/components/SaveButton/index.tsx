import { useUserInfo } from '@/shared/hooks/useUserInfo'
import { useLetterCreateState } from '@/features/letter-create/store/letterCreateStore'
import { useToast } from '@/shared/contexts/ToastContext'
import useSaveLetterMutation from '../../hooks/userSaveLetterMutation'

type LetterFields = keyof ReturnType<typeof useLetterCreateState>

const TOAST_MESSAGES: { field: LetterFields; message: string }[] = [
  { field: 'category', message: '선택된 카테고리가 없습니다' },
  { field: 'answerType', message: '선택된 답변 형식이 없습니다' },
  { field: 'title', message: '제목을 입력하지 않았습니다' },
  { field: 'content', message: '내용을 입력하지 않았습니다' },
]

export default function SaveButton() {
  const { data: userInfo } = useUserInfo()

  const letterCreateState = useLetterCreateState()
  const { mutate: saveLetterMutate } = useSaveLetterMutation()
  const { showToast } = useToast()

  const validateLetter = (letter: ReturnType<typeof useLetterCreateState>) => {
    const invalid = TOAST_MESSAGES.find((t) => !letter[t.field])
    return invalid?.message
  }

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
