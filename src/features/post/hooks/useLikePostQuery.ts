import { savePostLike } from '@/features/letter/services/letterService.client'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function useLikePostQuery() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (payload: {
      letterId: number
      userId: number
      memberType: string // SENIOR, JUNIOR
    }) => savePostLike(payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['/main/list', 0, 'view', null],
      })
    },
    onError: (error) => {
      console.error('사연 공감 실패:', error)
    },
  })
}
