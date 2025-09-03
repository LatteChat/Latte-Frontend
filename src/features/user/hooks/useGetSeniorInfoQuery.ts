import { useQuery } from '@tanstack/react-query'
import { fetchSeniorUser } from '../services/userService.client'

export default function useGetSeniorInfoQuery({
  seniorId,
}: {
  seniorId: number
}) {
  return useQuery({
    queryKey: ['/senior/detail', { seniorId }],
    queryFn: () => fetchSeniorUser({ seniorId: seniorId! }),
    retry: 2,
    select: (data) => {
      const newData = {
        ...data,
        type: 'SENIOR',
      }

      return newData
    },
    enabled: !!seniorId,
  })
}
