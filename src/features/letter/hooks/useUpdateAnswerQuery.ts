import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useLetterCreateActions } from '../stores/letterCreateStore'
import { updateAnswer } from '../services/letterService.senior.client'

export default function useUpdateAnswerQuery() {
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
