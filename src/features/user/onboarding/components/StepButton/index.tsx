export default function StepButton({
  value,
  onClick,
}: {
  value: string
  onClick: () => void
}) {
  return (
    <button className="h4 w-full rounded-2xl bg-white py-4" onClick={onClick}>
      {value}
    </button>
  )
}
