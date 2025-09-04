// containers/LetterListViewContainer.tsx
'use client'

import { useEffect, useRef } from 'react'
import { useGetFilteredJuniorLetterListQuery } from '@/features/letter/hooks/useGetFilteredJuniorLetterListQuery'
import PostCard from '@/shared/components/PostCard'
import Link from 'next/link'
import LetterCardSkeleton from '@/shared/components/skeleton/LetterCardSkeleton'

export default function LetterListViewContainer({
  juniorId,
  answer,
  category,
}: {
  juniorId: number
  category: string | null
  answer: 0 | 1 | 2 | 3 | 4
}) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useGetFilteredJuniorLetterListQuery({ juniorId, answer, category })

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
    <div className="flex flex-col gap-[1.875rem]">
      {data?.pages.flatMap((page) =>
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
        <div
          ref={loadMoreRef}
          className="flex justify-center py-5 text-gray-400"
        >
          {isFetchingNextPage ? '로딩 중...' : '스크롤 시 더 불러오기'}
        </div>
      )}
    </div>
  )
}
