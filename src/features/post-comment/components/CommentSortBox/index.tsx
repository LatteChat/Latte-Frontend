'use client'

import { useEffect, useRef, useState } from 'react'

export default function CommentSortBox({
  commentLength,
  sort,
  setSort,
}: {
  commentLength: number
  sort: 'createdAt' | 'heart'
  setSort: React.Dispatch<React.SetStateAction<'createdAt' | 'heart'>>
}) {
  const sentinelRef = useRef<HTMLDivElement>(null)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const el = sentinelRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting)
      },
      { threshold: [1] }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div ref={sentinelRef} className="h-0" />

      <div
        className={`sticky top-0 z-10 bg-white px-5 pb-1 pt-5 transition-shadow ${
          isSticky ? 'shadow-bottom-line' : ''
        }`}
      >
        <h3 className="h4 mb-4">
          댓글
          <span className="pl-1 text-gray-500">{commentLength}</span>
        </h3>

        <div className="mb-4 flex items-center justify-start space-x-2">
          <button
            onClick={() => setSort('createdAt')}
            className={`${sort === 'createdAt' ? 'text-black' : 'text-gray-6'} b6`}
          >
            등록순
          </button>
          <hr className="h-3 w-[1px] bg-gray-3" />
          <button
            onClick={() => setSort('heart')}
            className={`${sort === 'heart' ? 'text-black' : 'text-gray-6'} b6`}
          >
            인기순
          </button>
        </div>
      </div>
    </>
  )
}
