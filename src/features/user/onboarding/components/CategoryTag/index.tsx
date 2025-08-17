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
  const isLockCategory = LOCK_CATEGORY.some((lock) => lock === label)

  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'flex items-center rounded-lg border px-4 py-2 shadow-md transition-colors',
        isSelected
          ? 'border-gray-500 bg-gray-400 text-white'
          : isLockCategory
            ? 'border-red-400 bg-red-200 text-black'
            : 'border-transparent bg-white'
      )}
    >
      <span className="b4 select-none">{label}</span>
    </button>
  )
}
