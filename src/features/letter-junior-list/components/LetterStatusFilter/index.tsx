'use client'

import {
  useLetterFilterActions,
  useLetterFilterStore,
} from '@/features/letter/stores/letterFilterStore'
import { useEffect, useRef, useState } from 'react'

const FILTER_OPTIONS: { id: 0 | 1 | 2 | 3 | 4; label: string }[] = [
  {
    id: 0,
    label: '전체 보기',
  },
  {
    id: 4,
    label: '답변 완료',
  },
  {
    id: 3,
    label: '채택 완료',
  },
  {
    id: 1,
    label: '답변 대기 중',
  },
  {
    id: 2,
    label: '저장됨',
  },
]

type StatusFilterId = (typeof FILTER_OPTIONS)[number]['id']

const getFilterLabel = (id: StatusFilterId) =>
  FILTER_OPTIONS.find((opt) => opt.id === id)?.label ?? '전체 보기'

export default function LetterStatusFilter() {
  const [isShow, setIsShow] = useState(false)
  const statusFilter = useLetterFilterStore((state) => state.statusFilter)
  const { setStatusFilter } = useLetterFilterActions()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsShow(false)
      }
    }

    if (isShow) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isShow])

  return (
    <div ref={ref} className="relative">
      <button
        className="flex items-center gap-1 self-end"
        onClick={() => setIsShow(!isShow)}
      >
        <img src="/icons/filter-icon.svg" alt="필터링 아이콘" />
        <span className="b6">{getFilterLabel(statusFilter)}</span>
      </button>

      {isShow && (
        <ul className="absolute right-0 top-6 z-10 overflow-hidden rounded bg-white shadow-border">
          {FILTER_OPTIONS.map((option) => {
            return (
              <li
                key={option.id}
                onClick={() => {
                  setStatusFilter(option.id)
                  setIsShow(false)
                }}
                className={`${statusFilter === option.id ? 'bg-secondary-brown-4 text-secondary-brown-1' : 'bg-white'} b9 flex cursor-pointer items-center justify-center whitespace-nowrap border-b border-gray-400 px-3 py-2 last:border-none`}
              >
                {option.label}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
