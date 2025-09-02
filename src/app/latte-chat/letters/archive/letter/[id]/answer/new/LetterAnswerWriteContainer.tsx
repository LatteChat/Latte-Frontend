import TitleHeader from '@/shared/components/TitleHeader'
import Image from 'next/image'
import { useState } from 'react'
import { useUserInfo } from '@/shared/hooks/useUserInfo'
import AnswerEditor from '@/features/letter/answer/components/AnswerEditor'
import useSaveAnswer from '@/features/letter/hooks/useSaveAnswer'
import { useAnswerCreateState } from '@/features/letter/stores/answerCreateStore'
import { useParams } from 'next/navigation'

export default function LetterAnswerWriteContainer() {
  const params = useParams()
  const letterId = Number(params.id) ?? null

  if (!letterId) return null

  const { data: userInfo } = useUserInfo()

  const [isEditorFocus, setIsEditorFocus] = useState(false)

  const answerCreateState = useAnswerCreateState()
  const { mutate: saveAnswerMutate } = useSaveAnswer({
    letterId,
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
            <span className="b10 text-gray-5">유효기간: 2일</span>

            <span className="b10 flex items-center gap-1 text-gray-5">
              임시 저장 중...
              <img src="/icons/refresh-icon.svg" />
            </span>
          </div>

          <div
            className={`relative flex w-full flex-1 flex-col items-center overflow-hidden rounded-t-[1.25rem] bg-white shadow-border`}
          >
            {isEditorFocus ? (
              <div className="h-full w-full flex-1 pt-5">
                <AnswerEditor />
                <button
                  className="b3 absolute bottom-5 left-1/2 -translate-x-1/2 rounded-10 bg-secondary-brown-2 px-7 py-2 text-secondary-brown-1"
                  onClick={() => {
                    if (!userInfo?.seniorId) return
                    saveAnswerMutate({
                      letterId,
                      seniorId: userInfo?.seniorId,
                      body: answerCreateState,
                    })
                  }}
                >
                  저장하기
                </button>
              </div>
            ) : (
              <div
                className="flex h-full w-full flex-1 justify-center pt-5"
                onClick={() => setIsEditorFocus(true)}
              >
                <p className="b1 text-gray-5">
                  사연에 대한 답변을 작성해보세요.
                </p>
                <button
                  className="b3 absolute bottom-5 rounded-10 bg-secondary-brown-2 px-7 py-2 text-secondary-brown-1 shadow-border"
                  onClick={() => {
                    if (!userInfo?.seniorId) return
                    saveAnswerMutate({
                      letterId,
                      seniorId: userInfo?.seniorId,
                      body: answerCreateState,
                    })
                  }}
                >
                  저장하기
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
