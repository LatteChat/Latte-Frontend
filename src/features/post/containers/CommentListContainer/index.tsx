'use client'

import { useState } from 'react'
import useGetCommentListQuery from '../../comment/hooks/useGetCommentListQuery'
import Comment from '../../components/Comment'
import CommentInput from '../CommentInput'

export default function CommentListContainer({
  letterId,
}: {
  letterId: number
}) {
  const [sort, setSort] = useState<'createdAt' | 'heart'>('createdAt')
  const { data: comments } = useGetCommentListQuery({
    letterId,
    page: 0,
    sort,
  })

  console.log('댓글 리스트:', comments)

  return (
    <section className="flex flex-col items-start pt-5">
      <div className="w-full px-5 pb-5">
        <h3 className="h4 mb-4">
          댓글 <span className="text-gray-500">{comments?.content.length}</span>
        </h3>

        <div className="mb-4 flex items-center justify-start space-x-2">
          <button
            onClick={() => setSort('createdAt')}
            className="b6 text-black"
          >
            등록순
          </button>
          <hr className="h-3 w-[1px] bg-gray-500" />
          <button onClick={() => setSort('heart')} className="b6 text-gray-6">
            인기순
          </button>
        </div>

        <div className="flex w-full flex-col gap-5">
          {comments?.content.map((comment) => {
            const nickname = comment.juniorDetailDto
              ? comment.juniorDetailDto.name
              : comment.seniorDetailDto.name
            const profile = comment.juniorDetailDto
              ? comment.juniorDetailDto.image
              : comment.seniorDetailDto.image
            const age = comment.juniorDetailDto
              ? comment.juniorDetailDto.age
              : comment.seniorDetailDto.age

            return (
              <Comment
                key={comment.commentId}
                user={{
                  nickname,
                  profile,
                  age,
                }}
                comment={{
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
          })}
        </div>
      </div>

      <CommentInput />
    </section>
  )
}
