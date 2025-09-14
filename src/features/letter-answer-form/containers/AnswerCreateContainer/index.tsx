'use client'

import TitleHeader from '@/shared/components/TitleHeader'
import Image from 'next/image'
import { useState } from 'react'
import { useUserInfo } from '@/shared/hooks/useUserInfo'
import { useParams } from 'next/navigation'
import useGetSeniorArchiveLetterDetailQuery from '@/features/letter-archive-detail-senior/hooks/useGetArchiveLetterDetailQuery'
import ActiveAnswerEditBox from '../../components/ActiveAnswerEditBox'
import InactiveAnswerEditBox from '../../components/InactiveAnswerEditBox'
import SaveButton from '../../components/SaveButton'
import TemporarySaveMessage from '@/features/letter-form/components/TemporarySaveMessage'

export default function LetterAnswerWriteContainer() {
  const params = useParams()
  const letterId = Number(params?.id) ?? null

  if (!letterId) return null

  const { data: userInfo } = useUserInfo()

  const [isEditorFocus, setIsEditorFocus] = useState(false)

  const { data: letter } = useGetSeniorArchiveLetterDetailQuery({
    letterId,
    seniorId: userInfo?.seniorId,
  })

  return (
    <>
      <div>
        <TitleHeader title="답변 작성하기" />

        <div className="flex h-auto min-h-[calc(100svh-8rem)] flex-col items-center bg-secondary-brown-1 px-5 pt-10">
          <div className="mb-4 flex w-full justify-center px-10">
            <p className="h4 flex w-full items-center justify-center gap-3 rounded-10 bg-white px-3 py-3 text-black shadow-border">
              어떤 조언을 해줘야 할까?
            </p>
          </div>

          <figure className="flex justify-center">
            <Image
              src="/images/milk-answer-image.png"
              alt="우유 이미지"
              width={179}
              height={179}
              className="aspect-square h-44 w-44"
            />
          </figure>

          <div className="mb-2 flex w-full items-end justify-between gap-3 pl-2 pr-3">
            <span className="b10 text-gray-5">
              유효기간: {letter?.daysLeft}일
            </span>

            <TemporarySaveMessage />
          </div>

          <div
            className={`relative flex w-full flex-1 flex-col items-center overflow-hidden rounded-t-[1.25rem] bg-white shadow-border`}
          >
            {isEditorFocus ? (
              <ActiveAnswerEditBox
                category={letter?.category}
                answerType={letter?.answerType[0]}
                button={<SaveButton letterId={letterId} />}
              />
            ) : (
              <InactiveAnswerEditBox
                setIsEditorFocus={setIsEditorFocus}
                button={<SaveButton letterId={letterId} />}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
