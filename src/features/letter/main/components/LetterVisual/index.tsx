import { Letter, LETTER_STATUS_LABEL } from '@/features/letter/types/Letter'
import Image from 'next/image'

export default function LetterVisual({
  selectedLetter,
}: {
  selectedLetter: Letter
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex items-start justify-center">
        <Image
          src={LETTER_STATUS_LABEL[selectedLetter?.status ?? 'DRAFT'].image}
          width={187}
          height={187}
          alt="사연 상태 이미지"
          className={`aspect-square h-[11.6rem] ${selectedLetter?.status === 'DRAFT' ? 'opacity-50' : 'opacity-100'}`}
        />
        {selectedLetter?.status === 'SAVED' && (
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
        {selectedLetter ? selectedLetter.title : '오늘의 고민은 무엇인가요?'}
      </h1>
    </div>
  )
}
