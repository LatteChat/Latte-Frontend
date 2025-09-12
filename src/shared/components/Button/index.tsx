export default function Button({
  buttonText,
  textColor = 'text-white',
  bgColor = 'bg-secondary-brown-2',
  onClick,
}: {
  buttonText: string
  bgColor?: string
  textColor?: string
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`h4 ${bgColor} ${textColor} w-full rounded-10 py-3.5`}
    >
      {buttonText}
    </button>
  )
}
