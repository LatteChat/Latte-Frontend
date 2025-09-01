import { useMutation } from '@tanstack/react-query'
import { updateLetter } from '../services/letterService.client'
import { useRouter } from 'next/navigation'
import { useLetterCreateActions } from '../stores/letterCreateStore'

export default function useUpdateLetterQuery() {
  const router = useRouter()
  const { reset } = useLetterCreateActions()

  return useMutation({
    mutationFn: ({
      letterId,
      body,
    }: {
      letterId: number
      body: {
        category: string | null
        title: string
        content: string
        answerType: string[]
        isOpen: boolean
      }
    }) => updateLetter({ letterId, body }),
    onSuccess: (data) => {
      console.log('사연 수정 성공:', data)
      reset()
      router.back()
    },
    onError: (error) => {
      console.error('사연 수정 실패:', error)
    },
  })
}
