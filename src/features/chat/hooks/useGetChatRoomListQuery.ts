import { useQuery } from '@tanstack/react-query'
import { fetchChatRoomList } from '../services/chatService.client'

export const useGetChatRoomListQuery = ({
  userId,
  memberType,
}: {
  userId?: number | null
  memberType?: 'SENIOR' | 'JUNIOR'
}) => {
  console.log(userId, memberType)
  return useQuery({
    queryKey: [`/chat/rooms`, userId],
    queryFn: () =>
      fetchChatRoomList({ userId: userId!, memberType: memberType! }),
    retry: 2,
    enabled: !!userId || !!memberType,
  })
}
