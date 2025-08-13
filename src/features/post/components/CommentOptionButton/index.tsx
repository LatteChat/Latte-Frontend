import { useState } from 'react'

const OPTIONS = ['삭제', '수정', '신고']

export default function CommentOptionButton() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClickOptionButton = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative shrink-0">
      <button
        className="text-gray-400 hover:text-gray-600"
        onClick={handleClickOptionButton}
      >
        <img src="/icons/comment-more-icon.svg" alt="옵션 아이콘" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-3">
          <ul className="flex w-[4.5rem] flex-col overflow-hidden rounded bg-gray-100 shadow-md">
            {OPTIONS.map((option) => {
              return (
                <li
                  key={option}
                  className="b9 flex items-center justify-center border-b-[1px] border-gray-400 py-2 last:border-none"
                >
                  {option}
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
