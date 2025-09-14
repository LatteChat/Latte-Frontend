import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteComment } from '../services/commentService.client'
import { useModal } from '@/shared/contexts/ModalContext'
import DeleteCommentSuccessModal from '../components/DeleteCommentSuccessModal'

export default function useDeleteCommentMutation(letterId: number) {
  const queryClient = useQueryClient()
  const { openModal } = useModal()

  return useMutation({
    mutationFn: (payload: { commentId: number }) => deleteComment(payload),
    onSuccess: (data) => {
      console.log('댓글 삭제 완료:', data)

      queryClient.invalidateQueries({
        queryKey: ['/comments', letterId],
      })
      openModal(<DeleteCommentSuccessModal />)
    },
    onError: (error) => {
      console.error('댓글 삭제 실패:', error)
    },
  })
}
