import GreetingTopBar from '@/features/letter/main/components/GreetingTopBar'
import SeniorLetterContentCardListContainer from '@/features/letter/main/containers/SeniorLetterContentCardListContainer'
import SeniorLetterPreviewCardListContainer from '@/features/letter/main/containers/SeniorLetterPreviewCardListContainer'
import { useLetterStateStore } from '@/features/letter/stores/letterStateStore'
import NavTabBar from '@/shared/components/NavTabBar'
import Toggle from '@/shared/components/Toggle'
import Topbar from '@/shared/components/Topbar'
import { useState } from 'react'

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

export default function SeniorLettersContainer() {
  const { statusState, setStatusState } = useLetterStateStore()

  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
    setStatusState('NORMAL')
  }

  return (
    <div className="overflow-hidden">
      <div className="sticky top-0 z-10 flex flex-col gap-4 bg-white">
        <Topbar icons={TOPBAR_ICONS} />
        <NavTabBar />
      </div>

      <main
        className={`relative flex h-auto min-h-[calc(100svh-11rem)] flex-col p-5 ${
          statusState === 'BONUS' ? '' : 'bg-latte-gradient-1'
        }`}
        style={
          statusState === 'BONUS'
            ? {
                background: `
            linear-gradient(to bottom right, #fffcf3 30%, #fffae9 50%, #FFE9A6 90%) bottom right / 50% 50% no-repeat,
            linear-gradient(to bottom left, #fffcf3 30%, #fffae9 50%, #FFE9A6 90%) bottom left / 50% 50% no-repeat,
            linear-gradient(to top left, #fffcf3 30%, #fffae9 50%, #FFE9A6 90%) top left / 50% 50% no-repeat,
            linear-gradient(to top right, #fffcf3 30%, #fffae9 50%, #FFE9A6 90%) top right / 50% 50% no-repeat
          `,
              }
            : undefined
        }
      >
        {statusState === 'BONUS' && (
          <>
            <img
              src="/images/star-image.png"
              className="animate-twinkle absolute left-0 top-72 z-10 w-44"
            />
            <img
              src="/images/star-image.png"
              className="animate-twinkle absolute right-0 top-16 z-10 w-24 rotate-45"
            />
          </>
        )}

        <GreetingTopBar title={'사연을 선택해주세요'} />

        <div className="mb-5 mt-4">
          <Toggle
            offLabel="사진 보기"
            onLabel="리스트 보기"
            width={'6rem'}
            onClick={handleToggle}
            isChecked={toggle}
            offColor="bg-gray-4 text-black"
            onColor="bg-secondary-brown-4 text-white"
          />
        </div>

        <div className="z-20">
          {toggle ? (
            <SeniorLetterContentCardListContainer />
          ) : (
            <SeniorLetterPreviewCardListContainer />
          )}
        </div>
      </main>
    </div>
  )
}
