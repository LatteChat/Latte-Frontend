import useSendAnswerQuery from '@/features/letter/answer/hooks/useSendAnswerQuery'
import { useGetSeniorLetterDetail } from '@/features/letter/detail/hooks/useGetSeniorLetterDetail'
import LetterCardLayout from '@/shared/components/LetterCardLayout'
import { useUserInfo } from '@/shared/hooks/useUserInfo'
import { CATEGORIES_MAP } from '@/shared/types/Category'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function LetterAnswerContainer({
  letterId,
}: {
  letterId: number
}) {
  const { data: userInfo } = useUserInfo()
  const [isLetterOpen, setIsLetterOpen] = useState(false)

  const { data: letterDetail } = useGetSeniorLetterDetail({
    letterId,
    seniorId: userInfo?.seniorId!,
  })
  const { mutate: sendAnswerMutate } = useSendAnswerQuery({ letterId })

  console.log(letterDetail)

  return (
    <LetterCardLayout
      title="저장된 답변"
      actionButton={
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-5">
          <p className="b6 text-gray-6">답변을 수정하시겠어요?</p>
          <Link
            href="answer/edit"
            className="h4 w-full rounded-10 bg-secondary-brown-2 py-4 text-center text-white"
          >
            수정하기
          </Link>
          <button
            onClick={() => {
              if (!userInfo?.seniorId) return
              sendAnswerMutate({
                letterId,
                answerId: letterDetail.answerResponseDto.answerId,
              })
            }}
            className="h4 w-full rounded-10 bg-secondary-brown-4 py-4 text-white"
          >
            답변 보내기
          </button>
        </div>
      }
    >
      <article className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <button
            onClick={() => setIsLetterOpen(!isLetterOpen)}
            className="flex w-full items-center justify-between rounded border border-secondary-brown-2 bg-secondary-brown-1 px-4 py-1"
          >
            <div className="flex items-center">
              <span className="b10">사연보기</span>
              <img src="/icons/down-arrow-icon.svg" alt="화살표 아이콘" />
            </div>
            <span className="b10 text-gray-5">유효기간: 2일</span>
          </button>

          {isLetterOpen && (
            <article className="rounded-10 border border-secondary-brown-2 bg-secondary-brown-1 px-4 py-5">
              <header className="flex flex-col items-start gap-2">
                <div className="flex items-start gap-2">
                  <span className="b9 inline-block rounded bg-secondary-brown-2 px-2 py-0.5 text-white">
                    {CATEGORIES_MAP[letterDetail?.category]}
                  </span>
                  <span className="b9 border-main mb-4 inline-block rounded border bg-white px-2 py-0.5 text-secondary-brown-2">
                    {letterDetail?.answerType}
                  </span>
                </div>

                <h2 className="h3 text-black">{letterDetail?.title}</h2>
              </header>

              <figure className="px-5 pt-5">
                <img
                  src={letterDetail.image ?? '/images/test-image.png'}
                  alt="사연 이미지"
                  className="aspect-square w-full rounded-10 object-cover shadow-border"
                  width={255}
                  height={255}
                />
              </figure>

              <p className="b1 pt-5 text-gray-7">{letterDetail.content}</p>
            </article>
          )}
        </div>

        <p className="b1 whitespace-pre-wrap text-gray-7">
          {letterDetail?.answerResponseDto.content}
        </p>
      </article>
    </LetterCardLayout>
  )
}
