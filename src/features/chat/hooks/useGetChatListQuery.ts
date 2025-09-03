import { useQuery } from '@tanstack/react-query'
import { fetchChatList } from '../services/chatService.client'
import { formatDate, formatTime } from '../utils/formatDateTime'

export const useGetChatListQuery = ({
  chatRoomId,
}: {
  chatRoomId?: number | null
}) => {
  return useQuery({
    queryKey: [`/chat`, chatRoomId],
    queryFn: () => fetchChatList({ chatRoomId: chatRoomId! }),
    retry: 2,
    enabled: !!chatRoomId,
    select: (data) => {
      const output: any[] = []
      let lastDate = ''

      for (let idx = 0; idx < data.length; idx++) {
        const msg = data[idx]
        const formattedDate = formatDate(new Date(msg.createdAt))

        // 날짜 divider
        if (formattedDate !== lastDate) {
          output.push({ divider: formattedDate })
          lastDate = formattedDate
        }

        // 프로필 표시 여부
        const prevItem = idx > 0 ? data[idx - 1] : null
        let isProfile =
          idx === 0 || (prevItem && prevItem.senderType !== msg.senderType)

        // 시간 표시 여부
        const nextItem = idx < data.length - 1 ? data[idx + 1] : null
        let isShowTime = true
        if (
          nextItem &&
          nextItem.senderType === msg.senderType &&
          formatTime(new Date(nextItem.createdAt)) ===
            formatTime(new Date(msg.createdAt))
        ) {
          isShowTime = false
        }

        output.push({ ...msg, isProfile, isShowTime })
      }

      return output
    },
  })
}
