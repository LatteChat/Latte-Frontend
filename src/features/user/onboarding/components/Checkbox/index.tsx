import { useState } from 'react'

type CheckboxProps = {
  label: React.ReactNode
  required?: boolean
  isCheck: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  children?: React.ReactNode
}

export default function Checkbox({
  label,
  required,
  isCheck,
  onChange,
  children,
}: CheckboxProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="flex w-full flex-col gap-2">
      <label className="flex w-full cursor-pointer select-none items-center">
        <input
          checked={isCheck}
          onChange={onChange}
          type="checkbox"
          className="accent-secondary-brown-4 mr-2 aspect-square h-5 w-5"
        />
        <span className="b4 flex-1 text-black">
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
        <div className="b4 text-gray-5 pl-7">{children}</div>
      )}
    </div>
  )
}
