import { AnswerStatus } from '@/shared/types/AnswerStatus'
import AnswerLetterButtonContainer from '../../../containers/senior/AnswerLetterButtonContainerr'
import GoPostButton from '../../junior/GoPostButton'

export default function LetterActionButtonBox({
  letterStatus,
}: {
  letterStatus: AnswerStatus
}) {
  let description = ''
  let buttons: React.ReactNode[] = []

  if (letterStatus === 'SENT') {
    description = '답변하시겠어요?'
    buttons = [<AnswerLetterButtonContainer key="answer" />]
  } else if (letterStatus === 'ADOPTED') {
    description = '커뮤니티에 게시되었어요.'
    buttons = [<GoPostButton key="adopt" />]
  }

  if (!description || buttons.length === 0) return null

  return (
    <div className="mt-10 flex flex-col items-center gap-5">
      <p className="b6 text-black">{description}</p>
      {buttons}
    </div>
  )
}
