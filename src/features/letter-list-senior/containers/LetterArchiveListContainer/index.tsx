import PostCard from '@/shared/components/PostCard'
import { useSearchParams } from 'next/navigation'
import { useLetterFilterStore } from '@/features/letter-list-junior/stores/letterFilterStore'
import Link from 'next/link'
import { useUserInfo } from '@/shared/hooks/useUserInfo'
import LetterStatusFilter from '@/features/letter-list-junior/components/LetterStatusFilter'
import useGetFilteredSeniorLetterListInfiniteQuery from '../../hooks/useGetFilteredLetterListInfiniteQuery'
import { useEffect, useRef } from 'react'
import Spinner from '@/shared/components/Spinner'
import LetterListEmpty from '@/features/letter-list-junior/components/LetterListEmpty'
import ArchiveCategorySelector from '../../components/ArchiveCategorySelector'

export default function SeniorLetterArchiveListContainer() {
  const searchParams = useSearchParams()
  const selectedCategory = searchParams?.get('category') ?? null

  const statusFilter = useLetterFilterStore((state) => state.statusFilter)
  const { data: userInfo } = useUserInfo()

  const {
    data: filteredLetters,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
  } = useGetFilteredSeniorLetterListInfiniteQuery({
    seniorId: userInfo?.seniorId!,
    answer: statusFilter,
    category: selectedCategory,
  })

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
    <div>
      <header className="b2 sticky top-0 z-10">
        <div className="flex h-12 items-center justify-center bg-white">
          <h1>글 보관함</h1>
        </div>
        <ArchiveCategorySelector selectedCategory={selectedCategory} />
      </header>

      <div className="flex min-h-[calc(100svh-13rem)] w-full flex-1 flex-col gap-4 bg-white px-5 py-3">
        <div className="flex justify-end">
          <LetterStatusFilter />
        </div>
        <div className="flex flex-1">
          {!isFetching && filteredLetters?.pages[0]?.content.length === 0 ? (
            <LetterListEmpty />
          ) : (
            <div className="flex w-full flex-col gap-[1.875rem]">
              {filteredLetters?.pages.flatMap((page) =>
                page.content.map((letter: any) => {
                  return (
                    <Link
                      key={letter.letterId}
                      href={
                        letter?.answerStatus === 'SAVED'
                          ? `/latte-chat/letters/archive/letter/${letter.letterId}/answer`
                          : `/latte-chat/letters/archive/letter/${letter.letterId}`
                      }
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
                  )
                })
              )}

              {hasNextPage && (
                <div ref={loadMoreRef} className="flex justify-center py-5">
                  {isFetchingNextPage && <Spinner />}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
