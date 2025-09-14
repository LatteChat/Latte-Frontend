import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchFilteredSeniorLetterList } from '../services/letterListService.client'

export default function useGetFilteredSeniorLetterListInfiniteQuery({
  seniorId,
  answer,
  category,
}: {
  seniorId: number
  category: string | null
  answer: 0 | 1 | 2 | 3 | 4
}) {
  return useInfiniteQuery({
    queryKey: ['/senior/letter/list', { seniorId, answer, category }],
    queryFn: ({ pageParam = 0 }) =>
      fetchFilteredSeniorLetterList({
        seniorId,
        answer,
        category,
        page: pageParam,
      }),

    getNextPageParam: (lastPage) => {
      if (lastPage.last) return undefined
      return lastPage.number + 1
    },
    initialPageParam: 0,
    enabled: !!seniorId,
    retry: 2,
  })
}
