import useGetSelectedLetterCountQuery from '@/features/letter-list-senior/hooks/useGetSelectedLetterCountQuery'
import useGetSeniorArchiveLetterDetailQuery from '@/features/letter-archive-detail-senior/hooks/useGetArchiveLetterDetailQuery'
import useSelectLetterQuery from '@/features/letter/hooks/useSelectLetterQuery'
import Button from '@/shared/components/Button'
import LetterCardLayout from '@/shared/components/LetterCardLayout'
import { useUserInfo } from '@/shared/hooks/useUserInfo'
import { useParams } from 'next/navigation'
import LetterContentBox from '@/features/letter-archive-detail/components/LetterContentBox'
import LetterHeader from '@/features/letter-archive-detail/components/LetterHeader'
import LetterProfile from '@/features/letter-archive-detail/components/LetterProfile'

export default function LetterDetailContainer() {
  const params = useParams()
  const letterId = params?.id ? Number(params?.id) : null

  if (!letterId) return

  const { data: userInfo } = useUserInfo()
  const { data: letter } = useGetSeniorArchiveLetterDetailQuery({
    letterId,
    seniorId: userInfo?.seniorId,
  })

  const { data: selectedLetterCount } = useGetSelectedLetterCountQuery(
    userInfo
      ? {
          seniorId: userInfo.seniorId!,
        }
      : undefined
  )
  const { mutate: selectLetterMutate } = useSelectLetterQuery({ letterId })

  const handleSelectLetter = () => {
    selectLetterMutate({
      letterId: letterId,
      seniorId: userInfo?.seniorId!,
    })
  }

  return (
    <LetterCardLayout
      title="사연 보기"
      actionButton={
        letter?.letterStatus && (
          <div className="mt-10 flex flex-col items-center gap-5">
            <p className="b6 whitespace-pre-line text-center text-gray-6">{`선택한 사연은 2일 동안 유지되며,\n그 안에 답변이 없으면 다른 분께 넘어가요.`}</p>
            <Button
              buttonText={`선택하기 (${selectedLetterCount}/5)`}
              onClick={handleSelectLetter}
            />
          </div>
        )
      }
    >
      <LetterProfile
        user={{
          profile: letter?.juniorDetailDto.image,
          age: letter?.juniorDetailDto.age,
          nickname: letter?.juniorDetailDto.name,
        }}
        daysLeft={letter?.daysLeft ?? 0}
      />

      <LetterHeader
        category={letter?.category}
        answerType={letter?.answerType[0]}
        title={letter?.title ?? ''}
      />

      <LetterContentBox image={letter?.image} content={letter?.content ?? ''} />
    </LetterCardLayout>
  )
}
