import Editor from '@/features/letter/create/components/Editor'
import CategorySelectorModal from '@/features/letter/create/components/CategorySelectorModal'
import LetterVisibilityToggleContainer from '@/features/letter/create/containers/LetterVisibilityToggleContainer'
import ModalLayout from '@/shared/components/ModalLayout'
import TitleHeader from '@/shared/components/TitleHeader'
import Image from 'next/image'
import { useState } from 'react'

export default function LetterWriteContainer() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEditorFocus, setIsEditorFocus] = useState(false)

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category)
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

        <div className="flex h-auto min-h-[calc(100svh-8rem)] flex-col items-center bg-gray-100 px-5 pt-10">
          <div className="mb-4 flex w-full justify-center">
            <button
              onClick={handleOpenModal}
              type="button"
              className="h4 flex items-center gap-3 rounded-10 bg-white px-3 py-2"
            >
              오늘의 주제는...
              {selectedCategory && (
                <span className="b4 inline-block rounded-10 border-2 px-4 py-[0.375rem] shadow">
                  {selectedCategory}
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
              className="aspect-square h-40 w-40"
            />
          </figure>

          <div className="mb-2 flex w-full items-end justify-between gap-3 pr-3">
            <LetterVisibilityToggleContainer />

            <span className="b10 flex items-center gap-1 text-gray-400">
              임시 저장 중...
              <img src="/icons/refresh-icon.svg" />
            </span>
          </div>

          <div
            className={`${selectedCategory ? 'items-start' : 'items-center'} relative flex w-full flex-1 flex-col overflow-hidden rounded-t-[1.25rem] bg-white`}
          >
            {isEditorFocus ? (
              <div className="h-full w-full flex-1 pt-5">
                {selectedCategory && (
                  <span className="b9 mb-4 ml-5 inline-block rounded-md bg-gray-300 px-2 py-[1px] text-white">
                    취업 및 회사
                  </span>
                )}
                <Editor />
                <button className="b3 absolute bottom-5 left-1/2 -translate-x-1/2 rounded-10 bg-gray-500 px-7 py-2 text-white shadow">
                  저장하기
                </button>
              </div>
            ) : (
              <div
                className="flex h-full w-full flex-1 justify-center pt-5"
                onClick={() => setIsEditorFocus(true)}
              >
                <p className="b12 text-gray-500">
                  카테고리 선택 후, 오늘의 사연을 작성해보세요
                </p>
                <button className="b3 absolute bottom-5 rounded-10 bg-gray-500 px-7 py-2 text-white shadow">
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
