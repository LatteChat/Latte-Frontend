import AutoResizeTextarea from '@/shared/components/AutoResizeTextarea'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import useSaveCommentQuery from '../../comment/hooks/useSaveCommentQuery'
import { useUserInfo } from '@/shared/hooks/useUserInfo'
import { useParams } from 'next/navigation'

export default function CommentInput({
  isSelect,
  selectedComment,
  onClickCancel,
}: {
  isSelect: boolean
  selectedComment?: {
    id: number
    nickname: string
    content: string
  }
  onClickCancel: (e: React.MouseEvent<HTMLButtonElement>) => void
}) {
  const params = useParams<{ id: string }>()
  const letterId = Number(params.id) ?? null
  const { data: userInfo } = useUserInfo()

  const [type, setType] = useState<'COMMENT' | 'REPLY'>('COMMENT')

  const [comment, setComment] = useState('')
  const { mutate: saveCommentMutate } = useSaveCommentQuery(letterId)

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
    } else {
      console.log('답글을 달려고하는군요')
      if (!letterId) return
      if (!selectedComment) return
      saveCommentMutate({
        letterId: letterId,
        body: {
          memberType: userInfo?.memberType,
          seniorId: userInfo.seniorId,
          juniorId: userInfo.juniorId,
          parentId: selectedComment.id,
          comment: comment,
        },
      })
    }

    setComment('')
  }

  // 댓글 작성 type 변경
  useEffect(() => {
    if (isSelect) {
      setType('REPLY')
    } else {
      setType('COMMENT')
    }
  }, [isSelect])

  return (
    <div className="sticky bottom-0 flex w-full flex-col items-center">
      {isSelect && (
        <div className="flex w-full items-start gap-2 rounded-t-10 bg-gray-2 px-5 py-2">
          <img src="/icons/reply-icon.svg" className="h-5 w-5" />
          <div className="flex w-full flex-col gap-1">
            <div className="flex w-full justify-between">
              <span className="b6 text-gray-7">
                {selectedComment?.nickname} 님에게 답글
              </span>
              <button onClick={onClickCancel} className="b6 text-gray-8">
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
          src="/images/test-image.png"
          alt="작성자 프로필 이미지"
          className="object- aspect-square h-9 w-9 self-end rounded-full"
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
