import { useMutation } from '@tanstack/react-query'
import { useModal } from '@/shared/contexts/ModalContext'
import { saveLetterImage } from '../services/letterImageGenerateService.client'

export default function useSaveLetterImageMutation(letterId: number) {
  const { closeModal } = useModal()

  return useMutation({
    mutationFn: ({ letterId }: { letterId: number }) =>
      saveLetterImage({ letterId }),
    onSuccess: (data: any) => {
      console.log('사연 이미지 등록 성공:', data)
      closeModal()
    },
    onError: (error) => {
      console.error('사연 이미지 등록 실패:', error)
    },
  })
}
