'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAVIGATIONS = [
  {
    name: '메인',
    url: '/latte-chat',
  },
  {
    name: '게시물',
    url: '/latte-chat/posts',
  },
  {
    name: '사연함',
    url: '/latte-chat/letters',
  },
  {
    name: '채팅',
    url: '/latte-chat/chats',
  },
  {
    name: '마이페이지',
    url: '/latte-chat/mypage',
  },
]

export default function NavTabBar() {
  const path = usePathname()

  return (
    <nav className="h-8 w-full px-5">
      <ul className="flex h-full w-full justify-center gap-8">
        {NAVIGATIONS.map((navigation) => {
          let hasPath = false
          if (navigation.url === '/latte-chat') {
            hasPath = path === navigation.url
          } else {
            hasPath = path.includes(navigation.url)
          }

          return (
            <li
              key={navigation.name}
              className={`b2 flex h-full flex-1 justify-center whitespace-nowrap border-black`}
            >
              <Link
                className={`${hasPath ? 'border-b-2' : 'border-none'} h-full border-black text-center`}
                href={navigation.url}
              >
                {navigation.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
