import {
  useChatUserActions,
  useChatUserState,
} from '@/features/chat/stores/chatUserStore'
import LetterActionButtonBox from '@/features/letter/detail/components/junior/LetterActionButtonBox'
import AnswerListContainer from '@/features/letter/detail/containers/AnswerListContainer'
import { useGetJuniorLetterDetail } from '@/features/letter/detail/hooks/useGetJuniorLetterDetail'
import LetterCardLayout from '@/shared/components/LetterCardLayout'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export default function JuniorArchiveLetterDetailContainer() {
  const params = useParams()
  const letterId = params.id ? Number(params.id) : null

  if (!letterId) return

  const { data: letterDetail } = useGetJuniorLetterDetail({
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

  console.log('청년 사연 상세 조회:', letterDetail)

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

  const [expanded, setExpanded] = useState(false)
  const [isOverflow, setIsOverflow] = useState(false)
  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (textRef.current) {
      const { scrollHeight, clientHeight } = textRef.current
      if (scrollHeight > clientHeight) {
        setIsOverflow(true)
      }
    }
  }, [letterDetail?.content])

  return (
    <LetterCardLayout
      title={renderTitle()}
      actionButton={
        letterDetail?.letterStatus && (
          <LetterActionButtonBox letterStatus={letterDetail?.letterStatus} />
        )
      }
    >
      <div className="flex flex-col items-start gap-2">
        <div className="flex gap-2">
          <span className="b9 inline-block rounded bg-secondary-brown-2 px-2 py-0.5 text-white">
            {letterDetail?.category}
          </span>
          <span className="b9 inline-block rounded border border-primary bg-white px-2 py-0.5 text-secondary-brown-2">
            현실적인
          </span>
        </div>
        <h2 className="h3 mb-5 text-black">{letterDetail?.title}</h2>
      </div>

      {letterDetail?.letterStatus !== 'WRITING' && (
        <figure className="mb-5 px-5">
          <Image
            src={letterDetail?.image ?? '/images/test-image.png'}
            alt="사연 이미지"
            className="aspect-square w-full rounded-10 object-cover shadow-border"
            width={255}
            height={255}
          />
        </figure>
      )}

      <p
        ref={textRef}
        className={`b1 whitespace-pre-line text-gray-7 ${
          expanded ? '' : 'clamp-with-more'
        } ${isOverflow && !expanded ? 'show-more' : ''}`}
        onClick={() => {
          if (isOverflow && !expanded) setExpanded(true)
        }}
      >
        {letterDetail?.content}
        <span className="text-black"></span>
      </p>

      {letterDetail?.letterStatus !== 'WRITING' && (
        <AnswerListContainer
          answers={letterDetail?.answerResponseDto ?? []}
          letterStatus={letterDetail?.letterStatus}
        />
      )}
    </LetterCardLayout>
  )
}
