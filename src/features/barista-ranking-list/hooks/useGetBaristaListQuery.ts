import { useQuery } from '@tanstack/react-query'
import { fetchBaristaList } from '../services/baristaRankingService.server'

export default function useGetBaristaListQuery() {
  return useQuery({
    queryKey: ['/main/best/senior'],
    queryFn: () => fetchBaristaList(),
    retry: 2,
  })
}
