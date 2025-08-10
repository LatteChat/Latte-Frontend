import { useState } from 'react'

type CheckboxProps = {
  label: React.ReactNode
  required?: boolean
  children?: React.ReactNode
}

export default function Checkbox({ label, required, children }: CheckboxProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="flex flex-col gap-2">
      <label className="flex cursor-pointer select-none items-center">
        <input type="checkbox" className="mr-2 aspect-square h-4 w-4" />
        <span className="flex-1 text-sm">
          <span className="mr-1">{required ? '[필수]' : '[선택]'}</span>
          {label}
        </span>
        {children && (
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
            className="ml-2"
          >
            {isExpanded ? '▲' : '▼'}
          </button>
        )}
      </label>

      {isExpanded && children && (
        <div className="pl-6 text-sm text-gray-600">{children}</div>
      )}
    </div>
  )
}
