import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { updateAnswer } from '../services/answerCreateService.client'
import { useLetterCreateActions } from '@/features/letter-form/store/letterCreateStore'

export default function useUpdateAnswerMutation() {
  const router = useRouter()
  const { reset } = useLetterCreateActions()

  return useMutation({
    mutationFn: ({
      letterId,
      answerId,
      body,
    }: {
      letterId: number
      answerId: number
      body: {
        content: string
      }
    }) => updateAnswer({ letterId, answerId, body }),
    onSuccess: (data) => {
      console.log('답변 수정 성공:', data)
      reset()
      router.back()
    },
    onError: (error) => {
      console.error('답변 수정 실패:', error)
    },
  })
}
