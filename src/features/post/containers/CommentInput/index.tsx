import AutoResizeTextarea from '@/shared/components/AutoResizeTextarea'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import useSaveCommentQuery from '../../comment/hooks/useSaveCommentQuery'
import { useUserInfo } from '@/shared/hooks/useUserInfo'
import { useParams } from 'next/navigation'
import {
  useCommentAction,
  useCommentActionActions,
} from '../../comment/stores/commentActionStore'
import useEditCommentQuery from '../../comment/hooks/useEditCommentQuery'
import useGetMyInfoQuery from '@/features/user/hooks/useGetMyInfoQuery'

export default function CommentInput() {
  const params = useParams<{ id: string }>()
  const letterId = Number(params.id) ?? null
  const { data: userInfo } = useGetMyInfoQuery()

  const [comment, setComment] = useState('')
  const { mutate: saveCommentMutate } = useSaveCommentQuery(letterId)
  const { mutate: editCommentMutate } = useEditCommentQuery(letterId)
  const { cancelSelectedComment, setType } = useCommentActionActions()
  const { type, selectedComment } = useCommentAction()

  useEffect(() => {
    if (type === 'EDIT') {
      setComment(selectedComment?.content ?? '')
    } else {
      setComment('')
    }
  }, [selectedComment])

  const handleSubmitComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!userInfo) return
    if (comment.length === 0) return

    if (type === 'COMMENT') {
      if (!letterId) return
      saveCommentMutate({
        letterId: letterId,
        body: {
          memberType: userInfo?.memberType,
          seniorId: userInfo.seniorId,
          juniorId: userInfo.juniorId,
          parentId: null,
          comment: comment,
        },
      })
    } else if (type === 'REPLY') {
      if (!letterId) return
      if (!selectedComment) return
      saveCommentMutate({
        letterId: letterId,
        body: {
          memberType: userInfo?.type,
          seniorId: userInfo.seniorId,
          juniorId: userInfo.juniorId,
          parentId: selectedComment.id,
          comment: comment,
        },
      })
      cancelSelectedComment()
    } else if (type === 'EDIT') {
      if (!selectedComment?.id) return
      editCommentMutate({
        commentId: selectedComment.id,
        payload: {
          comment,
        },
      })
      cancelSelectedComment()
    }

    setComment('')
  }

  return (
    <div className="sticky bottom-0 flex w-full flex-col items-center">
      {!!selectedComment && (
        <div className="flex w-full items-start gap-2 rounded-t-10 bg-gray-2 px-5 py-2">
          <img src="/icons/reply-icon.svg" className="h-5 w-5" />
          <div className="flex w-full flex-col gap-1">
            <div className="flex w-full justify-between">
              <span className="b6 text-gray-7">
                {type === 'EDIT'
                  ? '수정중인 댓글'
                  : `${selectedComment?.nickname} 님에게 답글`}
              </span>
              <button
                onClick={() => {
                  setType('COMMENT')
                  cancelSelectedComment()
                }}
                className="b6 text-gray-8"
              >
                취소
              </button>
            </div>
            <p className="b12 line-clamp-2 whitespace-pre-line text-gray-6">
              {selectedComment?.content}
            </p>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmitComment}
        className="flex w-full items-center gap-2 bg-white px-5 py-2 shadow-top-line"
      >
        <Image
          src={userInfo?.image ?? '/images/coffee-bean-image.png'}
          alt="작성자 프로필 이미지"
          className="object- aspect-square h-9 w-9 self-end rounded-full bg-primary"
          width={36}
          height={36}
        />
        <div className="flex h-auto flex-1 items-center overflow-hidden rounded-[1.25rem] bg-gray-2 py-1.5 pr-3">
          <AutoResizeTextarea
            value={comment}
            placeholder="댓글을 남겨주세요"
            onChange={setComment}
            className="b10 scrollbar-hide h-full w-full overflow-y-auto bg-transparent px-4 outline-none"
            maxRows={5}
          />
          <button type="submit" className="self-end">
            <img src="/icons/send-icon.svg" className="aspect-square h-6 w-6" />
          </button>
        </div>
      </form>
    </div>
  )
}
