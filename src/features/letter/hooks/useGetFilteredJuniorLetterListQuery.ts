import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchFilteredJuniorLetterList } from '../services/letterService.client'

export const useGetFilteredJuniorLetterListQuery = ({
  juniorId,
  answer,
  category,
}: {
  juniorId: number
  category: string | null
  answer: 0 | 1 | 2 | 3 | 4
}) => {
  return useInfiniteQuery({
    queryKey: ['/junior/letter/list', { juniorId, answer, category }],
    queryFn: ({ pageParam = 0 }) =>
      fetchFilteredJuniorLetterList({
        juniorId,
        answer,
        category,
        page: pageParam,
      }),
    getNextPageParam: (lastPage) => {
      if (lastPage.last) return undefined
      return lastPage.number + 1
    },
    initialPageParam: 0,
    enabled: !!juniorId,
    retry: 2,
  })
}
