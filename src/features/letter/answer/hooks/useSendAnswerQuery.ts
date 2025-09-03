import { useMutation } from '@tanstack/react-query'
import { sendAnswer } from '../../services/letterService.senior.client'
import { usePathname, useRouter } from 'next/navigation'

export default function useSendAnswerQuery({ letterId }: { letterId: number }) {
  const router = useRouter()

  return useMutation({
    mutationFn: ({
      letterId,
      answerId,
    }: {
      letterId: number
      answerId: number
    }) => sendAnswer({ letterId, answerId }),
    onSuccess: (data) => {
      console.log('답변 전송 성공:', data)
      router.replace(`/latte-chat/letters/archive/letter/${letterId}`)
    },
    onError: (error) => {
      console.error('답변 전송 실패:', error)
    },
  })
}
