import { httpCSR } from '@/shared/apis/http'
import { Message } from '../types/Chat'

// 채팅방 목록 조회
export const fetchChatRoomList = async ({
  userId,
  memberType,
}: {
  userId: number
  memberType: 'JUNIOR' | 'SENIOR'
}): Promise<any> => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/chat/${userId}/rooms?memberType=${memberType}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

type ChatListResponse = Message[]

// 채팅 메시지 목록 조회
export const fetchChatList = async ({
  chatRoomId,
}: {
  chatRoomId: number
}): Promise<ChatListResponse> => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/chat/${chatRoomId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

// 채팅방 입장
export const saveChatRoomEnter = async ({
  chatRoomId,
  memberType,
}: {
  chatRoomId: number
  memberType: 'JUNIOR' | 'SENIOR'
}): Promise<any> => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/chat/${chatRoomId}/enter?memberType=${memberType}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

// 채팅방 퇴장
export const saveChatRoomLeave = async ({
  chatRoomId,
  memberType,
}: {
  chatRoomId: number
  memberType: 'JUNIOR' | 'SENIOR'
}): Promise<any> => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/chat/${chatRoomId}/leave?memberType=${memberType}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
