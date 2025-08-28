'use client'

import Comment from '../../components/Comment'
import CommentInput from '../CommentInput'

const COMMENTS = [
  {
    id: 1,
    user: {
      profile: '/images/test-image.png',
      nickname: '디카풰인',
    },
    content: `어머 정말료? 그래서 저는 어쩌구 저쩌구 입니다.ㄹㅇㄹ\nㅇㄹㅇㄹㅁㅇㄹ우ㅏ머럴ㅇㅇㄹㅇㄹㅇㄹㅇ\nㅇㄹㅇㅇㄹㅇㄹㅇㄹㅇㅇㄹㅇㅇㄹㅇㄹㅇㄹ`,
    likeCount: 5,
    commentCount: 2,
    date: '2025년 8월 13일',
    isEdit: false,
    replies: [
      {
        id: 1,
        user: {
          profile: '/images/test-image.png',
          nickname: '디카풰인',
        },
        content: `어머 정말료? 그래서 저는 어쩌구 저쩌구 입니다.ㄹㅇㄹ\nㅇㄹㅇㄹㅁㅇㄹ우ㅏ머럴ㅇㅇㄹㅇㄹㅇㄹㅇ\nㅇㄹㅇㅇㄹㅇㄹㅇㄹㅇㅇㄹㅇㅇㄹㅇㄹㅇㄹ`,
        likeCount: 5,
        date: '2025년 8월 13일',
        isEdit: true,
      },
    ],
  },
  {
    id: 2,
    user: {
      profile: '/images/test-image.png',
      nickname: '디카풰인',
    },
    content: `어머 정말료? 그래서 저는 어쩌구 저쩌구 입니다.ㄹㅇㄹ\nㅇㄹㅇㄹㅁㅇㄹ우ㅏ머럴ㅇㅇㄹㅇㄹㅇㄹㅇ\nㅇㄹㅇㅇㄹㅇㄹㅇㄹㅇㅇㄹㅇㅇㄹㅇㄹㅇㄹ`,
    likeCount: 5,
    commentCount: 2,
    date: '2025년 8월 13일',
    isEdit: false,
    replies: [
      {
        id: 1,
        user: {
          profile: '/images/test-image.png',
          nickname: '디카풰인',
        },
        content: `어머 정말료? 그래서 저는 어쩌구 저쩌구 입니다.ㄹㅇㄹ\nㅇㄹㅇㄹㅁㅇㄹ우ㅏ머럴ㅇㅇㄹㅇㄹㅇㄹㅇ\nㅇㄹㅇㅇㄹㅇㄹㅇㄹㅇㅇㄹㅇㅇㄹㅇㄹㅇㄹ`,
        likeCount: 5,
        date: '2025년 8월 13일',
        isEdit: true,
      },
      {
        id: 2,
        user: {
          profile: '/images/test-image.png',
          nickname: '디카풰인',
        },
        content: `어머 정말료? 그래서 저는 어쩌구 저쩌구 입니다.ㄹㅇㄹ\nㅇㄹㅇㄹㅁㅇㄹ우ㅏ머럴ㅇㅇㄹㅇㄹㅇㄹㅇ\nㅇㄹㅇㅇㄹㅇㄹㅇㄹㅇㅇㄹㅇㅇㄹㅇㄹㅇㄹ`,
        likeCount: 5,
        date: '2025년 8월 13일',
        isEdit: true,
      },
    ],
  },
]

type AgeType =
  | 'UNDER_10'
  | 'TEENAGER'
  | 'TWENTIES'
  | 'THIRTIES'
  | 'FORTIES'
  | 'FIFTIES'
  | 'SIXTIES_AND_ABOVE'

interface MemberDetailDto {
  name: string
  image: string
  tag: string[]
  age: AgeType
}

interface CommentResponseDto {
  commentId: number
  juniorDetailDto: MemberDetailDto
  seniorDetailDto: MemberDetailDto
  comment: string
  heart: number
  replyCount: number
  createdAt: string
  isEdit: boolean
  replies: any[]
}

export default function CommentListContainer({
  comments,
}: {
  comments: CommentResponseDto[]
}) {
  return (
    <section className="flex flex-col items-start pt-5">
      <div className="w-full px-5 pb-5">
        <h3 className="h4 mb-4">
          댓글 <span className="text-gray-500">{comments.length}</span>
        </h3>

        <div className="mb-4 flex items-center justify-start space-x-2">
          <button className="b6 text-black">등록순</button>
          <hr className="h-3 w-[1px] bg-gray-500" />
          <button className="b6 text-gray-6">인기순</button>
        </div>

        <div className="flex w-full flex-col gap-5">
          {comments.map((comment) => {
            const nickname = comment.juniorDetailDto
              ? comment.juniorDetailDto.name
              : comment.seniorDetailDto.name
            const profile = comment.juniorDetailDto
              ? comment.juniorDetailDto.image
              : comment.seniorDetailDto.image
            const age = comment.juniorDetailDto
              ? comment.juniorDetailDto.age
              : comment.seniorDetailDto.age

            console.log(comment)

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
