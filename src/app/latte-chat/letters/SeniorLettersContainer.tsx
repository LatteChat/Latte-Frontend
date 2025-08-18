import GreetingTopBar from '@/features/letter/main/components/GreetingTopBar'
import LetterActionSection from '@/features/letter/main/components/LetterActionSection'
import LetterAnswerVisual from '@/features/letter/main/components/LetterAnswerVisual'
import SeniorRecentLetterListContainer from '@/features/letter/main/containers/SeniorRecentLetterListContainer'
import { Letter, Letters } from '@/features/letter/types/Letter'
import NavTabBar from '@/shared/components/NavTabBar'
import Topbar from '@/shared/components/Topbar'
import { useEffect, useState } from 'react'

const TOPBAR_ICONS = [
  {
    iconUrl: '/icons/alarm-icon.svg',
    alt: '알람',
    href: '',
  },
  {
    iconUrl: '/icons/search-icon.svg',
    alt: '검색',
    href: '',
  },
]

const LETTERS: Letters = [
  {
    id: 1,
    status: 'SENT', // SENT   SAVED   DRAFT
    title: 'IT 디자이너 취업 시장, 요즘 어떤가요?',
  },
  {
    id: 2,
    status: 'SAVED', // SENT   SAVED   DRAFT
    title: 'IT 디자이너 취업 시장, 요즘 어떤가요?2',
  },
  {
    id: 3,
    status: 'SAVED', // SENT   SAVED   DRAFT
    title: 'IT 디자이너 취업 시장, 요즘 어떤가요?3',
  },
  {
    id: 4,
    status: 'DRAFT', // SENT   SAVED   DRAFT
    title: 'IT 디자이너 취업 시장, 요즘 어떤가요?4',
  },
  {
    id: 5,
    status: 'DRAFT', // SENT   SAVED   DRAFT
    title: 'IT 디자이너 취업 시장, 요즘 어떤가요?5',
  },
]

export default function SeniorLettersContainer() {
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null)

  useEffect(() => {
    setSelectedLetter(LETTERS[0])
  }, [])

  return (
    <div>
      <div className="sticky top-0 z-10 flex flex-col gap-4 bg-white">
        <Topbar icons={TOPBAR_ICONS} />
        <NavTabBar />
      </div>

      <main className="flex h-auto min-h-[calc(100svh-11rem)] flex-col bg-gray-100 p-5">
        <GreetingTopBar />

        <section className="flex flex-col gap-[0.875rem]">
          {selectedLetter && (
            <>
              <SeniorRecentLetterListContainer
                letters={LETTERS}
                selectedLetter={selectedLetter}
                setSelectedLetter={setSelectedLetter}
              />
              <LetterAnswerVisual />
            </>
          )}
        </section>

        <LetterActionSection
          href="/latte-chat/letters/1/answer/new"
          linkLabel="답변 쓰기"
          description="샷을 눌러 사연을 확인해보세요."
        />
      </main>
    </div>
  )
}
