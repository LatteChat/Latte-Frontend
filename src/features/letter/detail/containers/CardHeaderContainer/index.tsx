import { AnswerStatus } from '@/shared/types/AnswerStatus'
import { useRouter } from 'next/navigation'

export default function CardHeaderContainer({
  letterId,
  answerStatus,
}: {
  letterId: number
  answerStatus: AnswerStatus
}) {
  const router = useRouter()

  const handleBack = () => {
    if (document.referrer) {
      router.back()
    } else {
      router.push('/latte-chat/letters/archive') // fallback
    }
  }

  const title = () => {
    const isSaved = answerStatus === 'SAVED'
    const isSend = answerStatus === 'SEND'
    const hasAnswer = answerStatus === 'ANSWERED'
    const isAdopted = answerStatus === 'ADOPTED'
    const isMatched = answerStatus === 'MATCHED'
    if (isSaved) {
      return '저장된 글'
    } else if (isSend) {
      return '답변 대기중인 사연'
    } else if (hasAnswer) {
      return '답변이 완료된 사연'
    } else if (isAdopted || isMatched) {
      return '내가 채택한 게시글'
    }
  }

  const handleClickDeleteButton = () => {
    console.log('해당 게시글을 삭제합니다')
  }

  return (
    <header className="mb-10 flex items-center justify-between">
      <button onClick={handleBack}>
        <img src="/icons/close-icon.svg" />
      </button>
      <h1 className="h4">{title()}</h1>
      <button onClick={handleClickDeleteButton}>
        <img src="/icons/trash-icon.svg" />
      </button>
    </header>
  )
}
