import { useState, useRef } from 'react'
import AutoResizeTextarea from '@/shared/components/AutoResizeTextarea'

export default function Editor() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
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
        className="b2 w-full border-none px-5 pb-4 placeholder:text-gray-400 focus:outline-none"
        onKeyDown={handleTitleKeyDown}
        ref={titleRef}
      />
      <AutoResizeTextarea
        value={content}
        onChange={setContent}
        placeholder="내용"
        className="b12 mb-20 border-none px-5 placeholder:text-gray-400 focus:outline-none"
        onKeyDown={handleContentKeyDown}
        ref={contentRef}
      />
    </div>
  )
}
