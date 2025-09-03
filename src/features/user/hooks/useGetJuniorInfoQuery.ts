import { useQuery } from '@tanstack/react-query'
import { fetchJuniorUser } from '../services/userService.client'

export default function useGetJuniorInfoQuery({
  juniorId,
}: {
  juniorId: number
}) {
  return useQuery({
    queryKey: ['/junior/detail', { juniorId }],
    queryFn: () => fetchJuniorUser({ juniorId: juniorId! }),
    retry: 2,
    select: (data) => {
      const newData = {
        ...data,
        type: 'JUNIOR',
      }

      return newData
    },
    enabled: !!juniorId,
  })
}
