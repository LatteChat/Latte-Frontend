import { CATEGORIES_MAP } from '@/shared/types/Category'
import AnswerEditor from '../AnswerEditor'
import Tag from '../Tag'

export default function ActiveAnswerEditBox({
  button,
  category,
  answerType,
}: {
  button: React.ReactNode
  category: string
  answerType: string
}) {
  return (
    <div className="h-full w-full flex-1 pt-5">
      <div className="mb-4 ml-5 flex items-start gap-2.5">
        {category && <Tag label={CATEGORIES_MAP[category]} type="CATEGORY" />}
        {answerType.length > 0 && <Tag label={answerType} type="ANSWERTYPE" />}
      </div>

      <AnswerEditor />
      {button}
    </div>
  )
}
