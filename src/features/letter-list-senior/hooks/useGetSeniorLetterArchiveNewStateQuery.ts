import { useQuery } from '@tanstack/react-query'
import { fetchSeniorLetterArchiveNewState } from '../services/letterListService.client'

export const useGetSeniorLetterArchiveNewStateQuery = (payload?: {
  seniorId?: number
}) => {
  return useQuery({
    queryKey: [`/senior/${payload?.seniorId}/is-new`],
    queryFn: () =>
      fetchSeniorLetterArchiveNewState({ seniorId: payload?.seniorId! }),
    retry: 2,
    enabled: !!payload?.seniorId,
  })
}
