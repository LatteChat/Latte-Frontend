import { useLetterCreateState } from '../store/letterCreateStore'

type LetterFields = keyof ReturnType<typeof useLetterCreateState>

const TOAST_MESSAGES: { field: LetterFields; message: string }[] = [
  { field: 'category', message: '선택된 카테고리가 없습니다' },
  { field: 'answerType', message: '선택된 답변 형식이 없습니다' },
  { field: 'title', message: '제목을 입력하지 않았습니다' },
  { field: 'content', message: '내용을 입력하지 않았습니다' },
]

export const validateLetter = (
  letter: ReturnType<typeof useLetterCreateState>
) => {
  const invalid = TOAST_MESSAGES.find((t) => !letter[t.field])
  return invalid?.message
}
