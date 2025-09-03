export type Sender = 'me' | 'partner'

export type MessageType =
  | 'message'
  | 'videoCallRequest'
  | 'videoCallStart'
  | 'videoCallEnd'

export type Message = {
  chatId: string
  chatRoomId: number
  content: string
  createdAt: string
  isRead: boolean
  senderId: number
  senderType: string // JUNIOR | SENIOR
}

export type Divide = {
  divider: string
}
