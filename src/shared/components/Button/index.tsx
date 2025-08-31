export default function Button({
  buttonText,
  bgColor = 'bg-secondary-brown-2',
  onClick,
}: {
  buttonText: string
  bgColor?: string
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`h4 ${bgColor} w-full rounded-10 py-3.5 text-secondary-brown-1`}
    >
      {buttonText}
    </button>
  )
}
