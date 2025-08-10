interface FormInputWithButtonProps {
  label?: string
  placeholder?: string
  buttonText: string
  buttonWidth: string
  onClick?: () => void
  children?: React.ReactNode
}

export default function FormInputWithButton({
  label,
  placeholder,
  buttonText,
  buttonWidth,
  onClick,
  children,
}: FormInputWithButtonProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <div className="flex gap-2">
        <div className="flex flex-1 rounded-xl bg-gray-300 text-sm">
          <input
            placeholder={placeholder}
            className="flex-1 rounded-xl bg-gray-300 px-4 py-3"
          />
          {children}
        </div>
        <button
          onClick={onClick}
          className={`${buttonWidth} whitespace-nowrap rounded-xl bg-white px-2 text-sm`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  )
}
