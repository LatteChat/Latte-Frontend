import { useMutation } from '@tanstack/react-query'
import { updateSeniorUser } from '../services/userService.client'
import { useRouter } from 'next/navigation'

export default function useUpdateSeniorUser() {
  const router = useRouter()

  return useMutation({
    mutationFn: ({
      seniorId,
      payload,
    }: {
      seniorId: number
      payload: FormData
    }) => updateSeniorUser({ seniorId, payload }),
    onSuccess: (data) => {
      console.log('senior 수정 성공:', data)
      router.replace(`/latte-chat/mypage`)
    },
    onError: (error) => {
      console.error('senior 수정 실패:', error)
    },
  })
}
