'use client'

import { useState } from 'react'

const FILTER_OPTIONS = ['답변 완료', '채택 완료', '답변 대기 중']

export default function LetterStatusFilter() {
  const [isShow, setIsShow] = useState(false)

  return (
    <div className="relative">
      <div className="flex items-center gap-2 self-end">
        <span className="b6">필터링</span>
        <button onClick={() => setIsShow(!isShow)}>
          <img src="/icons/filter-icon.svg" alt="필터링 아이콘" />
        </button>
      </div>

      {isShow && (
        <ul className="absolute right-0 top-6 z-10 rounded bg-gray-200">
          {FILTER_OPTIONS.map((option) => {
            return (
              <li
                key={option}
                className="b9 flex items-center justify-center whitespace-nowrap border-b border-gray-400 px-3 py-2 last:border-none"
              >
                {option}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
