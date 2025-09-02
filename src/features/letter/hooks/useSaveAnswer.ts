import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { saveAnswer } from '../services/letterService.senior.client'

export default function useSaveAnswer({ letterId }: { letterId: number }) {
  const router = useRouter()

  return useMutation({
    mutationFn: ({
      letterId,
      seniorId,
      body,
    }: {
      letterId: number
      seniorId: number
      body: {
        content: string
      }
    }) => saveAnswer({ letterId, seniorId }, body),
    onSuccess: (data) => {
      console.log('답변 등록 성공:', data)
      router.replace(`/latte-chat/letters/archive/letter/${letterId}/answer`)
    },
    onError: (error) => {
      console.error('답변 등록 실패:', error)
    },
  })
}
