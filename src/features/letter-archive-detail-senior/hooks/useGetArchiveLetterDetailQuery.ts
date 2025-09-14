import { useQuery } from '@tanstack/react-query'
import { fetchSeniorLetterDetail } from '../services/letterArchiveDetail.client'

export default function useGetSeniorArchiveLetterDetailQuery({
  letterId,
  seniorId,
}: {
  letterId: number
  seniorId?: number | null
}) {
  return useQuery({
    queryKey: ['/senior/letter/detail', letterId, seniorId],
    queryFn: () =>
      fetchSeniorLetterDetail({
        letterId,
        seniorId: seniorId!,
      }),
    retry: 2,
    enabled: !!letterId || !!seniorId,
  })
}
