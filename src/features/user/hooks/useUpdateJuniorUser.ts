import { useMutation } from '@tanstack/react-query'
import { updateJuniorUser } from '../services/userService.client'

export default function useUpdateJuniorUser() {
  // const router = useRouter()

  return useMutation({
    mutationFn: ({ juniorId, payload }: { juniorId: number; payload: any }) =>
      updateJuniorUser({ juniorId, payload }),
    onSuccess: (data) => {
      console.log('Junior 수정 성공:', data)
      // router.push(`/latte-chat/user/onboarding/start`)
    },
    onError: (error) => {
      console.error('Junior 수정 실패:', error)
    },
  })
}
