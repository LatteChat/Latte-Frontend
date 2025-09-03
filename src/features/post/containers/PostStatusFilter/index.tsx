'use client'

import { useEffect, useRef, useState } from 'react'
import {
  usePostFilterActions,
  usePostFilterStore,
} from '../../stores/postFilterStore'

const FILTER_OPTIONS: { value: 'all' | 'view'; label: string }[] = [
  {
    value: 'all',
    label: '최신순',
  },
  {
    value: 'view',
    label: '조회수순',
  },
]

export default function PostStatusFilter() {
  const [isShow, setIsShow] = useState(false)
  const statusFilter = usePostFilterStore((state) => state.statusFilter)
  const { setStatusFilter } = usePostFilterActions()
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
        <span className="b6">
          {FILTER_OPTIONS.find((opt) => opt.value === statusFilter)?.label ??
            '최신순'}
        </span>
      </button>

      {isShow && (
        <ul className="absolute right-0 top-6 z-10 overflow-hidden rounded bg-white shadow-border">
          {FILTER_OPTIONS.map((option) => {
            return (
              <li
                key={option.value}
                onClick={() => {
                  setStatusFilter(option.value)
                  setIsShow(false)
                }}
                className={`${
                  statusFilter === option.value
                    ? 'bg-secondary-brown-4 text-secondary-brown-1'
                    : 'bg-white'
                } b9 flex cursor-pointer items-center justify-center whitespace-nowrap border-b border-gray-400 px-3 py-2 last:border-none`}
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
