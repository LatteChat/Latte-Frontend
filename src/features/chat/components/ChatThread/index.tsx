import ChatBubble from '../ChatBubble'
import DateDivider from '../DateDivider'
import { useGetChatListQuery } from '../../hooks/useGetChatListQuery'
import { useParams } from 'next/navigation'

export default function ChatThread() {
  const params = useParams()
  const chatRoomId = params.id ? Number(params.id) : null

  if (!chatRoomId) return
  const { data: existChats } = useGetChatListQuery({
    chatRoomId,
  })

  return (
    <div className="mx-auto max-w-md">
      <div className="flex min-h-screen flex-col">
        <div className="flex-1">
          {existChats?.map((item: any) => {
            return 'divider' in item ? (
              <DateDivider key={item.divider} dateLabel={item.divider} />
            ) : (
              <ChatBubble
                key={item.chatId}
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
