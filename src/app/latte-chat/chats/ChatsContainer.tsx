import ChatItem from '@/features/chat/components/ChatItem'
import NavTabBar from '@/shared/components/NavTabBar'
import Topbar from '@/shared/components/Topbar'

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

const CHATS = [
  {
    id: 1,
    user: {
      profile: '/images/test-image.png',
      nickname: '디카풰인',
    },
    lastChat: {
      date: '2025년 8월 14일',
      content:
        '어머 정말료? 그래서 저는 어쩌구 저쩌구ㅇㄹㅇㄹ입니다ㅇㄹㅇㄹㄹㅇㄹㄹㅇㄹㅇㄹㅇㄹㅇㄹㅇㄹㅇㄹ',
    },
    unreadMessageCount: 2,
  },
  {
    id: 2,
    user: {
      profile: '/images/test-image.png',
      nickname: '디카풰인',
    },
    lastChat: {
      date: '2025년 8월 14일',
      content:
        '어머 정말료? 그래서 저는 어쩌구 저쩌구ㅇㄹㅇㄹ입니다ㅇㄹㅇㄹㄹㅇㄹㄹㅇㄹㅇㄹㅇㄹㅇㄹㅇㄹㅇㄹ',
    },
    unreadMessageCount: 5,
  },
  {
    id: 3,
    user: {
      profile: '/images/test-image.png',
      nickname: '디카풰인',
    },
    lastChat: {
      date: '2025년 8월 14일',
      content:
        '어머 정말료? 그래서 저는 어쩌구 저쩌구ㅇㄹㅇㄹ입니다ㅇㄹㅇㄹㄹㅇㄹㄹㅇㄹㅇㄹㅇㄹㅇㄹㅇㄹㅇㄹ',
    },
    unreadMessageCount: 1,
  },
  {
    id: 4,
    user: {
      profile: '/images/test-image.png',
      nickname: '디카풰인',
    },
    lastChat: {
      date: '2025년 8월 14일',
      content: '어머 정말료? 그래서 저는 어쩌구 ',
    },
    unreadMessageCount: 9,
  },
  {
    id: 5,
    user: {
      profile: '/images/test-image.png',
      nickname: '디카풰인',
    },
    lastChat: {
      date: '2025년 8월 14일',
      content:
        '어머 정말료? 그래서 저는 어쩌구 저쩌구ㅇㄹㅇㄹ입니다ㅇㄹㅇㄹㄹㅇㄹㄹㅇㄹㅇㄹㅇㄹㅇㄹㅇㄹㅇㄹ',
    },
    unreadMessageCount: 15,
  },
]

export default function ChatsContainer() {
  return (
    <div>
      <div className="sticky top-0 z-10 flex flex-col gap-4 bg-white">
        <Topbar icons={TOPBAR_ICONS} />
        <NavTabBar />
      </div>

      <main className="flex h-auto min-h-[calc(100svh-11rem)] flex-col bg-gray-100 py-5">
        <div className="px-5">
          <h1 className="h3">채팅</h1>
          <div className="rounded-10 mb-4 mt-5 flex items-center justify-center bg-white py-5">
            광고
          </div>
        </div>

        {CHATS.length == 0 ? (
          <div>
            {CHATS.map((chat) => {
              return <ChatItem chat={chat} key={chat.id} />
            })}
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
