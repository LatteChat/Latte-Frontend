import { useMutation } from '@tanstack/react-query'
import { saveJuniorUser } from '../services/userService.client'
import { useRouter } from 'next/navigation'

export default function useSaveJuniorUser() {
  const router = useRouter()

  return useMutation({
    mutationFn: ({ memberId, body }: { memberId: number; body: any }) =>
      saveJuniorUser({ memberId }, body),
    onSuccess: (data) => {
      console.log('Junior 등록 성공:', data)
      router.push(`/latte-chat/user/onboarding/start`)
    },
    onError: (error) => {
      console.error('Junior 등록 실패:', error)
    },
  })
}
