import { useQuery } from '@tanstack/react-query'
import { fetchPostList } from '../services/postPopularListService.client'

export default function useGetPostListQuery(payload?: {
  page: number
  filter: 'all' | 'view'
  category: string | null
  userId?: number | null
  memberType?: string | null
  initialData?: any
}) {
  return useQuery({
    queryKey: ['/main/list', payload?.page, payload?.filter, payload?.category],
    queryFn: () =>
      fetchPostList({
        page: payload!.page,
        filter: payload!.filter,
        category: payload!.category!,
        userId: payload!.userId!,
        memberType: payload!.memberType!,
      }),
    retry: 2,
    initialData: payload?.initialData,
    enabled: !!payload,
  })
}
