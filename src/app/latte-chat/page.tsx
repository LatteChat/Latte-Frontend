'use client'

import BaristaRankContainer from '@/features/home/containers/BaristaRankContainer'
import PopularPostListContainer from '@/features/home/containers/PopularPostListContainer'
import NavTabBar from '@/shared/components/NavTabBar'
import Topbar from '@/shared/components/Topbar'
import PostListContainer from '@/shared/containers/PostListContainer'

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
      <div className="flex flex-col gap-4 pt-3">
        <Topbar icons={TOPBAR_ICONS} />
        <NavTabBar />
      </div>

      <main className="min-h-main flex h-auto flex-col bg-gray-100 py-5">
        <div className="mb-4">
          <PopularPostListContainer />
        </div>
        <section className="mb-6 h-16 w-full px-5">
          <div className="flex h-full w-full items-center justify-center rounded-[0.625rem] bg-white">
            광고
          </div>
        </section>
        <div className="mb-10">
          <BaristaRankContainer />
        </div>
        <PostListContainer />
      </main>
    </div>
  )
}
