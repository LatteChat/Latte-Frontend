import useGetSeniorSelectedLetterCountQuery from '@/features/letter/hooks/useGetSeniorSelectedLetterCountQuery'
import useSelectLetterQuery from '@/features/letter/hooks/useSelectLetterQuery'
import CoffeeBeanIcon from '@/shared/assets/icons/coffee-bean-icon.svg'
import { useUserInfo } from '@/shared/hooks/useUserInfo'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ContentCard({
  letter: { letterId, category, writeStyle, title, content, letterType },
  user: { nickname },
}: {
  letter: {
    letterId: number
    category: string
    writeStyle: string
    title: string
    content: string
    letterType: 'NORMAL' | 'BONUS'
  }
  user: {
    nickname: string
  }
}) {
  const pathname = usePathname()
  const { data: userInfo } = useUserInfo()
  const { data: selectedLetterCount } = useGetSeniorSelectedLetterCountQuery(
    userInfo
      ? {
          seniorId: userInfo.seniorId!,
        }
      : undefined
  )
  const { mutate: selectLetterMutate } = useSelectLetterQuery()

  const handleSelectLetter = () => {
    selectLetterMutate({
      letterId: letterId,
      seniorId: userInfo?.seniorId!,
    })
  }

  return (
    <section
      className={`${letterType === 'BONUS' ? 'bg-latte-gradient-3' : 'bg-white'} relative rounded-xl p-[4px] shadow-border`}
    >
      <div className="border-gradient relative flex flex-col items-start gap-2 rounded-10 bg-white p-4">
        <div
          className={`${letterType === 'BONUS' ? 'bg-latte-gradient-3' : 'bg-white'} absolute -top-4 right-5 rounded-xl p-[2px] shadow-border`}
        >
          <div className="flex items-center gap-1.5 rounded-10 bg-white px-2 py-1">
            <CoffeeBeanIcon color={'#000000'} className="h-3.5 w-3.5" />
            <span className="b6 text-black">
              {letterType === 'NORMAL' ? 300 : 500}콩
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <span className="b9 rounded border-transparent bg-secondary-brown-2 px-1.5 py-0.5 text-white">
            {category}
          </span>
          <span className="b9 rounded border border-primary bg-white px-1.5 py-0.5 text-secondary-brown-2">
            {writeStyle}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <h1 className="h4">{title}</h1>
            <p className="b4 line-clamp-2 h-10">{content}</p>
          </div>
          <span className="b9 text-gray-5">{nickname}</span>
        </div>
        <div className="flex w-full gap-4">
          <Link
            href={`${pathname}/1`}
            className="b4 flex-1 rounded-10 bg-gray-3 py-2 text-center text-black"
          >
            사연 보기
          </Link>
          <button
            onClick={handleSelectLetter}
            className="b4 flex-1 rounded-10 bg-secondary-brown-2 py-2 text-white"
          >
            {`선택하기 (${selectedLetterCount}/5)`}
          </button>
        </div>
      </div>
    </section>
  )
}
