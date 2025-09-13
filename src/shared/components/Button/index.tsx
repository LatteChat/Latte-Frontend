const BUTTON_STYLE = {
  DEFAULT: 'py-4 rounded-2xl h4',
  MODAL: 'py-2.5 rounded-10 b4',
  CARD: 'py-3.5 rounded-10 h4',
  CARD_SMALL: 'py-3 rounded-10 b4',
}

export default function Button({
  type = 'DEFAULT',
  buttonText,
  textColor = 'text-white',
  bgColor = 'bg-secondary-brown-2',
  onClick,
}: {
  type?: 'DEFAULT' | 'MODAL' | 'CARD' | 'CARD_SMALL'
  buttonText: string
  bgColor?: string
  textColor?: string
  onClick?: () => void
}) {
  const selectedStyle = BUTTON_STYLE[type]
  console.log(type, selectedStyle)
  return (
    <button
      onClick={onClick}
      className={` ${bgColor} ${textColor} ${selectedStyle} w-full`}
    >
      {buttonText}
    </button>
  )
}
