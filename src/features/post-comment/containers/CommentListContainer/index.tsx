'use client'

import { useEffect, useRef, useState } from 'react'
import useGetCommentListInfiniteQuery from '../../hooks/useGetCommentListInfiniteQuery'
import Comment from '../../components/Comment'
import CommentInput from '../CommentInput'
import CommentSortBox from '../../components/CommentSortBox'
import CommentListEmpty from '../../components/CommentListEmpty'
import CommentListSkeleton from '../../components/CommentListSkeleton'
import Spinner from '@/shared/components/Spinner'
import { useUserInfo } from '@/shared/hooks/useUserInfo'

export default function CommentListContainer({
  letterId,
}: {
  letterId: number
}) {
  const { data: user } = useUserInfo()
  const [sort, setSort] = useState<'createdAt' | 'heart'>('createdAt')
  const {
    data: comments,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useGetCommentListInfiniteQuery({
    letterId,
    page: 0,
    sort,
    ...(user && {
      userId: user.memberType === 'JUNIOR' ? user.juniorId : user.seniorId,
      memberType: user.memberType,
    }),
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
    <section className="flex flex-col items-start">
      <div className="w-full pb-5">
        <CommentSortBox
          commentLength={comments?.pages?.[0]?.totalElements ?? 0}
          sort={sort}
          setSort={setSort}
        />

        <div className="flex w-full flex-col gap-3 px-3">
          {isLoading && <CommentListSkeleton />}

          {comments?.pages?.[0]?.content?.length === 0 ? (
            <CommentListEmpty />
          ) : (
            <>
              {comments?.pages.flatMap((page: any) =>
                page.content.map((comment: any) => {
                  const detail =
                    comment.juniorDetailDto ?? comment.seniorDetailDto

                  return (
                    <Comment
                      key={comment.commentId}
                      user={{
                        nickname: detail.name,
                        profile: detail.image,
                        age: detail.age,
                      }}
                      comment={{
                        commentId: comment.commentId,
                        createdAt: comment.createdAt,
                        content: comment.comment,
                        likeCount: comment.heart,
                        commentCount: comment.replyCount,
                        isEdit: comment.isEdit,
                        replies: comment.replies,
                      }}
                      type="comment"
                    />
                  )
                })
              )}

              {hasNextPage && (
                <div ref={loadMoreRef} className="flex justify-center py-5">
                  {isFetchingNextPage && <Spinner />}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <CommentInput />
    </section>
  )
}
