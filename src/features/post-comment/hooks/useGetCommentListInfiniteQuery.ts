import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchCommentList } from '../services/commentService.client'

export default function useGetCommentListInfiniteQuery(payload?: {
  letterId: number
  page: number
  sort: string
  userId?: number | null
  memberType?: 'SENIOR' | 'JUNIOR' | null
}) {
  return useInfiniteQuery({
    queryKey: ['/comments', payload?.letterId, payload?.page, payload?.sort],
    queryFn: ({ pageParam = 0 }) =>
      fetchCommentList({
        page: pageParam,
        letterId: payload?.letterId!,
        sort: payload?.sort!,
        userId: payload?.userId,
        memberType: payload?.memberType,
      }),
    getNextPageParam: (lastPage) => {
      if (lastPage.last) return undefined
      return lastPage.number + 1
    },
    initialPageParam: 0,
    retry: 2,
    enabled: !!payload && !!payload.letterId && !!payload.sort,
  })
}
