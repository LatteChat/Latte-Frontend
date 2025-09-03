import Editor from '@/features/letter/create/components/Editor'
import LetterVisibilityToggleContainer from '@/features/letter/create/containers/LetterVisibilityToggleContainer'
import TitleHeader from '@/shared/components/TitleHeader'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  useLetterCreateActions,
  useLetterCreateState,
} from '@/features/letter/stores/letterCreateStore'
import { useUserInfo } from '@/shared/hooks/useUserInfo'
import { useModal } from '@/shared/contexts/ModalContext'
import CategorySelectorModal from '@/features/modal/components/CategorySelectorModal'
import { useParams } from 'next/navigation'
import { useGetJuniorLetterDetail } from '@/features/letter/detail/hooks/useGetJuniorLetterDetail'
import useUpdateLetterQuery from '@/features/letter/hooks/useUpdateLetterQuery'
import { CATEGORIES_MAP } from '@/shared/types/Category'

export default function LetterEditContainer() {
  const params = useParams()
  const letterId = params.id ? Number(params.id) : null

  if (!letterId) return

  const { data: letterDetail } = useGetJuniorLetterDetail({
    letterId,
  })

  const { data: userInfo } = useUserInfo()
  const { openModal } = useModal()

  const [isEditorFocus, setIsEditorFocus] = useState(false)

  const { category, answerType } = useLetterCreateState()
  const { setAll } = useLetterCreateActions()

  const letterCreateState = useLetterCreateState()
  const { mutate: updateLetterMutate } = useUpdateLetterQuery()

  useEffect(() => {
    if (letterDetail) {
      setAll({
        title: letterDetail.title,
        content: letterDetail.content,
        isOpen: true,
        category: letterDetail.category,
        answerType: letterDetail.answerType,
      })
    }
  }, [letterDetail])

  return (
    <>
      <div>
        <TitleHeader title="사연 수정하기" />

        <div className="flex h-auto min-h-[calc(100svh-8rem)] flex-col items-center bg-secondary-brown-1 px-5 pt-10">
          <div className="mb-4 flex w-full justify-center">
            <button
              onClick={() => openModal(<CategorySelectorModal />)}
              type="button"
              className="h4 flex items-center gap-3 rounded-10 bg-white px-3 py-2 text-black shadow-border"
            >
              오늘의 주제는
              {category && (
                <span className="b4 inline-block rounded-10 bg-secondary-brown-2 px-4 py-[0.375rem] text-secondary-brown-1">
                  {CATEGORIES_MAP[category]}
                </span>
              )}
              <img
                src="/icons/right-arrow-icon.svg"
                className="aspect-square h-6 w-6"
              />
            </button>
          </div>

          <figure className="flex justify-center">
            <Image
              src="/images/coffee-beans-image.svg"
              alt="커피빈 이미지"
              width={160}
              height={160}
              className="aspect-square h-40 w-40 opacity-70"
            />
          </figure>

          <div className="mb-2 flex w-full items-end justify-between gap-3 pr-3">
            <LetterVisibilityToggleContainer />

            <span className="b10 flex items-center gap-1 text-gray-5">
              임시 저장 중...
              <img src="/icons/refresh-icon.svg" />
            </span>
          </div>

          <div
            className={`${category ? 'items-start' : 'items-center'} relative flex w-full flex-1 flex-col overflow-hidden rounded-t-[1.25rem] bg-white`}
          >
            {isEditorFocus ? (
              <div className="h-full w-full flex-1 pt-5">
                {category && (
                  <div className="flex gap-2">
                    <span className="b9 mb-4 ml-5 inline-block rounded bg-secondary-brown-2 px-2 py-0.5 text-secondary-brown-1">
                      {CATEGORIES_MAP[category]}
                    </span>
                    <span className="b9 border-main mb-4 inline-block rounded border bg-white px-2 py-0.5 text-secondary-brown-2">
                      {answerType}
                    </span>
                  </div>
                )}
                <Editor />
                <button
                  className="b3 absolute bottom-5 left-1/2 -translate-x-1/2 rounded-10 bg-secondary-brown-2 px-7 py-2 text-secondary-brown-1"
                  onClick={() => {
                    if (!userInfo?.juniorId) return
                    updateLetterMutate({
                      letterId: letterId,
                      body: letterCreateState,
                    })
                  }}
                >
                  수정하기
                </button>
              </div>
            ) : (
              <div
                className="flex h-full w-full flex-1 justify-center pt-5"
                onClick={() => setIsEditorFocus(true)}
              >
                <p className="b1 whitespace-pre-line text-center text-gray-6">
                  {`카테고리 선택 후,\n여기를 눌러 사연을 작성해보세요`}
                </p>
                <button
                  className="b3 absolute bottom-5 rounded-10 bg-secondary-brown-2 px-7 py-2 text-secondary-brown-1 shadow-border"
                  onClick={() =>
                    updateLetterMutate({ letterId: 7, body: letterCreateState })
                  }
                >
                  수정하기
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
