'use client'

import { useRef, useState } from 'react'
import ReplyList from '../ReplyList'
import CommentReactionContainer from '../../containers/CommentReactionContainer'
import CommentOptionButton from '../CommentOptionButton'
import UserProfile from '@/shared/components/UserProfile'

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
  id: number
  user: {
    profile: string
    nickname: string
  }
  content: string
  likeCount: number
  commentCount?: number
  date: string
  isEdit: boolean
  replies?: reply[]
}

export default function Comment({
  comment,
  type,
}: {
  comment: comment
  type: CommentType
}) {
  const hasReplies = useRef((comment?.replies?.length ?? 0) > 0)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`${type === 'reply' ? 'ml-10' : 'ml-0'}`}>
      <div className="flex gap-2">
        <div
          className={`relative flex aspect-square ${type === 'comment' ? 'h-9 w-9' : 'h-7 w-7'}`}
        >
          <UserProfile profile={comment.user.profile} />
        </div>

        <div className="flex items-start gap-5">
          {/* 댓글 본문 */}
          <div>
            <div className="flex items-end gap-1">
              <span className="b6 text-gray-6">{comment.user.nickname}</span>
              <span className="b9 text-gray-4">{comment.date}</span>
              {comment.isEdit && (
                <span className="b9 text-gray-4">(수정 됨)</span>
              )}
            </div>

            <p className="b12 text-gray-6 mb-2 mt-1">{comment.content}</p>

            <CommentReactionContainer
              likeCount={comment.likeCount}
              commentCount={comment?.commentCount ?? 0}
              type={type}
              commentAction={{ setIsOpen }}
            />
          </div>

          <CommentOptionButton />
        </div>
      </div>

      {type === 'comment' && hasReplies.current && isOpen && (
        <ReplyList
          replies={comment.replies as reply[]}
          commentAction={{ isOpen, setIsOpen }}
        />
      )}
    </div>
  )
}
