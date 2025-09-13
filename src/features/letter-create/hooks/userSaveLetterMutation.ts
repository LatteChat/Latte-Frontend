import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useLetterCreateActions } from '../store/letterCreateStore'
import { saveLetter } from '../services/letterCreateService.client'

export default function useSaveLetterMutation() {
  const router = useRouter()
  const { reset } = useLetterCreateActions()

  return useMutation({
    mutationFn: ({
      juniorId,
      body,
    }: {
      juniorId: number
      body: {
        category: string | null
        title: string
        content: string
        isOpen: boolean
      }
    }) => saveLetter({ juniorId }, body),
    onSuccess: (data) => {
      console.log('사연 등록 성공:', data)
      reset()
      router.replace('/latte-chat/letters')
    },
    onError: (error) => {
      console.error('사연 등록 실패:', error)
    },
  })
}
