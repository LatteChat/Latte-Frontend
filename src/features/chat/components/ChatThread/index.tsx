import { useRef, useState } from 'react'
import ChatBubble from '../ChatBubble'
import { Message } from '../../types/Chat'
import { formatDate, formatTime } from '../../utils/formatDateTime'
import DateDivider from '../DateDivider'

const SAMPLE2: Message[] = [
  {
    id: 1,
    sender: 'me',
    text: '안녕하세요. 아까 질문에 대해 더 자세하게 말씀해주시면 감사하겠습니다.',
    sentAt: '2025-08-06T11:43:00+09:00',
    type: 'message',
  },
  {
    id: 2,
    sender: 'partner',
    text: '네 안녕하세요',
    sentAt: '2025-08-06T11:43:20+09:00',
    type: 'message',
  },
  {
    id: 3,
    sender: 'partner',
    text: '정확히 어떤 부분을 더 설명하면 좋을까요? 그 부분을 알려주시면 제가 최대한 이해하시기 쉽게 설명해보겠습니다.',
    sentAt: '2025-08-06T11:43:32+09:00',
    type: 'message',
  },
  {
    id: 4,
    sender: 'me',
    text: '혹시 시간이 괜찮으시다면\n영상통화로 가능하실까요?',
    sentAt: '2025-08-06T11:43:50+09:00',
    type: 'message',
  },
  {
    id: 5,
    sender: 'me',
    text: '안녕하세요\n\n오랜만에 연락드립니다. ㅎ',
    sentAt: '2025-08-12T11:43:00+09:00',
    type: 'message',
  },
  {
    id: 6,
    sender: 'partner',
    text: '오 오랜만이시네요',
    sentAt: '2025-08-12T11:44:50+09:00',
    type: 'message',
  },
  {
    id: 7,
    sender: 'partner',
    text: '무슨 일이신가요?',
    sentAt: '2025-08-12T11:44:50+09:00',
    type: 'message',
  },
  {
    id: 8,
    sender: 'me',
    text: '영상통화를 요청했습니다',
    sentAt: '2025-08-12T11:44:50+09:00',
    type: 'videoCallRequest',
  },
  {
    id: 9,
    sender: 'partner',
    text: ' 통화를 시작합니다',
    sentAt: '2025-08-12T11:44:50+09:00',
    type: 'videoCallStart',
  },
  {
    id: 10,
    sender: 'me',
    text: '12시간 25분',
    sentAt: '2025-08-12T11:44:50+09:00',
    type: 'videoCallEnd',
  },
  {
    id: 11,
    sender: 'partner',
    text: '무슨 일이신가요?',
    sentAt: '2025-08-13T11:44:50+09:00',
    type: 'message',
  },
]

const SAMPLE1: Message[] = [
  {
    id: 21,
    sender: 'partner',
    text: '오늘 회의 자료는 준비되셨나요?',
    sentAt: '2025-08-13T09:15:12+09:00',
    type: 'message',
  },
  {
    id: 22,
    sender: 'me',
    text: '네, 방금 공유드렸습니다. 확인 부탁드려요.',
    sentAt: '2025-08-13T09:16:02+09:00',
    type: 'message',
  },
  {
    id: 23,
    sender: 'partner',
    text: '좋아요. 그럼 2시에 뵙겠습니다.',
    sentAt: '2025-08-13T09:16:45+09:00',
    type: 'message',
  },
  {
    id: 24,
    sender: 'me',
    text: '네 알겠습니다. 그 전에 통화 가능하실까요?',
    sentAt: '2025-08-13T09:17:20+09:00',
    type: 'videoCallRequest',
  },
  {
    id: 25,
    sender: 'partner',
    text: '지금 바로 통화 시작합니다.',
    sentAt: '2025-08-13T09:18:05+09:00',
    type: 'videoCallStart',
  },
  {
    id: 26,
    sender: 'me',
    text: '00시간 45분',
    sentAt: '2025-08-13T10:03:40+09:00',
    type: 'videoCallEnd',
  },
  {
    id: 27,
    sender: 'partner',
    text: '다음 주 일정도 조율해 주세요.',
    sentAt: '2025-08-14T14:05:00+09:00',
    type: 'message',
  },
  {
    id: 28,
    sender: 'me',
    text: '네, 일정표 만들어서 다시 보내드리겠습니다.',
    sentAt: '2025-08-14T14:06:25+09:00',
    type: 'message',
  },
  {
    id: 29,
    sender: 'partner',
    text: '혹시 지난번 자료 다시 받아볼 수 있을까요?',
    sentAt: '2025-08-15T08:10:15+09:00',
    type: 'message',
  },
  {
    id: 30,
    sender: 'partner',
    text: '꼭 필요한 내용이라서요',
    sentAt: '2025-08-15T08:10:15+09:00',
    type: 'message',
  },
  {
    id: 31,
    sender: 'me',
    text: '네, 첨부해서 보냈습니다.',
    sentAt: '2025-08-15T08:12:40+09:00',
    type: 'message',
  },
]

export default function ChatThread() {
  const [chats, setChats] = useState<any>([])
  const count = useRef(0)

  console.log(chats)

  const loadOlderMessages = async () => {
    const olderMessages: Message[] = count.current == 0 ? SAMPLE1 : SAMPLE2

    const output: any[] = []
    let lastDate = ''

    for (let idx = 0; idx < olderMessages.length; idx++) {
      const msg = olderMessages[idx]
      const formattedDate = formatDate(new Date(msg.sentAt))

      // 날짜 표시
      if (formattedDate !== lastDate) {
        output.push({ divider: formattedDate })
        lastDate = formattedDate
      }

      let isProfile = false
      let isShowTime = true
      const prevItem =
        idx > 0
          ? olderMessages[idx - 1]
          : chats.find((c) => !('divider' in c)) || null

      const nextItem =
        idx < olderMessages.length - 1
          ? olderMessages[idx + 1]
          : chats.find((c) => !('divider' in c)) || null

      // 프로필 표시 여부
      if (idx === 0 || (prevItem && prevItem.sender !== msg.sender)) {
        isProfile = true
      }

      // 시간 표시 여부 (다음 메시지 기준)
      if (
        nextItem &&
        !('divider' in nextItem) &&
        nextItem.sender === msg.sender &&
        nextItem.type === 'message' && // 메시지 타입만 시간 묶기
        formatTime(new Date(nextItem.sentAt)) ===
          formatTime(new Date(msg.sentAt))
      ) {
        isShowTime = false
      }

      output.push({ ...msg, isProfile, isShowTime })
    }

    setChats((prev: any) => [...output, ...prev])

    count.current++
  }

  return (
    <div className="mx-auto max-w-md">
      <div className="flex min-h-screen flex-col">
        <div className="flex-1">
          <button onClick={loadOlderMessages}>이전 메시지 불러오기</button>
          {chats.map((item, idx) => {
            return 'divider' in item ? (
              <DateDivider key={item.divider} dateLabel={item.divider} />
            ) : (
              <ChatBubble
                key={item.id}
                message={item}
                isProfile={item.isProfile}
                isShowTime={item.isShowTime}
                type={item.type}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
