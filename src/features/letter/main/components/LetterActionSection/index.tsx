import useSendLetterQuery from '@/features/letter/hooks/useSendLetterQuery'
import ImageGeneratingModal from '@/features/modal/components/ImageGeneratingModal'
import { useModal } from '@/shared/contexts/ModalContext'
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
  const { mutate: sendLetterMutate } = useSendLetterQuery()
  const { openModal } = useModal()

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
        // 사연 보내기 button을 컨테이너로 만들기
        return (
          <>
            <button
              onClick={() => {
                openModal(<ImageGeneratingModal />)
                sendLetterMutate({
                  letterId: selectedLetterId,
                })
              }}
              className="h4 flex w-full items-center justify-center rounded-2xl bg-secondary-brown-2 py-4 text-secondary-brown-1"
            >
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
