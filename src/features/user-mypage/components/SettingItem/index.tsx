import RightArrowIcon from '@/shared/assets/icons/right-arrow-icon.svg'

export default function SettingItem({
  title,
  iconUrl,
}: {
  title: string
  iconUrl: string
}) {
  return (
    <div key={title} className="flex items-center space-x-4">
      <img
        src={iconUrl}
        className="aspect-square h-6 w-6 shrink-0"
        alt={title}
      />
      <span className="b1 flex-1 text-black">{title}</span>

      <RightArrowIcon
        className="aspect-square h-6 w-6 shrink-0"
        color="#000000"
      />
    </div>
  )
}
