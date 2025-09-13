'use client'

import DeletePostCard from '../../components/DeletePostCard'
import { useState, useEffect, useRef } from 'react'
import { useModal } from '@/shared/contexts/ModalContext'
import DeleteLetterConfirmModal from '@/features/modal/components/DeleteLetterConfirmModal'
import { useGetFilteredJuniorLetterListQuery } from '../../hooks/useGetFilteredJuniorLetterListQuery'
import Spinner from '@/shared/components/Spinner'

export default function LetterArchiveListDeleteContainer({
  juniorId,
  answer,
  category,
}: {
  juniorId: number
  category: string | null
  answer: 0 | 1 | 2 | 3 | 4
}) {
  const [deleteList, setDeleteList] = useState<number[]>([])
  const { openModal } = useModal()

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetFilteredJuniorLetterListQuery({ juniorId, answer, category })

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

  return (
    <div className="relative">
      <button
        onClick={handleDeleteLetters}
        disabled={deleteList.length === 0}
        className="absolute -top-8 left-0 aspect-square h-6 w-6 disabled:opacity-40"
      >
        <img src="/icons/trash-icon.svg" className="aspect-square h-6 w-6" />
      </button>

      <div className="flex flex-col gap-[1.875rem]">
        {data?.pages?.flatMap((page) =>
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
  )
}
