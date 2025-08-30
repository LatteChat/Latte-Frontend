import { useGetLetterListQuery } from '@/features/letter/hooks/useGetLetterListQuery'
import { useUserInfo } from '@/shared/hooks/useUserInfo'
import ContentCard from '../../components/ContentCard'

export default function SeniorLetterContentCardListContainer() {
  const { data: userInfo } = useUserInfo()

  const { data: letters } = useGetLetterListQuery(
    userInfo?.memberType === 'SENIOR'
      ? {
          page: 0,
          seniorId: userInfo.seniorId!,
        }
      : undefined
  )

  console.log('letters:', letters)

  return (
    <div className="flex flex-col gap-8">
      {letters?.content.map((letter: any) => {
        return (
          <ContentCard
            key={letter.letterId}
            letter={{
              category: letter.category,
              writeStyle: '현실적인',
              title: letter.title,
              content: letter.content,
              letterType: letter.letterType,
            }}
            user={{
              nickname: letter.juniorName,
            }}
          />
        )
      })}
    </div>
  )
}
