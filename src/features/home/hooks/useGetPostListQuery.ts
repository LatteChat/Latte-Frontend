import { useQuery } from '@tanstack/react-query'
import { fetchPostList } from '../services/homeService.client'

export const useGetPostListQuery = (payload?: {
  page: number
  filter: 'all' | 'view'
  category: string | null
  userId: number | null
  memberType: string
}) => {
  return useQuery({
    queryKey: ['/main/list', payload?.page, payload?.filter, payload?.category],
    queryFn: () =>
      fetchPostList({
        page: payload!.page,
        filter: payload!.filter,
        category: payload!.category!,
        userId: payload!.userId!,
        memberType: payload!.memberType,
      }),
    retry: 2,
    enabled: !!payload && !!payload.userId && !!payload.memberType,
  })
}
