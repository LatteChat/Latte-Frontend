const CATEGORY_STYLE = 'text-secondary-brown-1 bg-secondary-brown-2 '
const ANSWERTYPE_STYLE = 'text-secondary-brown-2 bg-white'

export default function Tag({
  label,
  type,
}: {
  label: string
  type: 'CATEGORY' | 'ANSWERTYPE'
}) {
  const style = () => {
    switch (type) {
      case 'CATEGORY':
        return CATEGORY_STYLE
      case 'ANSWERTYPE':
        return ANSWERTYPE_STYLE
      default:
        return CATEGORY_STYLE
    }
  }

  return (
    <span
      className={`${style()} b9 rounded border border-primary px-1.5 py-0.5`}
    >
      {label}
    </span>
  )
}
