import { useMutation } from '@tanstack/react-query'
import { saveSeniorUser } from '../services/userService.client'
import { useRouter } from 'next/navigation'

export default function useSaveSeniorUser() {
  const router = useRouter()

  return useMutation({
    mutationFn: ({ memberId, body }: { memberId: number; body: any }) =>
      saveSeniorUser({ memberId }, body),
    onSuccess: (data) => {
      console.log('Senior 등록 성공:', data)
      router.push(`/latte-chat/user/onboarding/start`)
    },
    onError: (error) => {
      console.error('Senior 등록 실패:', error)
    },
  })
}
