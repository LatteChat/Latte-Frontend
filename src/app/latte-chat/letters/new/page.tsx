'use client'

import FontSizeToggle from '@/features/chat/components/FontSizeToggle'
import CategorySelectorModal from '@/features/letter/containers/CategorySelectorModal'
import Editor from '@/features/letter/containers/Editor'
import ModalLayout from '@/shared/components/ModalLayout'
import Image from 'next/image'
import { useState } from 'react'

export default function LetterWritePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

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
        <header className="b2 sticky top-0 flex h-12 w-full items-center justify-center bg-white py-4">
          사연 작성하기
        </header>

        <main className="flex h-auto min-h-[calc(100svh-8rem)] flex-col items-center bg-gray-100 px-5 pt-10">
          {/* 오늘의 주제 버튼 */}
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

          {/* 이미지 */}
          <figure className="flex justify-center">
            <Image
              src="/images/coffee-beans-image.svg"
              alt="커피빈 이미지"
              width={160}
              height={160}
              className="aspect-square h-40 w-40"
            />
          </figure>

          {/* 공개 여부 토글 + 임시저장 상태 */}
          <div className="mb-2 flex w-full items-end justify-between gap-3 pr-3">
            <FontSizeToggle offLabel="게시글 공개" onLabel="게시글 비공개" />

            <span className="b10 flex items-center gap-1 text-gray-400">
              임시 저장 중...
              <img src="/icons/refresh-icon.svg" />
            </span>
          </div>

          <div
            className={`${selectedCategory ? 'items-start' : 'items-center'} relative flex w-full flex-1 flex-col rounded-t-[1.25rem] bg-white pt-5`}
          >
            {selectedCategory ? (
              <>
                <span className="b9 mb-4 ml-5 inline-block rounded-md bg-gray-300 px-2 py-[1px] text-white">
                  취업 및 회사
                </span>
                <Editor />
                <button className="b3 absolute bottom-5 left-1/2 -translate-x-1/2 rounded-10 bg-gray-500 px-7 py-2 text-white shadow">
                  저장하기
                </button>
              </>
            ) : (
              <>
                <p className="b12 text-gray-500">
                  카테고리 선택 후, 오늘의 사연을 작성해보세요
                </p>
                <button className="b3 absolute bottom-5 rounded-10 bg-gray-500 px-7 py-2 text-white shadow">
                  저장하기
                </button>
              </>
            )}
          </div>
        </main>
      </div>
    </>
  )
}
