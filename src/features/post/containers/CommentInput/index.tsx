import AutoResizeTextarea from '@/shared/components/AutoResizeTextarea'
import Image from 'next/image'
import { useState } from 'react'

export default function CommentInput() {
  const [comment, setComment] = useState('')

  return (
    <div className="shadow-top-line sticky bottom-0 flex w-full items-center gap-2 bg-white px-5 py-2">
      <Image
        src="/images/test-image.png"
        alt="작성자 프로필 이미지"
        className="object- aspect-square h-9 w-9 self-end rounded-full"
        width={36}
        height={36}
      />
      <div className="bg-gray-2 flex h-auto flex-1 items-center overflow-hidden rounded-[1.25rem] py-1.5 pr-3">
        <AutoResizeTextarea
          value={comment}
          placeholder="댓글을 남겨주세요"
          onChange={setComment}
          className="b10 scrollbar-hide h-full w-full overflow-y-auto bg-transparent px-4 outline-none"
          maxRows={5}
        />
        <button className="self-end">
          <img src="/icons/send-icon.svg" className="aspect-square h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
