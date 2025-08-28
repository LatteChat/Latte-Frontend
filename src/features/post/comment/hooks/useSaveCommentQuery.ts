import { useMutation, useQueryClient } from '@tanstack/react-query'
import { saveComment } from '../services/commentService.client'

export default function useSaveCommentQuery(letterId: number) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (payload: {
      letterId: number
      body: {
        memberType: string
        seniorId?: number | null
        juniorId?: number | null
        parentId: number | null
        comment: string
      }
    }) => saveComment(payload),
    onSuccess: (data) => {
      console.log('댓글 작성 완료:', data)
      queryClient.invalidateQueries({
        queryKey: ['/comments', letterId],
      })
    },
    onError: (error) => {
      console.error('사연 공감 실패:', error)
    },
  })
}
