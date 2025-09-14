import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { updateJuniorUser } from '../services/mypageEditService.client'

export default function useUpdateJuniorUserMutation() {
  const router = useRouter()

  return useMutation({
    mutationFn: ({
      juniorId,
      payload,
    }: {
      juniorId: number
      payload: FormData
    }) => updateJuniorUser({ juniorId, payload }),
    onSuccess: (data) => {
      console.log('Junior 수정 성공:', data)
      router.replace(`/latte-chat/mypage`)
    },
    onError: (error) => {
      console.error('Junior 수정 실패:', error)
    },
  })
}
