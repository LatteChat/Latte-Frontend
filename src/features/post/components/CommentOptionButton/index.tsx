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
        <div className="absolute right-0 top-3 z-10">
          <ul className="flex w-[4.5rem] flex-col overflow-hidden rounded bg-white shadow-md">
            {OPTIONS.map((option) => {
              return (
                <li
                  key={option}
                  className="b9 flex cursor-pointer items-center justify-center border-b-[1px] border-gray-3 py-2 text-black last:border-none hover:bg-secondary-brown-4 hover:text-secondary-brown-1"
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
