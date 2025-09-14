export default function StepButton({
  value,
  onClick,
}: {
  value: string
  onClick: () => void
}) {
  return (
    <button
      className="h4 bg-secondary-brown-2 w-full rounded-2xl py-4 text-white"
      onClick={onClick}
    >
      {value}
    </button>
  )
}
