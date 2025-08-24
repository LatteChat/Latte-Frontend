import { useQuery } from '@tanstack/react-query'
import { fetchLetterDetail } from '../services/letterService.client'

export const useGetLetterDetailQuery = ({ letterId }: { letterId: number }) => {
  return useQuery({
    queryKey: ['letter', { letterId }],
    queryFn: () => fetchLetterDetail({ letterId }),
    retry: 2,
    enabled: letterId !== null,
  })
}
