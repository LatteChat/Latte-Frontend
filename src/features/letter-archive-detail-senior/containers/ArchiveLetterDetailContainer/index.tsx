'use client'

import useGetSeniorArchiveLetterDetailQuery from '@/features/letter-archive-detail-senior/hooks/useGetArchiveLetterDetailQuery'
import LetterCardLayout from '@/shared/components/LetterCardLayout'
import { useUserInfo } from '@/shared/hooks/useUserInfo'
import { useParams } from 'next/navigation'
import LetterActionButtonBox from '../../components/LetterActionButtonBox'
import LetterAnswerCard from '@/features/letter-archive-detail/components/LetterAnswerCard'
import LetterHeader from '@/features/letter-archive-detail/components/LetterHeader'
import LetterContentBox from '@/features/letter-archive-detail/components/LetterContentBox'
import LetterProfile from '../../components/LetterProfile'

export default function SeniorArchiveLetterDetailContainer() {
  const params = useParams()
  const letterId = params?.id ? Number(params?.id) : null

  if (!letterId) return

  const { data: userInfo } = useUserInfo()
  const { data: letter } = useGetSeniorArchiveLetterDetailQuery({
    letterId,
    seniorId: userInfo?.seniorId,
  })

  const renderTitle = () => {
    if (letter?.answerResponseDto?.answerStatus === 'ANSWERED') {
      return '내가 답변을 쓴 사연'
    } else if (letter?.answerResponseDto?.answerStatus === 'WAITING') {
      return '답변 대기 중인 사연'
    } else if (letter?.answerResponseDto?.answerStatus === 'SAVED') {
      return '저장된 답변'
    } else if (
      letter?.letterStatus === 'ADOPTED' ||
      letter?.letterStatus === 'MATCHED'
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
        letter?.letterStatus && (
          <LetterActionButtonBox
            letterStatus={letter?.letterStatus}
            answerStatus={letter?.answerResponseDto?.answerStatus}
            isOpen={letter?.isOpen}
          />
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

      {letter?.answerResponseDto?.answerStatus !== 'WAITING' && (
        <div className="mt-5">
          <LetterAnswerCard
            answer={{
              user: {
                name: letter?.answerResponseDto?.seniorDetailDto?.name,
                image:
                  letter?.answerResponseDto?.seniorDetailDto?.image ??
                  '/images/coffee-bean-image.png',
                tag: letter?.answerResponseDto?.seniorDetailDto?.tag ?? [],
                age: letter?.answerResponseDto?.seniorDetailDto?.age,
              },
              content: letter?.answerResponseDto?.content,
              createdAt: letter?.answerResponseDto?.createdAt,
            }}
            isAdoptedLetter={letter?.letterStatus === 'ADOPTED'}
            adopted={letter?.answerResponseDto?.answerStatus === 'ADOPTED'}
          />
        </div>
      )}
    </LetterCardLayout>
  )
}
