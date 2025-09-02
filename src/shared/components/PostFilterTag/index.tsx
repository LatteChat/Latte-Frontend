import { Category } from '@/shared/types/Type'

export default function PostFilterTag({
  label,
  selected,
  value,
  onClick,
}: {
  label: string
  selected: Category | null
  value: Category
  onClick: () => void
}) {
  return (
    <span
      onClick={onClick}
      className={`${selected === value ? 'border-secondary-brown-2 bg-secondary-brown-1' : 'border-transparent bg-white'} b4 shadow-border cursor-pointer whitespace-nowrap rounded-10 border-2 px-4 py-2 text-black`}
    >
      {label}
    </span>
  )
}
