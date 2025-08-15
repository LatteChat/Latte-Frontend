type CategoryTagProps = {
  label: string
  selected: boolean
  onClick: () => void
}

const LOCK_CATEGORY = ['취업 및 회사', '진로']

export default function CategoryTag({
  label,
  selected,
  onClick,
}: CategoryTagProps) {
  const isLockCategory = LOCK_CATEGORY.some((lock) => lock === label)

  return (
    <button
      type="button"
      onClick={() => onClick()}
      className={`flex items-center rounded-lg border px-4 py-2 shadow-md transition-colors ${isLockCategory ? 'bg-red-200' : 'bg-white'} ${
        selected
          ? 'border-gray-500 bg-gray-400 text-white'
          : 'border-transparent bg-white'
      } hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-black`}
    >
      <span className="b4 select-none">{label}</span>
    </button>
  )
}
