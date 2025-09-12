import { fetchPostList } from '@/features/post-popular-list/services/postPopularListService.client'
import { useInfiniteQuery } from '@tanstack/react-query'

export default function useGetPostListInfiniteQuery(payload?: {
  page: number
  filter: 'all' | 'view'
  category: string | null
  userId?: number | null
  memberType?: string | null
  initialData?: any
}) {
  return useInfiniteQuery({
    queryKey: ['/main/list', payload?.filter, payload?.category],
    queryFn: ({ pageParam = 0 }) =>
      fetchPostList({
        page: pageParam,
        filter: payload!.filter,
        category: payload!.category!,
        userId: payload!.userId!,
        memberType: payload!.memberType!,
      }),
    getNextPageParam: (lastPage) => {
      if (lastPage.last) return undefined
      return lastPage.number + 1
    },
    initialPageParam: 0,
    retry: 2,
    initialData: payload?.initialData
      ? {
          pages: [payload.initialData],
          pageParams: [0],
        }
      : undefined,
    enabled: !!payload,
  })
}
