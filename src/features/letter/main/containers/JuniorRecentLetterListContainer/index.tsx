import { LETTER_STATUS_JUNIOR_LABEL } from '@/features/letter/types/Letter'
import { AnswerStatus } from '@/shared/types/AnswerStatus'
import { Category } from '@/shared/types/Category'

type Letter = {
  letterId: number
  juniorId: number
  answerStatus: AnswerStatus
  title: string
  content: string
  image: string | null
  category: Category
  view: number
  heart: number
  createAt: string
}

export default function JuniorRecentLetterListContainer({
  letters,
  selectedLetter,
  setSelectedLetter,
}: {
  letters: Letter[]
  selectedLetter: Letter
  setSelectedLetter: React.Dispatch<React.SetStateAction<Letter | null>>
}) {
  const selectedIndex = letters.findIndex(
    (letter) => letter.letterId === selectedLetter?.letterId
  )

  return (
    <div className="shadow-border relative flex w-full gap-1 rounded-10 bg-[rgba(255,255,255,0.8)] px-5">
      {selectedIndex !== -1 && (
        <div
          className="border-secondary-brown-2 absolute top-0 h-full w-[calc((100%-56px)/5)] rounded-10 border-[3px] shadow-[0_1px_3px_#C9A070] transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(calc(${selectedIndex * 100}% + ${selectedIndex * 4}px))`,
          }}
        />
      )}

      {letters.map((letter) => {
        return (
          <div
            key={letter.letterId}
            className="relative flex h-full flex-1 shrink-0 flex-col items-center justify-end py-4"
          >
            {letter?.letterId === selectedLetter?.letterId && (
              <img
                src="/icons/select-icon.svg"
                className="absolute top-0 aspect-square h-[0.625rem] w-[0.625rem] translate-y-1"
                alt="선택 아이콘"
              />
            )}
            <button onClick={() => setSelectedLetter(letter)}>
              <img
                src={LETTER_STATUS_JUNIOR_LABEL[letter.answerStatus].icon}
                className={`${letter.answerStatus === 'EMPTY' ? 'opacity-30' : 'opacity-100'} aspect-square h-14 w-14`}
                alt="사연 아이콘"
              />
            </button>
            <span
              className={`b6 ${
                letter.answerStatus === 'EMPTY' ? 'text-gray-5' : 'text-black'
              }`}
            >
              {LETTER_STATUS_JUNIOR_LABEL[letter.answerStatus].label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
