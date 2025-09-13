import { useRef } from 'react'
import AutoResizeTextarea from '@/shared/components/AutoResizeTextarea'
import { useLetterCreateStore } from '@/features/letter-create/store/letterCreateStore'

export default function Editor() {
  const title = useLetterCreateStore((state) => state.title)
  const content = useLetterCreateStore((state) => state.content)
  const setTitle = useLetterCreateStore((state) => state.setTitle)
  const setContent = useLetterCreateStore((state) => state.setContent)

  const contentRef = useRef<HTMLTextAreaElement>(null)
  const titleRef = useRef<HTMLTextAreaElement>(null)

  const handleTitleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      contentRef.current?.focus()
    }
  }

  const handleContentKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.key === 'Backspace' && content.length === 0) {
      e.preventDefault()
      contentRef.current?.blur()
      titleRef.current?.focus()
    }
  }

  return (
    <div className="flex h-full w-full flex-1 flex-col rounded-[1.25rem] bg-white">
      <AutoResizeTextarea
        value={title}
        onChange={setTitle}
        placeholder="제목"
        className="h3 w-full overflow-hidden border-none px-5 pb-3 text-black placeholder:text-gray-4 focus:outline-none"
        onKeyDown={handleTitleKeyDown}
        ref={titleRef}
      />
      <AutoResizeTextarea
        value={content}
        onChange={setContent}
        placeholder="내용"
        className="b1 mb-20 overflow-hidden border-none px-5 text-gray-7 placeholder:text-gray-4 focus:outline-none"
        onKeyDown={handleContentKeyDown}
        ref={contentRef}
      />
    </div>
  )
}
