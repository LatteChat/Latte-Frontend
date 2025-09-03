import { useMutation } from '@tanstack/react-query'
import { sendLetter } from '../services/letterService.client'
import { useModal } from '@/shared/contexts/ModalContext'

export default function useSendLetterQuery() {
  const { closeModal } = useModal()

  return useMutation({
    mutationFn: ({ letterId }: { letterId: number }) =>
      sendLetter({ letterId }),
    onSuccess: (data) => {
      console.log('사연 전송 성공:', data)
      closeModal()
    },
    onError: (error) => {
      console.error('사연 전송 실패:', error)
    },
  })
}
