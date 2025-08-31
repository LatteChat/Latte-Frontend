import Editor from '@/features/letter/create/components/Editor'
import CategorySelectorModal from '@/features/letter/create/components/CategorySelectorModal'
import LetterVisibilityToggleContainer from '@/features/letter/create/containers/LetterVisibilityToggleContainer'
import ModalLayout from '@/shared/components/ModalLayout'
import TitleHeader from '@/shared/components/TitleHeader'
import Image from 'next/image'
import useSaveLetter from '@/features/letter/hooks/saveLetter'
import { useState } from 'react'
import {
  useLetterCreateState,
  useLetterCreateStore,
} from '@/features/letter/stores/letterCreateStore'
import { useUserInfo } from '@/shared/hooks/useUserInfo'

export default function LetterWriteContainer() {
  const { data: userInfo } = useUserInfo() // 추후 여기서 juniorId 추출해서 API에 적용

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEditorFocus, setIsEditorFocus] = useState(false)

  const category = useLetterCreateStore((state) => state.category)
  const setCategory = useLetterCreateStore((state) => state.setCategory)
  const letterCreateState = useLetterCreateState()
  const { mutate: saveLetterMutate } = useSaveLetter()

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleSelectCategory = (category: string) => {
    setCategory(category)
    handleCloseModal()
  }

  return (
    <>
      {isModalOpen && (
        <ModalLayout>
          <CategorySelectorModal
            onClose={handleCloseModal}
            onSelectCategory={handleSelectCategory}
          />
        </ModalLayout>
      )}

      <div>
        <TitleHeader title="사연 작성하기" />

        <div className="flex h-auto min-h-[calc(100svh-8rem)] flex-col items-center bg-secondary-brown-1 px-5 pt-10">
          <div className="mb-4 flex w-full justify-center">
            <button
              onClick={handleOpenModal}
              type="button"
              className="h4 flex items-center gap-3 rounded-10 bg-white px-3 py-2 text-black shadow-border"
            >
              오늘의 주제는
              {category && (
                <span className="b4 inline-block rounded-10 bg-secondary-brown-2 px-4 py-[0.375rem] text-secondary-brown-1">
                  {category}
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
                  <span className="b9 mb-4 ml-5 inline-block rounded-md bg-secondary-brown-2 px-2 py-[1px] text-secondary-brown-1">
                    취업 및 회사
                  </span>
                )}
                <Editor />
                <button
                  className="b3 absolute bottom-5 left-1/2 -translate-x-1/2 rounded-10 bg-secondary-brown-2 px-7 py-2 text-secondary-brown-1"
                  onClick={() => {
                    if (!userInfo?.juniorId) return
                    console.log(letterCreateState)
                    saveLetterMutate({
                      juniorId: userInfo?.juniorId,
                      body: letterCreateState,
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
                <p className="b1 text-gray-6">
                  카테고리 선택 후, 사연을 작성해보세요
                </p>
                <button
                  className="b3 absolute bottom-5 rounded-10 bg-secondary-brown-2 px-7 py-2 text-secondary-brown-1 shadow-border"
                  onClick={() =>
                    saveLetterMutate({ juniorId: 7, body: letterCreateState })
                  }
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
