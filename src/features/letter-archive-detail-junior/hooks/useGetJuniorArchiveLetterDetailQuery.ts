import { useQuery } from '@tanstack/react-query'
import { fetchJuniorArchiveLetterDetail } from '../services/letterArchiveDetail.client'

export const useGetJuniorArchiveLetterDetailQuery = ({
  letterId,
}: {
  letterId: number
}) => {
  return useQuery({
    queryKey: ['/junior/letter/detail', letterId],
    queryFn: () =>
      fetchJuniorArchiveLetterDetail({
        letterId,
      }),
    retry: 2,
    enabled: !!letterId,
  })
}
