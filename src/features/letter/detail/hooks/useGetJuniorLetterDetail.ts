import { useQuery } from '@tanstack/react-query'
import { fetchJuniorLetterDetail } from '../../services/letterService.client'

export const useGetJuniorLetterDetail = ({
  letterId,
}: {
  letterId: number
}) => {
  return useQuery({
    queryKey: ['/junior/letter/detail', letterId],
    queryFn: () =>
      fetchJuniorLetterDetail({
        letterId,
      }),
    retry: 2,
    enabled: !!letterId,
  })
}
