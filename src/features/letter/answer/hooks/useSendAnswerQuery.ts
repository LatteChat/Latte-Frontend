import { useMutation } from '@tanstack/react-query'
import { sendAnswer } from '../../services/letterService.senior.client'

export default function useSendAnswerQuery() {
  return useMutation({
    mutationFn: ({
      letterId,
      answerId,
    }: {
      letterId: number
      answerId: number
    }) => sendAnswer({ letterId, answerId }),
    onSuccess: (data) => {
      console.log('답변 전송 성공:', data)
    },
    onError: (error) => {
      console.error('답변 전송 실패:', error)
    },
  })
}
