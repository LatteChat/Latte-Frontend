export default function CountWithIconButton({
  iconUrl,
  iconName,
  size,
  count,
  onClick,
}: {
  iconUrl: string
  iconName: string
  size?: string
  count: number
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="flex cursor-pointer items-center gap-[3px]"
    >
      <img
        src={iconUrl}
        className={`aspect-square h-3 w-3`}
        style={size ? { height: `${size}rem`, width: `${size}rem` } : undefined}
        alt={`${iconName} 아이콘`}
      />
      <span className="b9 text-gray-4">{count}</span>
    </button>
  )
}
