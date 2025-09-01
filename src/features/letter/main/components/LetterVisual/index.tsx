import { LETTER_STATUS_JUNIOR_LABEL } from '@/features/letter/types/Letter'
import { AnswerStatus } from '@/shared/types/AnswerStatus'
import { Category } from '@/shared/types/Category'
import Image from 'next/image'
import Link from 'next/link'

type Letter = {
  letterId: number
  juniorId: number
  answerStatus: AnswerStatus
  letterStatus:
    | 'WRITING'
    | 'SENT'
    | 'ANSWERED'
    | 'ADOPTED'
    | 'MATCHED'
    | 'EMPTY'
  title: string
  content: string
  image: string | null
  category: Category
  view: number
  heart: number
  createAt: string
}

export default function LetterVisual({
  selectedLetter,
}: {
  selectedLetter: Letter
}) {
  return (
    <div className="relative flex flex-col items-center pt-5">
      <Link
        href={'/latte-chat/letters/new'}
        className="b5 absolute right-0 top-0 rounded-full bg-white p-2.5 text-secondary-brown-4 shadow-border"
      >
        <img src="/icons/add-icon.svg" alt="사연 추가" />
      </Link>

      <div className="relative flex items-start justify-center">
        <Image
          src={
            LETTER_STATUS_JUNIOR_LABEL[selectedLetter?.letterStatus ?? 'EMPTY']
              .image
          }
          width={187}
          height={187}
          alt="사연 상태 이미지"
          className={`aspect-square h-[11.6rem] ${selectedLetter?.letterStatus === 'EMPTY' ? 'opacity-50' : 'opacity-100'}`}
        />
        {selectedLetter?.letterStatus !== 'EMPTY' && (
          <Image
            src={'/images/roasted-image.svg'}
            width={91}
            height={91}
            alt="사연 상태 이미지"
            className="absolute -top-2 right-0"
          />
        )}
      </div>
      <h1 className="h3">
        {selectedLetter?.title && selectedLetter?.title.length
          ? selectedLetter.title
          : '오늘의 고민은 무엇인가요?'}
      </h1>
    </div>
  )
}
