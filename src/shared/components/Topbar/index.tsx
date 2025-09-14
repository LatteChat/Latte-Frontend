'use client'

import { useUserInfo } from '@/shared/hooks/useUserInfo'
import Link from 'next/link'

type TopbarIcon = {
  iconUrl: string
  alt: string
  href: string
}

type TopbarIcons = TopbarIcon[]

export default function Topbar({ icons }: { icons: TopbarIcons }) {
  const { data: userInfo, isLoading } = useUserInfo()

  return (
    <header className="flex justify-between bg-white px-5 py-3 shadow-bottom-line">
      <Link href={'/latte-chat'}>
        <img src="/images/lattechat-logo.svg" />
      </Link>
      <div className="flex gap-3">
        {icons.map((icon, index) => {
          if (!userInfo && index === 0) {
            return (
              <Link
                key={icon.alt}
                href={`${process.env.NEXT_PUBLIC_BASE_URL}/oauth2/authorization/kakao`}
              >
                <img src="/icons/login-icon.svg" alt="로그인" className="h-6" />
              </Link>
            )
          }
          return (
            <Link key={icon.alt} href={icon.href}>
              <img
                src={icon.iconUrl}
                alt={icon.alt + '아이콘'}
                className="aspect-square h-6 w-6"
              />
            </Link>
          )
        })}
      </div>
    </header>
  )
}
