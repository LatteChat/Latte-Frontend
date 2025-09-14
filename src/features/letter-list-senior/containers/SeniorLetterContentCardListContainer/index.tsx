'use client'

import { useUserInfo } from '@/shared/hooks/useUserInfo'
import ContentCard from '../../components/ContentCard'
import { useGetSeniorLetterListInfiniteQuery } from '../../hooks/useGetSeniorLetterListInfiniteQuery'
import { useEffect, useRef } from 'react'
import { useLetterStateActions } from '../../stores/letterStateStore'
import {
  useLetterViewState,
  useLetterViewStateActions,
} from '../../stores/letterViewStateStore'

export default function SeniorLetterContentCardListContainer() {
  const { data: userInfo } = useUserInfo()
  const { setStatusState } = useLetterStateActions()
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { scrollY } = useLetterViewState()
  const { setScrollY } = useLetterViewStateActions()

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useGetSeniorLetterListInfiniteQuery(
      userInfo?.memberType === 'SENIOR'
        ? { page: 0, seniorId: userInfo.seniorId! }
        : undefined
    )

  const letters = data?.pages.flatMap((page) => page.content) ?? []

  const loadMoreRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!hasNextPage || !loadMoreRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetchingNextPage) {
          fetchNextPage()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(loadMoreRef.current)
    return () => observer.disconnect()
  }, [fetchNextPage, hasNextPage, isFetchingNextPage])

  useEffect(() => {
    setStatusState('NORMAL')
  }, [setStatusState])

  // ✅ 데이터 다 불러온 뒤 복원
  useEffect(() => {
    const container = document.getElementById('scroll-container')
    if (container && scrollY > 0) {
      container.scrollTo({ top: scrollY, behavior: 'auto' })
    }
  }, [scrollY /* + isLoading, letters.length 등 */])

  return (
    <div ref={containerRef} className="flex flex-col gap-8">
      {letters.map((letter: any, idx: number) => {
        const isLast = idx === letters.length - 1
        return (
          <div key={letter.letterId} ref={isLast ? loadMoreRef : undefined}>
            <ContentCard
              letter={{
                letterId: letter.letterId,
                category: letter.category,
                writeStyle: '현실적인',
                title: letter.title,
                content: letter.content,
                letterType: letter.letterType,
              }}
              user={{
                nickname: letter.juniorName,
              }}
            />
          </div>
        )
      })}

      {isFetchingNextPage && (
        <p className="text-center text-gray-5">다음 페이지 불러오는 중...</p>
      )}
    </div>
  )
}
