import { useMutation, useQueryClient } from '@tanstack/react-query'
import { saveCommentLike } from '../services/commentService.client'

export default function useLikeCommentMutation(letterId: number) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (payload: {
      commentId: number
      userId: number
      memberType: 'SENIOR' | 'JUNIOR'
    }) => saveCommentLike(payload),
    onSuccess: (data) => {
      console.log('댓글 좋아요 완료:', data)
      queryClient.invalidateQueries({
        queryKey: ['/comments', letterId],
      })
    },
    onError: (error) => {
      console.error('댓글 좋아요 실패:', error)
    },
  })
}
