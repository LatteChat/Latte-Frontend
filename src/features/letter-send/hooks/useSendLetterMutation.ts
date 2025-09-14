import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useModal } from '@/shared/contexts/ModalContext'
import { useRouter } from 'next/navigation'
import { sendLetter } from '../services/letterSendService.client'

export default function useSendLetterMutation() {
  const { closeModal } = useModal()
  const router = useRouter()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ letterId }: { letterId: number }) =>
      sendLetter({ letterId }),
    onSuccess: (data) => {
      console.log('사연 전송 성공:', data)
      closeModal()
      queryClient.invalidateQueries({
        queryKey: ['/junior/coffee'],
      })

      router.back()
    },
    onError: (error) => {
      console.error('사연 전송 실패:', error)
    },
  })
}
