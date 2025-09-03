'use client'

import { useState } from 'react'

type LabeledToggleProps = {
  onLabel?: string // 켜짐일 때 텍스트
  offLabel?: string // 꺼짐일 때 텍스트
  initial?: boolean
  onChange?: (checked: boolean) => void
  width?: number // 토글 너비(px)
  height?: number // 토글 높이(px)
}

export default function FontSizeToggle({
  onLabel = '작은 글씨',
  offLabel = '큰 글씨',
  initial = false,
  onChange,
  width = 140,
  height = 44,
}: LabeledToggleProps) {
  const [checked, setChecked] = useState(initial)

  const knobSize = Math.min(height - 12, 32) // 패딩 고려한 적당한 값

  const handleToggle = () => {
    const next = !checked
    setChecked(next)
    onChange?.(next)
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="relative flex w-[5.3rem] items-center rounded-full bg-gray-300 px-1 py-1"
    >
      <span>&nbsp;</span>
      {/* 텍스트 */}
      <span
        className={`b6 absolute top-1/2 -translate-y-1/2 transition-all duration-300 ${
          checked ? 'left-3' : 'right-3'
        }`}
      >
        {checked ? onLabel : offLabel}
      </span>

      {/* 동그라미 */}
      <span
        className={`absolute top-1/2 aspect-square h-5 w-5 -translate-y-1/2 rounded-full bg-white shadow-md transition-transform duration-300 ${
          checked ? 'translate-x-14' : 'translate-x-0'
        }`}
      />
    </button>
  )
}
