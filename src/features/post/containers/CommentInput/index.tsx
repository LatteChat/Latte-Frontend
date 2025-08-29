import AutoResizeTextarea from '@/shared/components/AutoResizeTextarea'
import Image from 'next/image'
import { useState } from 'react'
import useSaveCommentQuery from '../../comment/hooks/useSaveCommentQuery'
import { useUserInfo } from '@/shared/hooks/useUserInfo'
import { useParams } from 'next/navigation'

export default function CommentInput() {
  const params = useParams<{ id: string }>()
  const letterId = Number(params.id) ?? null
  const { data: userInfo } = useUserInfo()

  const [comment, setComment] = useState('')
  const { mutate: saveCommentMutate } = useSaveCommentQuery(letterId)

  const handleSubmitComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!userInfo) return
    if (!letterId) return
    if (comment.length === 0) return

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

    setComment('')
  }

  return (
    <form
      onSubmit={handleSubmitComment}
      className="sticky bottom-0 flex w-full items-center gap-2 bg-white px-5 py-2 shadow-top-line"
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
  )
}
