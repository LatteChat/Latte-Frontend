import Link from 'next/link'
import FontSizeToggle from '../FontSizeToggle'

type TopbarIcon = {
  iconUrl: string
  alt: string
  href: string
}

type TopbarIcons = TopbarIcon[]

export default function ChatTopbar({
  icons,
  nickname,
}: {
  icons: TopbarIcons
  nickname: string // 채팅 상대방
}) {
  return (
    <header className="sticky top-0 flex w-full justify-between bg-white p-5 shadow-bottom-line">
      <FontSizeToggle />

      <span className="h2">{nickname}</span>

      <div className="flex items-center gap-3">
        {icons.map((icon) => {
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
