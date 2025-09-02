import LetterAnswerCard from '@/features/letter/detail/components/LetterAnswerCard'
import LetterActionButtonBox from '@/features/letter/detail/components/senior/LetterActionButtonBox'
import { useGetSeniorLetterDetail } from '@/features/letter/detail/hooks/useGetSeniorLetterDetail'
import LetterCardLayout from '@/shared/components/LetterCardLayout'
import UserProfile from '@/shared/components/UserProfile'
import { useUserInfo } from '@/shared/hooks/useUserInfo'
import Image from 'next/image'
import { useParams } from 'next/navigation'

export default function SeniorArchiveLetterDetailContainer() {
  const params = useParams()
  const letterId = params.id ? Number(params.id) : null

  if (!letterId) return

  const { data: userInfo } = useUserInfo()
  const { data: letterDetail } = useGetSeniorLetterDetail({
    letterId,
    seniorId: userInfo?.seniorId,
  })
  console.log('중장년 사연 상세 조회:', letterDetail)

  const renderTitle = () => {
    if (
      letterDetail?.letterStatus === 'ADOPTED' ||
      letterDetail?.letterStatus === 'MATCHED'
    ) {
      return '채택 완료된 사연'
    } else if (letterDetail?.letterStatus === 'ANSWERED') {
      return '내가 답변을 쓴 사연'
    } else if (letterDetail?.letterStatus === 'SENT') {
      return '답변 대기 중인 사연'
    } else {
      return ''
    }
  }

  return (
    <LetterCardLayout
      title={renderTitle()}
      actionButton={
        letterDetail?.letterStatus && (
          <LetterActionButtonBox letterStatus={letterDetail?.letterStatus} />
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
          <span className="b9 inline-block rounded bg-secondary-brown-2 px-2 py-0.5 text-white">
            {letterDetail?.category}
          </span>
          <span className="b9 inline-block rounded bg-secondary-brown-2 px-2 py-0.5 text-white">
            현실적인
          </span>
        </div>
        <h2 className="h3 text-black">{letterDetail?.title}</h2>
      </div>

      <figure className="p-5">
        <Image
          src={letterDetail?.image ?? '/images/test-image.png'}
          alt="사연 이미지"
          className="aspect-square w-full rounded-10 object-cover shadow-border"
          width={255}
          height={255}
        />
      </figure>

      <p className="b1 line-clamp-6 text-gray-7">
        {letterDetail?.content}
        <span className="text-black">&nbsp;&nbsp;...더보기</span>
      </p>

      {letterDetail?.answerResponseDto.answerStatus !== 'WAITING' && (
        <div className="mt-5">
          <LetterAnswerCard
            answer={{
              user: {
                name: letterDetail?.answerResponseDto.seniorDetailDto.name,
                image:
                  letterDetail?.answerResponseDto.seniorDetailDto.image ??
                  '/images/coffee-bean-image.png',
                tag: letterDetail?.answerResponseDto.seniorDetailDto.tag,
                age: letterDetail?.answerResponseDto.seniorDetailDto.age,
              },
              content: letterDetail?.answerResponseDto.content,
              createdAt: letterDetail?.answerResponseDto.createdAt,
            }}
            isAdoptedLetter={letterDetail?.letterStatus === 'ADOPTED'}
            adopted={letterDetail?.answerResponseDto.answerStatus === 'ADOPTED'}
          />
        </div>
      )}
    </LetterCardLayout>
  )
}
