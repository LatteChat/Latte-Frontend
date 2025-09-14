import { CATEGORIES_MAP } from '@/shared/types/Category'

export default function LetterHeader({
  category,
  answerType,
  title,
}: {
  category?: string
  answerType?: string
  title: string
}) {
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex gap-2">
        {category && (
          <span className="b9 inline-block rounded bg-secondary-brown-2 px-2 py-0.5 text-white">
            {CATEGORIES_MAP[category]}
          </span>
        )}
        {answerType && (
          <span className="b9 inline-block rounded border border-primary bg-white px-2 py-0.5 text-secondary-brown-2">
            {answerType}
          </span>
        )}
      </div>
      <h2 className="h3 mb-5 text-black">{title}</h2>
    </div>
  )
}
