'use client'

import {
  useChatUserActions,
  useChatUserState,
} from '@/features/chat/stores/chatUserStore'
import LetterCardLayout from '@/shared/components/LetterCardLayout'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import AnswerListContainer from '../AnswerListContainer'
import { useGetJuniorArchiveLetterDetailQuery } from '../../hooks/useGetJuniorArchiveLetterDetailQuery'
import LetterActionButtonBox from '../../components/LetterActionButtonBox'
import LetterHeader from '@/features/letter-archive-detail/components/LetterHeader'
import LetterContentBox from '@/features/letter-archive-detail/components/LetterContentBox'

export default function JuniorArchiveLetterDetailContainer() {
  const params = useParams()
  const letterId = params?.id ? Number(params?.id) : null

  if (!letterId) return

  const { data: letterDetail } = useGetJuniorArchiveLetterDetailQuery({
    letterId,
  })
  const { junior, senior } = useChatUserState()
  const { setAll } = useChatUserActions()

  useEffect(() => {
    if (letterDetail && letterDetail.answerResponseDto.length > 0) {
      const adoptedAnswer = letterDetail.answerResponseDto.find(
        (answer) => (answer as any).answerStatus === 'ADOPTED'
      )

      if (!adoptedAnswer) return

      const seniorId = (adoptedAnswer?.seniorDetailDto as any)?.seniorId
      const juniorId = (letterDetail.juniorDetailDto as any)?.juniorId

      setAll({
        senior: {
          ...senior,
          id: seniorId,
        },
        junior: {
          ...junior,
          id: juniorId,
        },
      })
    }
  }, [letterDetail])

  const renderTitle = () => {
    if (letterDetail?.letterStatus === 'WRITING') {
      return '저장된 사연'
    } else if (letterDetail?.letterStatus === 'ADOPTED') {
      return '내가 채택한 사연'
    } else if (letterDetail?.letterStatus === 'ANSWERED') {
      return '답변이 완료된 사연'
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
          <LetterActionButtonBox
            letterId={letterId}
            letterStatus={letterDetail?.letterStatus}
            isOpen={letterDetail?.isOpen}
          />
        )
      }
      isMore
    >
      <LetterHeader
        category={letterDetail?.category}
        answerType={letterDetail?.answerType[0]}
        title={letterDetail?.title ?? ''}
      />

      <LetterContentBox
        image={letterDetail?.image}
        content={letterDetail?.content ?? ''}
      />

      {letterDetail?.letterStatus !== 'WRITING' && (
        <AnswerListContainer
          answers={letterDetail?.answerResponseDto ?? []}
          letterStatus={letterDetail?.letterStatus}
        />
      )}
    </LetterCardLayout>
  )
}
