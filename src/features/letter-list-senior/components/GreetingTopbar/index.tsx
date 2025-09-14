import { useUserInfo } from '@/shared/hooks/useUserInfo'
import Link from 'next/link'
import { useGetSeniorLetterArchiveNewStateQuery } from '../../hooks/useGetSeniorLetterArchiveNewStateQuery'

export default function GreetingTopbar({ title }: { title: string }) {
  const { data: userInfo } = useUserInfo()
  const { data: letterArchiveNewState } =
    useGetSeniorLetterArchiveNewStateQuery({
      seniorId: userInfo?.seniorId!,
    })

  return (
    <div className="sticky top-0 mb-3 flex items-start justify-between">
      <p className="h2 text-secondary-brown-5">{title}</p>

      <div className="relative">
        <Link
          href={'/latte-chat/letters/archive'}
          className="flex items-center gap-1 rounded bg-secondary-brown-4 px-2.5 py-1.5"
        >
          <span className="b6 text-secondary-brown-1">글 보관함</span>
          <img src="/icons/box-icon.svg" />
        </Link>
        {letterArchiveNewState && (
          <span className="b7 absolute -right-1 -top-3 flex items-center justify-center rounded bg-red-500 px-1 py-[2px] text-white">
            New
          </span>
        )}
      </div>
    </div>
  )
}
