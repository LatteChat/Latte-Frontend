import { CATEGORIES_MAP } from '@/shared/types/Category'
import Editor from '../Editor'
import Tag from '../Tag'
import { useLetterCreateState } from '../../store/letterCreateStore'

export default function ActiveEditorBox({
  button,
}: {
  button: React.ReactNode
}) {
  const { category, answerType } = useLetterCreateState()

  return (
    <div className="h-full w-full flex-1 pt-5">
      <div className="mb-4 ml-5 flex items-start gap-2.5">
        {category && <Tag label={CATEGORIES_MAP[category]} type="CATEGORY" />}
        {answerType.length > 0 && (
          <Tag label={answerType[0]} type="ANSWERTYPE" />
        )}
      </div>
      <Editor />
      {button}
    </div>
  )
}
