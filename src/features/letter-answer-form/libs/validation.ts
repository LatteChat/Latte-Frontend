import { useAnswerCreateState } from '../store/answerCreateStore'

type LetterFields = keyof ReturnType<typeof useAnswerCreateState>

const TOAST_MESSAGES: { field: LetterFields; message: string }[] = [
  { field: 'content', message: '내용을 입력하지 않았습니다' },
]

export const validateAnswer = (
  letter: ReturnType<typeof useAnswerCreateState>
) => {
  const invalid = TOAST_MESSAGES.find((t) => !letter[t.field])
  return invalid?.message
}
