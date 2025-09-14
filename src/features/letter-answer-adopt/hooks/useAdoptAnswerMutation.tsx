import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateAdoptedAnswer } from '../services/letterAdoptService.client'
import { useModal } from '@/shared/contexts/ModalContext'
import AdoptSuccessModal from '../components/AdoptSuccessModal'

export default function useAdoptAnswerMutation() {
  const queryClient = useQueryClient()
  const { openModal } = useModal()

  return useMutation({
    mutationFn: ({
      letterId,
      answerId,
    }: {
      letterId: number
      answerId: number
    }) => updateAdoptedAnswer({ letterId, answerId }),
    onSuccess: (data) => {
      console.log('답변 채택 성공:', data)
      queryClient.invalidateQueries({
        queryKey: ['/junior/letter/detail'],
      })
      openModal(<AdoptSuccessModal />)
    },
    onError: (error) => {
      console.error('답변 채택 실패:', error)
    },
  })
}
