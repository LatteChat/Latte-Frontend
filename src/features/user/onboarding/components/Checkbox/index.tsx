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
        <span className="b4 flex-1">
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
            {isExpanded ? (
              <img
                src="/icons/up-arrow-icon.svg"
                alt="더보기 아이콘"
                className="aspect-square h-6 w-6"
              />
            ) : (
              <img
                src="/icons/down-arrow-icon.svg"
                alt="닫기 아이콘"
                className="aspect-square h-6 w-6"
              />
            )}
          </button>
        )}
      </label>

      {isExpanded && children && (
        <div className="b4 pl-6 text-gray-600">{children}</div>
      )}
    </div>
  )
}
