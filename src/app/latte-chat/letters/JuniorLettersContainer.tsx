import { useGetRecentJuniorLetterListQuery } from '@/features/letter/hooks/useGetRecentJuniorLetterListQuery'
import GreetingTopBar from '@/features/letter/main/components/GreetingTopBar'
import LetterActionSection from '@/features/letter/main/components/LetterActionSection'
import LetterVisual from '@/features/letter/main/components/LetterVisual'
import JuniorRecentLetterListContainer from '@/features/letter/main/containers/JuniorRecentLetterListContainer'
import { Letter } from '@/features/letter/services/letterService.client'
import NavTabBar from '@/shared/components/NavTabBar'
import Topbar from '@/shared/components/Topbar'
import { useUserInfo } from '@/shared/hooks/useUserInfo'
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

export default function JuniorLettersContainer() {
  const { data: userInfo } = useUserInfo()
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null)

  const { data: recentLetters, isFetched } = useGetRecentJuniorLetterListQuery({
    juniorId: userInfo?.juniorId!,
  })

  useEffect(() => {
    if (recentLetters && recentLetters.length > 0) {
      setSelectedLetter(recentLetters[0])
    }
  }, [isFetched])

  return (
    <div>
      <div className="sticky top-0 z-10 flex flex-col gap-4 bg-white">
        <Topbar icons={TOPBAR_ICONS} />
        <NavTabBar />
      </div>

      <main className="flex h-auto min-h-[calc(100svh-11rem)] flex-col bg-latte-gradient-1 p-5">
        <GreetingTopBar title={'사연을 작성해주세요'} />

        <section className="flex flex-col gap-3">
          {recentLetters && selectedLetter && (
            <>
              <JuniorRecentLetterListContainer
                letters={recentLetters}
                selectedLetter={selectedLetter}
                setSelectedLetter={setSelectedLetter}
              />
              <LetterVisual selectedLetter={selectedLetter} />
            </>
          )}
        </section>
        {selectedLetter && (
          <LetterActionSection
            selectedLetterId={selectedLetter.letterId}
            type={selectedLetter?.letterStatus}
            href="/latte-chat/letters/new"
          />
        )}
      </main>
    </div>
  )
}
