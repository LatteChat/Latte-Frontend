import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchLetterList } from '../services/letterListService.client'

export const useGetSeniorLetterListInfiniteQuery = (payload?: {
  page: number
  seniorId?: number
}) => {
  return useInfiniteQuery({
    queryKey: ['/senior/letter/list', payload?.seniorId],
    queryFn: ({ pageParam = 0 }) =>
      fetchLetterList({ page: pageParam, seniorId: payload?.seniorId! }),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.last) return undefined
      return lastPage.number + 1
    },
    initialPageParam: 0,
    retry: 2,
    enabled: !!payload?.seniorId,
    gcTime: 1000 * 60 * 10, // 10분 캐시 유지
    staleTime: 1000 * 60, // 1분 동안 fresh 처리
  })
}
