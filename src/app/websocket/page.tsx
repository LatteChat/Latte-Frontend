// 'use client'

// import { useSocket } from '@/contexts/SocketContext'

// export default function WebsocketTestPage() {
//   const { connectSocket, sendMessage } = useSocket()

//   const connect = () => {
//     connectSocket('test')
//   }

//   const requestChat = () => {
//     sendMessage('/pub/chat/request', { seniorId: 1, juniorId: 2 })
//   }

//   const acceptChat = () => {
//     // sendMessage('/pub/chat/accept', { chat })
//   }

//   const createChatMesage = () => {}

//   return (
//     <div>
//       <h1>웹소켓 테스트 페이지</h1>
//       <button onClick={connect}>웹소켓 연결 버튼</button>
//       <button onClick={requestChat}>채팅 요청하기</button>
//       <button onClick={acceptChat}>채팅 수락하기</button>
//       <button onClick={createChatMesage}>채팅 메세지 생성하기</button>
//     </div>
//   )
// }

export default function WebSocketTestPage() {
  return <div>웹소켓 테스트 페이지</div>
}
