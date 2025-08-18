import Link from 'next/link'

export default function GreetingTopBar() {
  return (
    <div className="mb-3 flex items-start justify-between">
      <p className="h3">느긋한 오후예요.</p>
      <div className="relative">
        <Link
          href={'/latte-chat/letters/archive'}
          className="b6 rounded-[0.625rem] bg-white px-[0.625rem] py-2"
        >
          글 보관함
        </Link>
        <span className="b7 absolute -right-1 -top-3 flex items-center justify-center rounded bg-red-500 px-1 py-[2px] text-white">
          New
        </span>
      </div>
    </div>
  )
}
