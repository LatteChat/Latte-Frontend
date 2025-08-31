'use client'

import { useMemo, useRef, useState } from 'react'
import ReplyList from '../ReplyList'
import CommentReactionContainer from '../../containers/CommentReactionContainer'
import CommentOptionButton from '../CommentOptionButton'
import UserProfile from '@/shared/components/UserProfile'
import { AgeType } from '@/features/user/types/User'
import {
  useCommentAction,
  useCommentActionActions,
} from '../../comment/stores/commentActionStore'

type CommentType = 'comment' | 'reply'

export type reply = {
  id: number
  user: {
    profile: string
    nickname: string
  }
  content: string
  likeCount: number
  date: string
  isEdit: boolean
}

type comment = {
  comment: string
  commentId: number
  createdAt: string
  heart: number
  isEdit: boolean
  juniorDetailDto: {
    name: string
    image: string | null
    tag: string[] | null
    age: AgeType
  } | null
  seniorDetailDto: {
    name: string
    image: string | null
    tag: string[] | null
    age: AgeType
  } | null
  replies: any[]
  replyCount: number
}

export default function Comment({
  user: { nickname, profile, age },
  comment: {
    commentId,
    createdAt,
    content,
    likeCount,
    commentCount,
    isEdit,
    replies,
  },
  type,
}: {
  user: {
    nickname: string
    profile: string
    age: AgeType
  }
  comment: {
    commentId: number
    createdAt: string
    content: string
    likeCount: number
    commentCount?: number
    isEdit: boolean
    replies: any[]
  }
  type: CommentType
}) {
  const hasReplies = useMemo(() => (replies?.length ?? 0) > 0, [replies])
  const [isOpen, setIsOpen] = useState(false)
  const { selectedComment } = useCommentAction()
  const { setSelectedComment, setType } = useCommentActionActions()

  const handleSelectComment = () => {
    setType('REPLY')
    if (type === 'comment') {
      setSelectedComment({
        id: commentId,
        content,
        nickname,
      })
    }
  }

  return (
    <div
      className={`${type === 'reply' ? 'pl-10' : 'ml-0'} w-full ${selectedComment?.id === commentId ? 'rounded-10 bg-gray-1 p-2' : ''}`}
    >
      <div
        onClick={handleSelectComment}
        className={`${type === 'reply' ? '' : 'cursor-pointer'} flex w-full gap-2`}
      >
        <div
          className={`relative flex aspect-square ${type === 'comment' ? 'h-9 w-9' : 'h-7 w-7'}`}
        >
          <UserProfile
            profile={profile ?? '/images/coffee-bean-image.png'}
            age={age}
          />
        </div>

        <div className="flex w-full items-start justify-between gap-5">
          {/* 댓글 본문 */}
          <div className="flex flex-col items-start">
            <div className="flex items-end gap-1">
              <span className="b6 text-gray-6">{nickname}</span>
              <span className="b9 text-gray-4">{createdAt}</span>
              {isEdit && <span className="b9 text-gray-4">(수정 됨)</span>}
            </div>

            <p className="b12 mb-2 mt-1 whitespace-pre-line text-gray-6">
              {content}
            </p>

            <CommentReactionContainer
              likeCount={likeCount}
              commentCount={commentCount ?? 0}
              type={type}
            />

            {type === 'comment' && hasReplies && !isOpen && (
              <button
                className="bu mt-4 flex items-center"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  setIsOpen(true)
                  e.stopPropagation()
                }}
              >
                <img
                  src="/icons/down-arrow-icon.svg"
                  className="aspect-square h-4 w-4"
                  alt="답글 펼치기"
                />
                <span className="b9 text-gray-4">답글 펼치기</span>
              </button>
            )}
          </div>

          <CommentOptionButton
            commentId={commentId}
            content={content}
            nickname={nickname}
          />
        </div>
      </div>

      {type === 'comment' && hasReplies && isOpen && (
        <ReplyList
          replies={replies as reply[]}
          commentAction={{ isOpen, setIsOpen }}
        />
      )}
    </div>
  )
}
