'use client'

import DeletePostCard from '../../components/DeletePostCard'
import { useState, useEffect, useRef } from 'react'
import { useModal } from '@/shared/contexts/ModalContext'
import { useGetFilteredJuniorLetterListQuery } from '../../hooks/useGetFilteredJuniorLetterListQuery'
import Spinner from '@/shared/components/Spinner'
import DeleteLetterConfirmModal from '@/features/letter-delete/components/DeleteLetterConfirmModal'

export default function LetterArchiveListDeleteViewContainer({
  juniorId,
  answer,
  category,
  setViewState,
}: {
  juniorId: number
  category: string | null
  answer: 0 | 1 | 2 | 3 | 4
  setViewState: React.Dispatch<React.SetStateAction<'VIEW' | 'DELETE'>>
}) {
  const [isSelectedAll, setIsSelectedAll] = useState(false)
  const [deleteList, setDeleteList] = useState<number[]>([])
  const { openModal } = useModal()

  const {
    data: letters,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetFilteredJuniorLetterListQuery({ juniorId, answer, category })

  const loadMoreRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!hasNextPage || !loadMoreRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) fetchNextPage()
      },
      { threshold: 1.0 }
    )
    observer.observe(loadMoreRef.current)
    return () => observer.disconnect()
  }, [fetchNextPage, hasNextPage])

  const handleSelectCard = (letterId: number) => {
    setDeleteList((prev) =>
      prev.includes(letterId)
        ? prev.filter((id) => id !== letterId)
        : [...prev, letterId]
    )
  }

  const handleDeleteLetters = () => {
    if (deleteList.length === 0) return
    openModal(<DeleteLetterConfirmModal deleteList={deleteList} />)
  }

  useEffect(() => {
    if (isSelectedAll) {
      letters?.pages?.flatMap((page) =>
        page?.content?.forEach((letter: any) =>
          setDeleteList((prev) => [...prev, letter.letterId])
        )
      )
    } else {
      setDeleteList([])
    }
  }, [isSelectedAll])

  return (
    <>
      <div className="mb-3 flex justify-between">
        <div className="flex items-center">
          <input
            checked={isSelectedAll}
            onChange={() => {
              setIsSelectedAll((prev) => !prev)
            }}
            type="checkbox"
            className="mr-2 aspect-square h-5 w-5 accent-secondary-brown-4"
          />
          <button
            onClick={handleDeleteLetters}
            className="b6 whitespace-nowrap rounded-10 bg-gray-3 px-3 py-1"
          >
            삭제하기
          </button>
        </div>
        <button className="b6" onClick={() => setViewState('VIEW')}>
          삭제 취소
        </button>
      </div>

      <div className="relative">
        <div className="flex flex-col gap-[1.875rem]">
          {letters?.pages?.flatMap((page) =>
            page?.content?.map((letter: any) => (
              <DeletePostCard
                key={letter.letterId}
                post={{
                  letterId: letter.letterId,
                  tag: letter.category,
                  title: letter.title,
                  content: letter.content,
                  image: letter.image,
                  date: letter.createAt,
                }}
                isSelected={deleteList.includes(letter.letterId)}
                onSelect={handleSelectCard}
              />
            ))
          )}
        </div>

        {hasNextPage && (
          <div ref={loadMoreRef} className="flex justify-center py-5">
            {isFetchingNextPage && <Spinner />}
          </div>
        )}
      </div>
    </>
  )
}
