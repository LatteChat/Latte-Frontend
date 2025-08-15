'use client'

import { useState, useRef } from 'react'

export default function Editor() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const contentRef = useRef<HTMLTextAreaElement>(null)
  const titleRef = useRef<HTMLInputElement>(null)

  const handleTitleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
      {/* 제목 */}
      <input
        ref={titleRef}
        id="title-input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleTitleKeyDown}
        placeholder="제목"
        className="b2 w-full border-none px-5 pb-4 placeholder:text-gray-400 focus:outline-none"
      />

      {/* 본문 */}
      <textarea
        ref={contentRef}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={handleContentKeyDown}
        placeholder="메모"
        className="b12 flex-1 resize-none border-none px-5 placeholder:text-gray-400 focus:outline-none"
      />
    </div>
  )
}
