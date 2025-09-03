import Link from 'next/link'

type TopbarIcon = {
  iconUrl: string
  alt: string
  href: string
}

type TopbarIcons = TopbarIcon[]

export default function Topbar({ icons }: { icons: TopbarIcons }) {
  return (
    <header className="flex justify-between bg-white px-5 py-3 shadow-bottom-line">
      <img src="/images/lattechat-logo.svg" />
      <div className="flex gap-3">
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
