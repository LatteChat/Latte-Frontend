import { useMutation } from '@tanstack/react-query'
import { saveChatRoomEnter } from '../services/chatService.client'

export default function useEnterChatRoomQuery() {
  return useMutation({
    mutationFn: ({
      chatRoomId,
      memberType,
    }: {
      chatRoomId: number
      memberType: 'SENIOR' | 'JUNIOR'
    }) => saveChatRoomEnter({ chatRoomId, memberType }),
    onSuccess: (data: any) => {
      console.log('채팅방 입장 완료:', data)
    },
    onError: (error) => {
      console.error('채팅방 입장 실패:', error)
    },
  })
}
