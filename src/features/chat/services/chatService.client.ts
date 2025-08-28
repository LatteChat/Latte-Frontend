import { httpCSR } from '@/shared/apis/http'
import { Message } from '../types/Chat'

// 채팅방 목록 조회
export const fetchChatRoomList = async (): Promise<any> => {
  // const token = localStorage.getItem('accessToken')
  // if (!token) throw new Error('토큰이 없습니다.')
  // return await httpCSR(`/chat/chat/${chatRoomId}`, {
  //   method: 'GET',
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // })
}

type ChatListResponse = {
  chatMessageList: Message[]
}

// 채팅 메시지 목록 조회
export const fetchChatList = async ({
  chatRoomId,
}: {
  chatRoomId: number
}): Promise<ChatListResponse> => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/${chatRoomId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
