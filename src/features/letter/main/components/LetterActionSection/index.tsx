import { AnswerStatus } from '@/shared/types/AnswerStatus'
import Link from 'next/link'

export default function LetterActionSection({
  type,
  href,
}: {
  type: AnswerStatus
  href?: string
}) {
  const renderActionButton = () => {
    switch (type) {
      case 'EMPTY':
        if (!href) return
        return (
          <>
            <Link
              href={href}
              className="h4 bg-secondary-brown-2 text-secondary-brown-1 flex w-full items-center justify-center rounded-2xl py-4"
            >
              사연 쓰기
            </Link>
            <p className="b6 text-gray-5">커피콩을 눌러 사연을 작성해보세요.</p>
          </>
        )
      case 'WRITING':
        // 사연 보내기 button을 컨테이너로 만들기
        return (
          <>
            <button className="h4 bg-secondary-brown-2 text-secondary-brown-1 flex w-full items-center justify-center rounded-2xl py-4">
              사연 보내기
            </button>
            <p className="b6 text-gray-5">
              사연 보내기를 눌러 사연을 전송해보세요.
            </p>
          </>
        )
      default:
        // 전송됨을 나타내는 버튼은 딱히 버튼으로 만들 필요가 없음.
        return (
          <>
            <button className="h4 bg-secondary-brown-2 text-secondary-brown-1 flex w-full items-center justify-center rounded-2xl py-4">
              전송됨
            </button>
            <p className="b6 text-gray-5">사연이 보내졌어요</p>
          </>
        )
    }
  }

  return (
    <div className="mt-10 flex flex-col items-center gap-1">
      {renderActionButton()}
    </div>
  )
}
