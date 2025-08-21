type LabeledToggleProps = {
  onLabel: string
  offLabel: string
  isChecked: boolean
  onClick?: () => void
  width: string
  offColor: string
  onColor: string
}

export default function Toggle({
  onLabel,
  offLabel,
  width,
  isChecked,
  onClick,
  offColor,
  onColor,
}: LabeledToggleProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex items-center rounded-full bg-gray-300 px-1 py-1 ${isChecked ? onColor : offColor}`}
      style={{ width }}
    >
      <span>&nbsp;</span>
      <span
        className={`b6 absolute top-1/2 -translate-y-1/2 transition-transform duration-300 ${
          isChecked ? 'left-3' : 'right-3'
        }`}
      >
        {isChecked ? offLabel : onLabel}
      </span>

      <span
        className={`absolute top-1/2 aspect-square h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-300`}
        style={{
          transform: isChecked
            ? `translate(calc(${width} - 1.8rem), -50%)`
            : 'translate(0, -50%)',
        }}
      />
    </button>
  )
}
