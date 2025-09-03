import { useMutation } from '@tanstack/react-query'
import { fetchSelectLetter } from '../services/letterService.senior.client'

export default function useSelectLetterQuery() {
  return useMutation({
    mutationFn: ({
      letterId,
      seniorId,
    }: {
      letterId: number
      seniorId: number
    }) => fetchSelectLetter({ letterId, seniorId }),
    onSuccess: (data) => {
      console.log('사연 선택 성공:', data)
    },
    onError: (error) => {
      console.error('사연 선택 실패:', error)
    },
  })
}
