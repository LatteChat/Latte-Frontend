'use client'

import BaristaRankContainer from '@/features/home/containers/BaristaRankContainer'
import PopularPostListContainer from '@/features/home/containers/PopularPostListContainer'
import NavTabBar from '@/shared/components/NavTabBar'
import Topbar from '@/shared/components/Topbar'
import PostListContainer from '@/shared/containers/PostListContainer'
import Image from 'next/image'

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

export default function LatteChatHomePage() {
  return (
    <div>
      <div className="sticky top-0 z-10 flex flex-col gap-4 bg-white">
        <Topbar icons={TOPBAR_ICONS} />
        <NavTabBar />
      </div>

      <main className="relative flex h-auto min-h-main flex-col py-5">
        <div className="pointer-events-none absolute left-0 top-0 -z-10 h-[96rem] w-full bg-[linear-gradient(180deg,#E5CBA5_0%,#FFF_45.67%)]" />

        <div className="mb-7">
          <PopularPostListContainer />
        </div>
        <section className="mb-6 h-16 w-full px-5">
          <Image
            src="/images/lattechat-advertisement.png"
            alt="라떼챗 광고 이미지"
            width={1340}
            height={256}
            className="w-full rounded-10"
          />
        </section>
        <div className="mb-10">
          <BaristaRankContainer />
        </div>
        <PostListContainer />
      </main>
    </div>
  )
}
