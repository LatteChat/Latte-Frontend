export default function CertificationButton({
  iconUrl,
  title,
  description,
  isSelect,
  onClick,
}: {
  iconUrl: string
  title: string
  description: string
  isSelect: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`${isSelect ? 'border border-secondary-brown-2 bg-secondary-brown-1' : 'border border-transparent bg-white shadow-border'} flex items-center gap-5 rounded-10 px-2 py-3`}
    >
      <img src={iconUrl} alt={title + ' 아이콘'} />
      <div className="flex flex-col items-start">
        <span className="h4">{title}</span>
        <p className="b6">{description}</p>
      </div>
    </button>
  )
}
