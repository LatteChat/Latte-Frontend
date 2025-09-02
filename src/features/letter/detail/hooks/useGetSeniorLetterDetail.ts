import { useQuery } from '@tanstack/react-query'
import { fetchSeniorLetterDetail } from '../../services/letterService.senior.client'

export const useGetSeniorLetterDetail = ({
  letterId,
  seniorId,
}: {
  letterId: number
  seniorId?: number | null
}) => {
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
