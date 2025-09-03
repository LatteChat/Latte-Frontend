import ChatItem from '@/features/chat/components/ChatItem'
import { useGetChatRoomListQuery } from '@/features/chat/hooks/useGetChatRoomListQuery'
import { MemberInfo } from '@/features/user/types/User'
import NavTabBar from '@/shared/components/NavTabBar'
import Topbar from '@/shared/components/Topbar'
import { useUserInfo } from '@/shared/hooks/useUserInfo'
import Image from 'next/image'

const TOPBAR_ICONS = [
  {
    iconUrl: '/icons/alarm-icon.svg',
    alt: '알람',
    href: '',
  },
  {
    iconUrl: '/icons/search-icon.svg',
    alt: '검색',
    href: '',
  },
]

export default function ChatsContainer() {
  const { data: userInfo } = useUserInfo()
  console.log(userInfo)

  const { data: chatRooms } = useGetChatRoomListQuery({
    userId:
      userInfo?.memberType === 'JUNIOR'
        ? userInfo?.juniorId
        : userInfo?.seniorId,
    memberType: userInfo?.memberType,
  })

  console.log('채팅방 리스트:', chatRooms)

  return (
    <div>
      <div className="sticky top-0 z-10 flex flex-col gap-4 bg-white">
        <Topbar icons={TOPBAR_ICONS} />
        <NavTabBar />
      </div>

      <main className="flex h-auto min-h-[calc(100svh-11rem)] flex-col bg-white py-5">
        <div className="px-5">
          <h1 className="h3">채팅</h1>
          <Image
            src="/images/chat-advertisement-banner.png"
            width={1340}
            height={256}
            alt="라떼챗 배너 광고"
            className="mb-4 mt-5 flex items-center justify-center rounded-10 bg-gray-1"
          />
        </div>

        {chatRooms && chatRooms?.length !== 0 ? (
          <div>
            {chatRooms?.map(
              (chatRoom: {
                chatRoomId: number
                chatRoomCondition: 'WAITING' | 'ACTIVE' | 'INACTIVE'
                juniorId: number
                lastMessage: string | null
                lastMessageAt: string | null
                seniorId: number
                unreadCount: number
                seniorDetailDto: any | null
                juniorDetailDto: any | null
              }) => {
                let lastMessage = chatRoom.lastMessage

                if (!chatRoom.lastMessage) {
                  if (chatRoom.chatRoomCondition === 'WAITING') {
                    if (chatRoom?.seniorDetailDto) {
                      lastMessage = '멘토 요청을 기다리고 있어요'
                    } else {
                      lastMessage = '멘토 신청이 왔습니다'
                    }
                  } else if (chatRoom.chatRoomCondition === 'ACTIVE') {
                    lastMessage = '첫 메시지를 보내보세요'
                  } else if (chatRoom.chatRoomCondition === 'INACTIVE') {
                    lastMessage = '아쉽지만, 멘토 멘티가 되지 못했어요'
                  } else {
                    lastMessage = ''
                  }
                }

                if (chatRoom?.seniorDetailDto) {
                  if (chatRoom.chatRoomCondition === 'WAITING') {
                  }
                } else if (chatRoom?.juniorDetailDto) {
                }

                return (
                  <ChatItem
                    chat={{
                      chatRoomId: chatRoom?.chatRoomId,
                      chatRoomCondition: chatRoom?.chatRoomCondition,
                      lastMessage: lastMessage!,
                      unreadCount: chatRoom?.unreadCount,
                      lastMessageAt: chatRoom?.lastMessageAt ?? '',
                      chatRoomStatus: chatRoom.chatRoomCondition,
                    }}
                    user={{
                      nickname: chatRoom?.seniorDetailDto
                        ? chatRoom?.seniorDetailDto?.name
                        : chatRoom?.juniorDetailDto?.name,
                      profile: chatRoom?.seniorDetailDto
                        ? chatRoom?.seniorDetailDto?.image
                        : chatRoom?.juniorDetailDto?.image,
                      seniorId: chatRoom?.seniorDetailDto?.seniorId,
                      juniorId: chatRoom?.juniorDetailDto?.juniorId,
                    }}
                    key={chatRoom?.chatRoomId}
                  />
                )
              }
            )}
          </div>
        ) : (
          <div className="h3 mt-[6rem] flex w-full justify-center text-gray-500">
            아직 시작하신 대화가 없어요
          </div>
        )}
      </main>
    </div>
  )
}
