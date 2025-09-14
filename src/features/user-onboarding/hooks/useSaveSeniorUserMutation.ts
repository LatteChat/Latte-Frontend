import { useMutation } from '@tanstack/react-query'
import { saveSeniorUser } from '../services/onboardingService.client'

export default function useSaveSeniorUserMutation() {
  return useMutation({
    mutationFn: ({ memberId, body }: { memberId: number; body: any }) =>
      saveSeniorUser({ memberId }, body),
  })
}
