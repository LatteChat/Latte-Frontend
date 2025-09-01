import { useQuery } from '@tanstack/react-query'
import { fetchFilteredJuniorLetterList } from '../services/letterService.client'

export const useGetFilteredJuniorLetterListQuery = ({
  juniorId,
  answer,
  category,
  page,
}: {
  juniorId: number
  category: string | null
  answer: 0 | 1 | 2 | 3 | 4
  page: number
}) => {
  return useQuery({
    queryKey: ['/junior/letter/list', { juniorId, answer, category, page }],
    queryFn: () =>
      fetchFilteredJuniorLetterList({
        juniorId,
        answer,
        category,
        page,
      }),
    retry: 2,
    enabled: !!juniorId,
  })
}
