import Image from 'next/image'
import MessageBubble from '../MessageBubble'
import VoiceCallRequestBubble from '../VoiceCallRequestBubble'
import VoiceCallEndBubble from '../VoiceCallEndBubble'
import VoiceCallStartBubble from '../VoiceCallStartBubble'
import { formatTime } from '../../utils/formatDateTime'
import { Message } from '../../types/Chat'
import { useUserInfo } from '@/shared/hooks/useUserInfo'
import { useChatUserState } from '../../stores/chatUserStore'

export default function ChatBubble({
  message,
  isProfile,
  isShowTime,
  type = 'message',
}: {
  message: Message
  isProfile: boolean
  isShowTime: boolean
  type: 'message' | 'videoCallRequest' | 'videoCallStart' | 'videoCallEnd'
}) {
  const { data: userInfo } = useUserInfo()
  const d = new Date(message.createdAt)
  const isMe = message.senderType === userInfo?.memberType

  const { receiver } = useChatUserState()

  const renderBubble = () => {
    switch (type) {
      case 'message':
        return <MessageBubble isMe={isMe} message={message.content} />
      case 'videoCallRequest':
        return <VoiceCallRequestBubble />
      case 'videoCallStart':
        return <VoiceCallStartBubble isMe={isMe} />
      case 'videoCallEnd':
        return <VoiceCallEndBubble isMe={isMe} /> // duration
      default:
        return null
    }
  }

  return (
    <div className={`mb-2 flex px-5 ${isMe ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`flex w-auto items-start gap-2 ${isMe ? 'max-w-[88%] flex-row-reverse' : 'max-w-[92%]'}`}
      >
        {!isMe && (
          <div className="aspect-square h-[1.875rem] w-[1.875rem] shrink-0">
            {isProfile && (
              <Image
                src={receiver?.profile ?? '/images/coffee-bean-image.png'}
                alt="상대 유저 프로필"
                width={30}
                height={30}
                className="h-full w-full rounded-full bg-primary"
              />
            )}
          </div>
        )}

        <div
          className={`flex items-end gap-2 ${isMe ? 'flex-row-reverse' : ''}`}
        >
          {renderBubble()}
          {isShowTime && (
            <span className="select-none whitespace-nowrap text-[11px] text-neutral-500">
              {formatTime(d)}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
