import Link from 'next/link'

export default function MenuItem({
  href,
  title,
  iconUrl,
  padding,
}: {
  href: string
  title: string
  iconUrl: string
  padding: string
}) {
  return (
    <Link
      href={href}
      key={title}
      className={`${padding} flex flex-1 flex-col items-center justify-center gap-2 border-r border-gray-2 last:border-none`}
    >
      <img src={iconUrl} alt={title} className="aspect-square h-6 w-6" />
      <span className="b4 text-black">{title}</span>
    </Link>
  )
}
