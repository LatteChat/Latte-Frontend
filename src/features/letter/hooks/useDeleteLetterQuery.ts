import { useMutation } from '@tanstack/react-query'
import { deleteLetter } from '../services/letterService.client'

export default function useDeleteLetterQuery() {
  return useMutation({
    mutationFn: ({ letterId }: { letterId: number }) =>
      deleteLetter({ letterId }),
    onSuccess: (data) => {
      console.log('사연 삭제 성공:', data)
    },
    onError: (error) => {
      console.error('사연 삭제 실패:', error)
    },
  })
}
