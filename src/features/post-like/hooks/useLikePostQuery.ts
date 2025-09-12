import { useMutation, useQueryClient } from '@tanstack/react-query'
import { savePostLike } from '../services/postLikeService.client'

export default function useLikePostQuery({
  letterId,
}: {
  letterId?: number | null
}) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (payload: {
      letterId: number
      userId: number
      memberType: string // SENIOR, JUNIOR
    }) => savePostLike(payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['/main/list', 0, 'view'],
      })
      queryClient.invalidateQueries({
        queryKey: ['/post/detail', letterId],
      })
    },
    onError: (error) => {
      console.error('사연 공감 실패:', error)
    },
  })
}
