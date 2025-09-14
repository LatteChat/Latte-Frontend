import { useMutation } from '@tanstack/react-query'
import { usePathname, useRouter } from 'next/navigation'
import { sendAnswer } from '../services/answerSendService.client'

export default function useSendAnswerMutation({
  letterId,
}: {
  letterId: number
}) {
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
