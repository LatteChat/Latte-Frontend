import LetterImageGenerateButton from '@/features/letter-image-generate/components/LetterImageGenerateButton'
import Link from 'next/link'

export default function LetterActionSection({
  selectedLetterId,
  type,
  href,
}: {
  selectedLetterId: number
  type: 'WRITING' | 'SENT' | 'ANSWERED' | 'ADOPTED' | 'MATCHED' | 'EMPTY'
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
              className="h4 flex w-full items-center justify-center rounded-2xl bg-secondary-brown-2 py-4 text-secondary-brown-1"
            >
              사연 쓰기
            </Link>
            <p className="b6 text-gray-5">커피콩을 눌러 사연을 작성해보세요.</p>
          </>
        )
      case 'WRITING':
        return (
          <>
            <LetterImageGenerateButton letterId={selectedLetterId} />
            <p className="b6 text-gray-5">
              사연 보내기를 눌러 사연을 전송해보세요.
            </p>
          </>
        )
      default:
        return (
          <>
            <div className="h4 flex w-full items-center justify-center rounded-2xl bg-secondary-brown-4 py-4 text-white">
              전송됨
            </div>
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
