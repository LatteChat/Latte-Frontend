import { useMutation } from '@tanstack/react-query'
import { saveChatRoomLeave } from '../services/chatService.client'

export default function useLeaveChatRoomQuery() {
  return useMutation({
    mutationFn: ({
      chatRoomId,
      memberType,
    }: {
      chatRoomId: number
      memberType: 'SENIOR' | 'JUNIOR'
    }) => saveChatRoomLeave({ chatRoomId, memberType }),
    onSuccess: (data: any) => {
      console.log('채팅방 나가기 완료:', data)
    },
    onError: (error) => {
      console.error('채팅방 나가기 실패:', error)
    },
  })
}
