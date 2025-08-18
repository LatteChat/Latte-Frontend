import {
  Letter,
  LETTER_STATUS_LABEL,
  Letters,
} from '@/features/letter/types/Letter'

export default function SeniorRecentLetterListContainer({
  letters,
  selectedLetter,
  setSelectedLetter,
}: {
  letters: Letters
  selectedLetter: Letter
  setSelectedLetter: React.Dispatch<React.SetStateAction<Letter | null>>
}) {
  return (
    <div className="flex w-full gap-1 overflow-hidden rounded-10 bg-gray-200 px-5 pb-4 pt-2">
      {letters.map((letter) => {
        return (
          <div
            key={letter.id}
            className="flex flex-1 shrink-0 flex-col items-center justify-end"
          >
            {letter?.id === selectedLetter?.id && (
              <img
                src="/icons/select-icon.svg"
                className="aspect-square h-[0.625rem] w-[0.625rem] translate-y-1"
                alt="선택 아이콘"
              />
            )}
            <button onClick={() => setSelectedLetter(letter)}>
              <img
                src={LETTER_STATUS_LABEL[letter.status].icon}
                className={`${letter.status === 'DRAFT' ? 'opacity-30' : 'opacity-100'} aspect-square h-14 w-14`}
                alt="사연 아이콘"
              />
            </button>
            <span className="b6">
              {LETTER_STATUS_LABEL[letter.status].label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
