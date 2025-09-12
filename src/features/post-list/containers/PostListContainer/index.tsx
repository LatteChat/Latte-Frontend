'use client'

import { usePostFilterStore } from '@/features/post/stores/postFilterStore'
import PostCard from '@/shared/components/PostCard'
import PostFilterContainer from '@/shared/containers/PostFilterContainer'
import { Category } from '@/shared/types/Type'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import useGetPostListInfiniteQuery from '../../hooks/useGetPostListQuery'
import PostListSkeleton from '../../components/PostListSkeleton'

export default function PostListContainer({
  user,
  initialPosts,
}: {
  user: any
  initialPosts?: any
}) {
  const [selected, setSelected] = useState<Category | null>(null)
  const { statusFilter } = usePostFilterStore()

  const {
    data: postsByCategory,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useGetPostListInfiniteQuery({
    page: 0,
    filter: statusFilter,
    category: selected,
    ...(user && {
      userId: user.memberType === 'JUNIOR' ? user.juniorId : user.seniorId,
      memberType: user.memberType,
    }),
    initialData: initialPosts,
  })

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
    <section className="flex flex-col">
      <PostFilterContainer selected={selected} setSelected={setSelected} />

      <main className="flex flex-col gap-3.5 px-5">
        {!isLoading && postsByCategory?.pages[0]?.content.length === 0 && (
          <p>없습니다</p>
        )}
        {isLoading && <PostListSkeleton />}
        {postsByCategory?.pages.flatMap((page) =>
          page.content.map((post: any) => {
            return (
              <Link
                key={post.letterId}
                href={`/latte-chat/posts/${post.letterId}`}
              >
                <PostCard
                  post={{
                    title: post.title,
                    content: post.content,
                    commentCount: post.countComments,
                    image: post.image,
                    likeCount: post.heart,
                    date: post.createAt,
                    tag: post.category,
                  }}
                  showMeta
                />
              </Link>
            )
          })
        )}

        {hasNextPage && (
          <div
            ref={loadMoreRef}
            className="flex justify-center py-5 text-gray-400"
          >
            {isFetchingNextPage && (
              <img
                src="/images/spinner-image.png"
                className="aspect-square h-10 w-10"
                alt="로딩중"
              />
            )}
          </div>
        )}
      </main>
    </section>
  )
}
