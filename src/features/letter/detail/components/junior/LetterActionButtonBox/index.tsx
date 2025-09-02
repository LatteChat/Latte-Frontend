import { AnswerStatus } from '@/shared/types/AnswerStatus'
import GoPostButton from '../GoPostButton'
import RequestMentorButtonContainer from '../../../containers/junior/RequestMentorButtonContainer'
import AdoptAnswerButtonContainer from '../../../containers/junior/AdoptAnswerButtonContainer'
import RequestMoreAnswerButtonContainer from '../../../containers/junior/RequestMoreAnswerButtonContainer'
import EditLetterButtonContainer from '../../../containers/junior/EditLetterButtonContainer'
import SendLetterButtonContainer from '../../../containers/junior/SendLetterButtonContainer'

export default function LetterActionButtonBox({
  letterStatus,
}: {
  letterStatus: AnswerStatus
}) {
  let description = ''
  let buttons: React.ReactNode[] = []

  if (letterStatus === 'WRITING') {
    description = '사연을 수정하시겠어요?'
    buttons = [
      <EditLetterButtonContainer key="edit" />,
      <SendLetterButtonContainer key="send" />,
    ]
  } else if (letterStatus === 'ANSWERED') {
    description = '이 답변을 채택하시겠어요?'
    buttons = [
      <AdoptAnswerButtonContainer key="adopt" />,
      <RequestMoreAnswerButtonContainer key="request-answer" />,
    ]
  } else if (letterStatus === 'ADOPTED') {
    description = '1:1 멘토링을 요청하시겠어요?'
    buttons = [
      <RequestMentorButtonContainer key="request-mentor" />,
      <GoPostButton key="go-post" />,
    ]
  } else if (letterStatus === 'MATCHED') {
    description = '멘토링이 진행되었어요'
    buttons = [<GoPostButton key="go-post" />]
  }

  if (!description || buttons.length === 0) return null

  return (
    <div className="mt-10 flex flex-col items-center gap-5">
      <p className="b6 text-black">{description}</p>
      {buttons}
    </div>
  )
}
