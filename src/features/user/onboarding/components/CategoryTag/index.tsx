import { useSignupStore } from '@/features/user/stores/signupStore'
import clsx from 'clsx'

type CategoryTagProps = {
  label: string
  isSelected: boolean
  onClick?: () => void
}

const LOCK_CATEGORY = ['취업 및 회사', '진로']

export default function CategoryTag({
  label,
  isSelected,
  onClick,
}: CategoryTagProps) {
  const memberType = useSignupStore((state) => state.memberType)
  const isLockCategory = LOCK_CATEGORY.some((lock) => lock === label)

  return (
    <div className="relative">
      {memberType === 'SENIOR' && isLockCategory && (
        <div className="pointer-events-none absolute -top-4 left-1 inline-block">
          <span className="b9 relative inline-block rounded bg-red-500 px-1 py-[2px] text-white after:absolute after:left-1 after:top-[calc(100%-1px)] after:border-x-[3px] after:border-t-4 after:border-x-transparent after:border-t-red-500 after:content-['']">
            인증
          </span>
        </div>
      )}
      <button
        type="button"
        onClick={onClick}
        className={clsx(
          'flex items-center rounded-10 border-2 px-4 py-2 shadow-md transition-colors',
          isSelected
            ? 'border-secondary-brown-2 bg-secondary-brown-1 text-black'
            : 'shadow-border text-gray-5 border-transparent bg-white'
        )}
      >
        <span className="b4 select-none">{label}</span>
      </button>
    </div>
  )
}
