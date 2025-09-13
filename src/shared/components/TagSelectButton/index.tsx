import clsx from 'clsx'

type TagSelectButtonProps = {
  label: string
  isSelected: boolean
  onClick?: () => void
}

export default function TagSelectButton({
  label,
  isSelected,
  onClick,
}: TagSelectButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'flex items-center rounded-10 border-2 px-4 py-2 shadow-border transition-colors',
        isSelected
          ? 'border-secondary-brown-2 bg-secondary-brown-1 text-black'
          : 'border-transparent bg-white text-gray-5'
      )}
    >
      <span className="b4 select-none">{label}</span>
    </button>
  )
}
