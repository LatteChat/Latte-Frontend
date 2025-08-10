import React from 'react'

type CategoryTagProps = {
  label: string
  selected: boolean
  onClick?: () => void
}

export default function CategoryTag({
  label,
  selected,
  onClick,
}: CategoryTagProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-2 rounded-lg border px-4 py-2 shadow-md transition-colors ${
        selected
          ? 'border-gray-500 bg-gray-400 text-white'
          : 'border-transparent bg-white'
      } hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-black`}
    >
      <div className="borderborder-gray-600 h-5 w-5 rounded-sm bg-gray-400" />
      <span className="select-none text-sm font-medium">{label}</span>
    </button>
  )
}
