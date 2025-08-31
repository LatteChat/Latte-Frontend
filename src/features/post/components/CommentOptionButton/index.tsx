import { useEffect, useRef, useState } from 'react'
import { useModal } from '@/shared/contexts/ModalContext'
import DeleteCommentConfirmModal from '@/features/modal/components/DeleteCommentConfirmModal'

export default function CommentOptionButton({
  commentId,
}: {
  commentId: number
}) {
  const [isShow, setIsShow] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { openModal } = useModal()

  const OPTIONS = [
    {
      id: 'delete',
      value: '삭제',
      onClick: (e: React.MouseEvent<HTMLLIElement>) => {
        e.stopPropagation()
        openModal(<DeleteCommentConfirmModal commentId={commentId} />)
      },
    },
    {
      id: 'modify',
      value: '수정',
      onClick: () => {},
    },
    {
      id: 'report',
      value: '신고',
      onClick: () => {},
    },
  ]

  const handleClickOptionButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setIsShow(!isShow)
  }

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
    <div ref={ref} className="relative shrink-0">
      <button
        className="text-gray-400 hover:text-gray-600"
        onClick={handleClickOptionButton}
      >
        <img src="/icons/comment-more-icon.svg" alt="옵션 아이콘" />
      </button>

      {isShow && (
        <div className="absolute right-0 top-3 z-10">
          <ul className="flex w-[4.5rem] flex-col overflow-hidden rounded bg-white shadow-md">
            {OPTIONS.map((option) => {
              return (
                <li
                  key={option.id}
                  className="b9 flex cursor-pointer items-center justify-center border-b-[1px] border-gray-3 py-2 text-black last:border-none hover:bg-secondary-brown-4 hover:text-secondary-brown-1"
                  onClick={option.onClick}
                >
                  {option.value}
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
