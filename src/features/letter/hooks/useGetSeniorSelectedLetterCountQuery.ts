import { useQuery } from '@tanstack/react-query'
import { fetchSelectedLetterCount } from '../services/letterService.senior.client'

export default function useGetSeniorSelectedLetterCountQuery(payload?: {
  seniorId: number
}) {
  return useQuery({
    queryKey: [`/senior/letter/select/count`, payload?.seniorId],
    queryFn: () =>
      fetchSelectedLetterCount({
        seniorId: payload?.seniorId!,
      }),
    retry: 2,
    enabled: !!payload?.seniorId,
  })
}
