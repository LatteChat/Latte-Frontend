import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { saveLetter } from '../services/letterService.client'
import { useLetterCreateActions } from '../stores/letterCreateStore'

export default function useSaveLetterQuery() {
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
      router.back()
    },
    onError: (error) => {
      console.error('사연 등록 실패:', error)
    },
  })
}
