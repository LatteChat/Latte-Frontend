import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateComment } from '../services/commentService.client'

export default function useEditCommentMutation(letterId: number) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({
      commentId,
      payload,
    }: {
      commentId: number
      payload: { comment: string }
    }) =>
      updateComment({
        commentId,
        payload,
      }),
    onSuccess: (data) => {
      console.log('댓글 수정 완료:', data)

      queryClient.invalidateQueries({
        queryKey: ['/comments', letterId],
      })
    },
    onError: (error) => {
      console.error('댓글 수정 실패:', error)
    },
  })
}
