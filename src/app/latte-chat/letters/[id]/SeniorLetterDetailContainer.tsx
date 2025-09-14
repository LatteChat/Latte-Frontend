import LetterAnswerCard from '@/features/letter/detail/components/LetterAnswerCard'
import { useGetSeniorLetterDetail } from '@/features/letter/detail/hooks/useGetSeniorLetterDetail'
import useGetSeniorSelectedLetterCountQuery from '@/features/letter/hooks/useGetSeniorSelectedLetterCountQuery'
import useSelectLetterQuery from '@/features/letter/hooks/useSelectLetterQuery'
import Button from '@/shared/components/Button'
import LetterCardLayout from '@/shared/components/LetterCardLayout'
import UserProfile from '@/shared/components/UserProfile'
import { useUserInfo } from '@/shared/hooks/useUserInfo'
import { CATEGORIES_MAP } from '@/shared/types/Category'
import Image from 'next/image'
import { useParams } from 'next/navigation'

export default function SeniorLetterDetailContainer() {
  const params = useParams()
  const letterId = params.id ? Number(params.id) : null

  if (!letterId) return

  const { data: userInfo } = useUserInfo()
  const { data: letterDetail } = useGetSeniorLetterDetail({
    letterId,
    seniorId: userInfo?.seniorId,
  })

  const { data: selectedLetterCount } = useGetSeniorSelectedLetterCountQuery(
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

  const renderTitle = () => {
    if (
      letterDetail?.letterStatus === 'ADOPTED' ||
      letterDetail?.letterStatus === 'MATCHED'
    ) {
      return '채택 완료된 사연'
    } else {
      return ''
    }
  }

  return (
    <LetterCardLayout
      title={renderTitle()}
      actionButton={
        letterDetail?.letterStatus && (
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
      <div className="mb-5 flex items-center gap-1.5">
        <div className="flex aspect-square h-9 w-9">
          <UserProfile
            profile={
              letterDetail?.juniorDetailDto.image ??
              '/images/coffee-bean-image.png'
            }
            age={letterDetail?.juniorDetailDto.age}
          />
        </div>
        <span className="b5">{letterDetail?.juniorDetailDto.name}</span>
      </div>

      <div className="flex flex-col items-start gap-2">
        <div className="flex gap-2">
          {letterDetail?.category && (
            <span className="b9 inline-block rounded bg-secondary-brown-2 px-2 py-0.5 text-white">
              {CATEGORIES_MAP[letterDetail?.category]}
            </span>
          )}
          {(letterDetail?.answerType?.length ?? 0) > 0 && (
            <span className="b9 inline-block rounded border border-primary bg-white px-2 py-0.5 text-secondary-brown-2">
              {letterDetail?.answerType[0]}
            </span>
          )}
        </div>
        <h2 className="h3 text-black">{letterDetail?.title}</h2>
      </div>

      <figure className="p-5">
        <img
          src={letterDetail?.image ?? '/images/test-image.png'}
          alt="사연 이미지"
          className="aspect-square w-full rounded-10 object-cover shadow-border"
          width={255}
          height={255}
        />
      </figure>

      <p className="b1 line-clamp-6 text-gray-7">{letterDetail?.content}</p>
    </LetterCardLayout>
  )
}
