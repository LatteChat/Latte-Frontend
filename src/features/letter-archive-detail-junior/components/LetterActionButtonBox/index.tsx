import { AnswerStatus } from '@/shared/types/AnswerStatus'
import LetterImageGenerateButton from '@/features/letter-image-generate/components/LetterImageGenerateButton'
import RequestMoreAnswerButton from '../RequestMoreAnswerButton'
import EditLetterLinkButton from '../EditLetterLinkButton'
import AdoptAnswerButton from '@/features/letter-answer-adopt/components/AdoptAnswerButton'
import RequestMentorButton from '@/features/mentor-request/components/RequestMentorButton'
import GoPostButton from '@/features/letter-archive-detail/components/GoPostButton'

export default function JuniorLetterActionButtonBox({
  letterId,
  letterStatus,
  isOpen,
}: {
  letterId: number
  letterStatus: AnswerStatus
  isOpen: boolean
}) {
  let description = ''
  let buttons: React.ReactNode[] = []

  if (letterStatus === 'WRITING') {
    description = '사연을 수정하시겠어요?'
    buttons = [
      <EditLetterLinkButton key="edit" />,
      <LetterImageGenerateButton
        letterId={letterId}
        key="image-genrate"
        type="CARD"
        bgColor="bg-secondary-brown-4"
      />,
    ]
  } else if (letterStatus === 'ANSWERED') {
    description = '이 답변을 채택하시겠어요?'
    buttons = [
      <AdoptAnswerButton key="adopt" />,
      <RequestMoreAnswerButton key="request-answer" />,
    ]
  } else if (letterStatus === 'ADOPTED') {
    description = '1:1 멘토링을 요청하시겠어요?'
    buttons = [
      <RequestMentorButton key="request-mentor" />,
      isOpen && <GoPostButton key="go-post" />,
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
