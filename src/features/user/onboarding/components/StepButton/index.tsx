export default function StepButton({
  value,
  onClick,
}: {
  value: string
  onClick: () => void
}) {
  return (
    <button
      className="w-full rounded-2xl bg-white py-4 text-base"
      onClick={onClick}
    >
      {value}
    </button>
  )
}
