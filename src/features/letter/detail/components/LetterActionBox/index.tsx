import Button from '@/shared/components/Button'
import { AnswerStatus } from '@/shared/types/AnswerStatus'

export default function LetterActionBox({
  answerStatus,
}: {
  answerStatus: AnswerStatus
}) {
  let description = ''
  let buttons: { text: string; bgColor?: string; onClick?: () => void }[] = []

  if (answerStatus === 'ANSWERED') {
    description = '답변을 채택하시겠어요?'
    buttons = [{ text: '채택하기', onClick: () => console.log('채택') }]
  } else if (answerStatus === 'ADOPTED') {
    description = '1:1 멘토링을 요청하시겠어요?'
    buttons = [
      { text: '멘토링 요청하기', onClick: () => console.log('멘토링 요청') },
      {
        text: '게시글 보러가기',
        bgColor: 'bg-secondary-brown-4',
        onClick: () => console.log('게시글 이동'),
      },
    ]
  } else if (answerStatus === 'MATCHED') {
    description = '멘토링이 진행되었어요'
    buttons = [
      {
        text: '게시글 보러가기',
        bgColor: 'bg-secondary-brown-4',
        onClick: () => console.log('게시글 이동'),
      },
    ]
  }

  if (!description || buttons.length === 0) return null

  return (
    <div className="mt-10 flex flex-col items-center gap-5">
      <p className="b6 text-black">{description}</p>
      {buttons.map((button, idx) => (
        <Button
          key={idx}
          buttonText={button.text}
          bgColor={button.bgColor}
          onClick={button.onClick as () => void}
        />
      ))}
    </div>
  )
}
