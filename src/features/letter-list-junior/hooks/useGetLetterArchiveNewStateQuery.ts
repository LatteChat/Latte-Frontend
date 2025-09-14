import { useQuery } from '@tanstack/react-query'
import { fetchLetterArchiveNewState } from '../services/letterListService.client'

export const useGetLetterArchiveNewStateQuery = (payload?: {
  juniorId?: number
}) => {
  return useQuery({
    queryKey: [`/junior/${payload?.juniorId}/is-new`],
    queryFn: () => fetchLetterArchiveNewState({ juniorId: payload?.juniorId! }),
    retry: 2,
    enabled: !!payload?.juniorId,
  })
}
