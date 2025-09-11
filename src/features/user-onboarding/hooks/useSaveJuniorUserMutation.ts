import { useMutation } from '@tanstack/react-query'
import { saveJuniorUser } from '../services/onboardingService.client'

export default function useSaveJuniorUserMutation() {
  return useMutation({
    mutationFn: ({ memberId, body }: { memberId: number; body: any }) =>
      saveJuniorUser({ memberId }, body),
  })
}
