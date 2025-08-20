'use client'

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

export default function LatteChatCommunityPage() {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <Topbar icons={TOPBAR_ICONS} />
        <NavTabBar />
      </div>

      <main className="flex h-auto min-h-main flex-col bg-white py-5">
        <PostListContainer />
      </main>
    </div>
  )
}
