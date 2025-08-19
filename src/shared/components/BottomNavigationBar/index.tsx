'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

const NAVIGATION_OPTIONS = [
  {
    iconUrl: '/icons/daum-icon.svg',
    value: 'home',
    name: '홈',
    href: '/',
  },
  {
    iconUrl: '/icons/back-arrow-icon.svg',
    value: 'back',
    name: '이전',
  },
  {
    iconUrl: '/icons/next-arrow-icon.svg',
    value: 'next',
    name: '다음',
  },
  {
    iconUrl: '/icons/search-icon.svg',
    value: 'search',
    name: '검색',
    href: '',
  },
  {
    iconUrl: '/icons/share-icon.svg',
    value: 'share',
    name: '공유',
    href: '',
  },
  {
    iconUrl: '/icons/more-icon.svg',
    value: 'more',
    name: '더보기',
    href: '',
  },
]

export default function BottomNavigationBar() {
  const router = useRouter()

  const handleClick = (value: string) => {
    if (value === 'back') router.back()
    else if (value === 'next') router.forward()
  }

  return (
    <nav className="z-10 h-20 w-full shadow-[0_-1px_0_0_#F3F3F3]">
      <ul className="flex h-full w-full">
        {NAVIGATION_OPTIONS.map(({ iconUrl, value, name, href }) => {
          const content = (
            <img
              src={iconUrl}
              alt={`${name} 아이콘`}
              className="aspect-square h-6 w-6 min-w-2"
            />
          )

          return (
            <li key={value} className="flex-1">
              {value === 'back' || value === 'next' ? (
                <button
                  onClick={() => handleClick(value)}
                  className="flex h-full w-full justify-center p-4"
                  aria-label={name}
                  type="button"
                >
                  {content}
                </button>
              ) : (
                <Link
                  href={href || ''}
                  className="flex h-full w-full justify-center p-4"
                  aria-label={name}
                >
                  {content}
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
