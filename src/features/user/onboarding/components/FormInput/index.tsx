type FormInputProps = {
  label?: string
  type?: string
  placeholder: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  icon?: React.ReactNode
}

export default function FormInput({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  icon,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm font-normal">{label}</label>}
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full rounded-xl bg-gray-300 px-4 py-3 text-sm pr-${icon ? '10' : '3'}`}
        />
        {icon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            {icon}
          </div>
        )}
      </div>
    </div>
  )
}
