import { useQuery } from '@tanstack/react-query'
import { fetchJuniorUser } from '../services/userService.client'

export const useGetJuniorInfoQuery = ({
  juniorId,
}: {
  juniorId?: number | null
}) => {
  return useQuery({
    queryKey: ['/junior/detail', { juniorId }],
    queryFn: () => fetchJuniorUser({ juniorId: juniorId! }),
    retry: 2,
    enabled: juniorId !== null,
  })
}
