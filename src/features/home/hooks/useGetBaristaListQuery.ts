import { useQuery } from '@tanstack/react-query'
import { fetchBaristaList } from '../services/homeService.client'

export const useGetBaristaListQuery = () => {
  return useQuery({
    queryKey: ['/main/best/senior'],
    queryFn: () => fetchBaristaList(),
    retry: 2,
  })
}
