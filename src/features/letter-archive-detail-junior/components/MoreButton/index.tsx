import DeclarationModal from '@/features/letter-delete/components/DeclarationModal'
import DeleteLetterConfirmModal from '@/features/letter-delete/components/DeleteLetterConfirmModal'
import { useModal } from '@/shared/contexts/ModalContext'
import { useParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export default function MoreButton() {
  const params = useParams()
  const letterId = params?.id ? Number(params?.id) : null

  if (!letterId) return

  const { openModal } = useModal()
  const [isShow, setIsShow] = useState(false)

  const ref = useRef<HTMLDivElement>(null)

  const FILTER_OPTIONS: {
    id: 'delete' | 'declaration'
    label: string
    onClick: () => void
  }[] = [
    {
      id: 'delete',
      label: '삭제',
      onClick: () => {
        setIsShow(false)
        openModal(
          <DeleteLetterConfirmModal deleteList={[letterId]} isBack={true} />
        )
      },
    },
    {
      id: 'declaration',
      label: '신고',
      onClick: () => {
        setIsShow(false)
        openModal(<DeclarationModal />)
      },
    },
  ]

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
    <div className="absolute right-0 top-0">
      <div ref={ref} className="relative">
        <button onClick={() => setIsShow(!isShow)} className="">
          <img src="/icons/more-icon.svg" />
        </button>

        {isShow && (
          <ul className="absolute right-0 top-6 z-10 overflow-hidden rounded bg-white shadow-border">
            {FILTER_OPTIONS.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={option.onClick}
                  className={`b9 flex cursor-pointer items-center justify-center whitespace-nowrap border-b border-gray-400 px-7 py-2 last:border-none hover:bg-secondary-brown-4 hover:text-white`}
                >
                  {option.label}
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
