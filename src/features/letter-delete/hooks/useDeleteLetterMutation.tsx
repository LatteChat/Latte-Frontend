import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteLetter } from '../services/letterDeleteService.client'
import { useModal } from '@/shared/contexts/ModalContext'
import DeleteLetterSuccessModal from '../components/DeleteLetterSuccessModal'

export default function useDeleteLetterMutation() {
  const { openModal } = useModal()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ letterIds }: { letterIds: number[] }) => {
      return Promise.all(letterIds.map((id) => deleteLetter({ letterId: id })))
    },
    onSuccess: (data) => {
      openModal(<DeleteLetterSuccessModal />)
      queryClient.invalidateQueries({
        queryKey: ['/junior/letter/list'],
      })

      console.log('사연 삭제 성공:', data)
    },
    onError: (error) => {
      console.error('사연 삭제 실패:', error)
    },
  })
}
