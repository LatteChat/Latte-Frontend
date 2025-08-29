import { useQuery } from '@tanstack/react-query'
import { fetchCommentList } from '../services/commentService.client'

export default function useGetCommentListQuery(payload?: {
  letterId: number
  page: number
  sort: string
}) {
  console.log(payload?.page, payload?.sort)
  return useQuery({
    queryKey: ['/comments', payload?.letterId, payload?.page, payload?.sort],
    queryFn: () =>
      fetchCommentList({
        letterId: payload?.letterId!,
        page: payload?.page!,
        sort: payload?.sort!,
      }),
    retry: 2,
    enabled:
      !!payload && !!payload.letterId && payload.page != null && !!payload.sort,
  })
}
