import { useQuery } from '@tanstack/react-query'
import { fetchLetterList } from '../services/letterService.senior.client'

export const useGetLetterListQuery = (payload?: {
  page: number
  seniorId?: number
}) => {
  return useQuery({
    queryKey: ['/senior/letter/list'],
    queryFn: () =>
      fetchLetterList({ page: payload?.page!, seniorId: payload?.seniorId! }),
    retry: 2,
    enabled: !!payload?.seniorId,
  })
}
