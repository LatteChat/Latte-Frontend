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
      {label && <label className="b4">{label}</label>}
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`outline-secondary-brown-2 focus:bg-secondary-brown-1 placeholder:text-gray-5 b4 bg-gray-1 w-full rounded-[0.625rem] px-4 py-3 ${icon ? 'pr-10' : ''}`}
        />
        {icon && (
          <div className="absolute right-3 top-1/2 aspect-square h-5 w-5 -translate-y-1/2 text-gray-500">
            {icon}
          </div>
        )}
      </div>
    </div>
  )
}
