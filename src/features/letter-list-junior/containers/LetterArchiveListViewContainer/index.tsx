'use client'

import { useEffect, useRef } from 'react'
import PostCard from '@/shared/components/PostCard'
import Link from 'next/link'
import { useGetFilteredJuniorLetterListQuery } from '../../hooks/useGetFilteredJuniorLetterListQuery'
import Spinner from '@/shared/components/Spinner'
import LetterListEmpty from '../../components/LetterListEmpty'

export default function LetterArchiveListViewContainer({
  juniorId,
  answer,
  category,
}: {
  juniorId: number
  category: string | null
  answer: 0 | 1 | 2 | 3 | 4
}) {
  const {
    data: filteredLetters,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
  } = useGetFilteredJuniorLetterListQuery({ juniorId, answer, category })

  const loadMoreRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!hasNextPage || !loadMoreRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage()
        }
      },
      { threshold: 1.0 }
    )

    observer.observe(loadMoreRef.current)
    return () => observer.disconnect()
  }, [fetchNextPage, hasNextPage])

  return (
    <div className="flex flex-1">
      {!isFetching && filteredLetters?.pages[0]?.content.length === 0 ? (
        <LetterListEmpty />
      ) : (
        <div className="flex w-full flex-col gap-[1.875rem]">
          {filteredLetters?.pages.flatMap((page) =>
            page.content.map((letter: any) => (
              <Link
                key={letter.letterId}
                href={`/latte-chat/letters/archive/letter/${letter.letterId}`}
              >
                <PostCard
                  post={{
                    tag: letter.category,
                    title: letter.title,
                    content: letter.content,
                    image: letter.image,
                    date: letter.createAt,
                    likeCount: letter.heart,
                    commentCount: letter.view,
                    answerStatus: letter.answerStatus,
                    letterStatus: letter.letterStatus,
                  }}
                  showStatus
                  showShadow
                />
              </Link>
            ))
          )}

          {hasNextPage && (
            <div ref={loadMoreRef} className="flex justify-center py-5">
              {isFetchingNextPage && <Spinner />}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
