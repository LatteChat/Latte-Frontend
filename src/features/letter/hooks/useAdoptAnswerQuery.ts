import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { updateAdoptedAnswer } from '../services/letterService.client'

export default function useAdoptAnswerQuery() {
  const router = useRouter()

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
      // router.back()
    },
    onError: (error) => {
      console.error('답변 채택 실패:', error)
    },
  })
}
