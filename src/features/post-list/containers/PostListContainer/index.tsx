'use client'

import { usePostFilterStore } from '@/features/post/stores/postFilterStore'
import PostFilterContainer from '@/shared/containers/PostFilterContainer'
import { Category } from '@/shared/types/Type'
import { useEffect, useRef, useState } from 'react'
import useGetPostListInfiniteQuery from '../../hooks/useGetPostListInfiniteQuery'
import PostListSkeleton from '../../components/PostListSkeleton'
import useDelayedSkeleton from '@/shared/hooks/useDelayedSkeleton'
import PostListEmpty from '../../components/PostListEmpty'
import PostListBox from '../../components/PostListBox'

export default function PostListContainer({ user }: { user?: any }) {
  const [selected, setSelected] = useState<Category | null>(null)
  const { statusFilter } = usePostFilterStore()

  const {
    data: postsByCategory,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isFetching,
  } = useGetPostListInfiniteQuery({
    page: 0,
    filter: statusFilter,
    category: selected,
    ...(user && {
      userId: user.memberType === 'JUNIOR' ? user.juniorId : user.seniorId,
      memberType: user.memberType,
    }),
  })

  const showSkeleton = useDelayedSkeleton(isLoading, 1000)

  const loadMoreRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!hasNextPage || !loadMoreRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetchingNextPage) {
          fetchNextPage()
        }
      },
      { threshold: 1.0 }
    )

    observer.observe(loadMoreRef.current)
    return () => observer.disconnect()
  }, [fetchNextPage, hasNextPage])

  return (
    <section className="flex flex-1 flex-col">
      <PostFilterContainer selected={selected} setSelected={setSelected} />

      <main className="flex flex-1 flex-col gap-3.5 px-5">
        {showSkeleton && <PostListSkeleton />}

        {!isFetching && postsByCategory?.pages[0]?.content.length === 0 ? (
          <PostListEmpty />
        ) : (
          <PostListBox
            posts={postsByCategory}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            ref={loadMoreRef}
          />
        )}
      </main>
    </section>
  )
}
