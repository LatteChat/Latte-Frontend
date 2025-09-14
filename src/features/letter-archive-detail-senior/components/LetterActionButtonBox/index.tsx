import { AnswerStatus } from '@/shared/types/AnswerStatus'
import GoPostButton from '@/features/letter-archive-detail-junior/components/GoPostButton'
import AnswerLetterButton from '../AnswerLetterButton'

export default function SeniorLetterActionButtonBox({
  letterStatus,
  answerStatus,
  isOpen,
}: {
  letterStatus: any
  answerStatus: AnswerStatus
  isOpen: boolean
}) {
  let description = ''
  let buttons: React.ReactNode[] = []

  if (letterStatus === 'ADOPTED' || letterStatus === 'MATCHED') {
    if (!isOpen) return
    description = '커뮤니티에 게시되었어요.'
    buttons = [<GoPostButton key="adopt" />]
  } else {
    if (answerStatus === 'WAITING') {
      description = '답변하시겠어요?'
      buttons = [<AnswerLetterButton key="answer" />]
    }
  }

  if (!description || buttons.length === 0) return null

  return (
    <div className="mt-10 flex flex-col items-center gap-5">
      <p className="b6 text-gray-6">{description}</p>
      {buttons}
    </div>
  )
}
