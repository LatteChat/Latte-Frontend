import { CATEGORIES_MAP } from '@/shared/types/Category'
import Tag from '../Tag'

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
        {category && <Tag label={CATEGORIES_MAP[category]} type="CATEGORY" />}
        {answerType && <Tag label={answerType} type="ANSWERTYPE" />}
      </div>
      <h2 className="h3 mb-5 text-black">{title}</h2>
    </div>
  )
}
