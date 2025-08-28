import { useQuery } from '@tanstack/react-query'
import { fetchCommentList } from '../services/commentService.client'

export default function useGetCommentListQuery(payload?: { letterId: number }) {
  return useQuery({
    queryKey: ['/comments', payload?.letterId],
    queryFn: () =>
      fetchCommentList({
        letterId: payload?.letterId!,
      }),
    retry: 2,
    enabled: !!payload && !!payload.letterId,
  })
}
