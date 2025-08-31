import { useQuery } from '@tanstack/react-query'
import { fetchPostDetail } from '../services/postService.client'

export default function useGetPostDetailQuery(payload?: {
  letterId: number
  userId?: number | null
  memberType: string
}) {
  return useQuery({
    queryKey: ['/main/detail/all', payload?.letterId],
    queryFn: () =>
      fetchPostDetail({
        letterId: payload?.letterId!,
        userId: payload?.userId!,
        memberType: payload?.memberType!,
      }),
    retry: 2,
    enabled:
      !!payload &&
      !!payload.letterId &&
      !!payload.userId &&
      !!payload.memberType,
  })
}
