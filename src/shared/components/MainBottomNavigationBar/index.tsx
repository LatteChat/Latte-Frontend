import Link from 'next/link'

const NAVIGATION_OPTIONS = [
  {
    iconUrl: '/icons/home-icon.svg',
    value: 'home',
    name: '홈',
    href: '/',
  },
  {
    iconUrl: '/icons/content-icon.svg',
    value: 'content',
    name: '콘텐츠',
    href: '/',
  },
  {
    iconUrl: '/icons/community-icon.svg',
    value: 'community',
    name: '커뮤니티',
    href: '/community',
  },
  {
    iconUrl: '/icons/shopping-icon.svg',
    value: 'shopping',
    name: '쇼핑',
    href: '/',
  },
  {
    iconUrl: '/icons/loop-icon.svg',
    value: 'loop',
    name: '루프',
    href: '/',
  },
]

export default function MainBottomNavigationBar() {
  return (
    <nav className="h-[5.2rem] w-full">
      <ul className="flex h-full w-full">
        {NAVIGATION_OPTIONS.map(({ iconUrl, value, name, href }) => {
          return (
            <li
              key={value}
              className="flex flex-1 flex-col items-center justify-start gap-2 bg-white py-2"
            >
              <Link
                href={href || ''}
                className="flex flex-col items-center gap-1"
              >
                <img
                  src={iconUrl}
                  className="aspect-square w-6 min-w-2"
                  alt={name + ' 아이콘'}
                />
                <span className="whitespace-nowrap text-xs">{name}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
