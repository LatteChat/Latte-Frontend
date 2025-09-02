import { useRef } from 'react'
import AutoResizeTextarea from '@/shared/components/AutoResizeTextarea'
import { useAnswerCreateStore } from '@/features/letter/stores/answerCreateStore'

export default function AnswerEditor() {
  const content = useAnswerCreateStore((state) => state.content)
  const setContent = useAnswerCreateStore((state) => state.setContent)

  const contentRef = useRef<HTMLTextAreaElement>(null)

  return (
    <div className="flex h-full w-full flex-1 flex-col rounded-[1.25rem] bg-white">
      <AutoResizeTextarea
        value={content}
        onChange={setContent}
        placeholder="내용"
        className="b1 text-gray-7 placeholder:text-gray-4 mb-20 overflow-hidden border-none px-5 focus:outline-none"
        ref={contentRef}
      />
    </div>
  )
}
