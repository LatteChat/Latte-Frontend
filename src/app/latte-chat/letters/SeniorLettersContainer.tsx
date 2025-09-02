import GreetingTopBar from '@/features/letter/main/components/GreetingTopBar'
import SeniorLetterContentCardListContainer from '@/features/letter/main/containers/SeniorLetterContentCardListContainer'
import SeniorLetterPreviewCardListContainer from '@/features/letter/main/containers/SeniorLetterPreviewCardListContainer'
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
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className="">
      <div className="sticky top-0 z-10 flex flex-col gap-4 bg-white">
        <Topbar icons={TOPBAR_ICONS} />
        <NavTabBar />
      </div>

      <main
        className="flex h-auto min-h-[calc(100svh-11rem)] flex-col bg-latte-gradient-1 p-5"
        //     style={{
        //       background: `
        //   linear-gradient(to bottom right, #fffcf3 30%, #fffae9 50%, #FFE9A6 90%) bottom right / 50% 50% no-repeat,
        //   linear-gradient(to bottom left, #fffcf3 30%, #fffae9 50%, #FFE9A6 90%) bottom left / 50% 50% no-repeat,
        //   linear-gradient(to top left, #fffcf3 30%, #fffae9 50%, #FFE9A6 90%) top left / 50% 50% no-repeat,
        //   linear-gradient(to top right, #fffcf3 30%, #fffae9 50%, #FFE9A6 90%) top right / 50% 50% no-repeat
        // `,
        //     }}
      >
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

        {toggle ? (
          <SeniorLetterContentCardListContainer />
        ) : (
          <SeniorLetterPreviewCardListContainer />
        )}
      </main>
    </div>
  )
}
