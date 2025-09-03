'use client'

import LetterStatusFilter from '@/features/letter/archive/components/LetterStatusFilter'
import PostStatusFilter from '@/features/post/containers/PostStatusFilter'
import NavTabBar from '@/shared/components/NavTabBar'
import Topbar from '@/shared/components/Topbar'
import PostListContainer from '@/shared/containers/PostListContainer'
import Link from 'next/link'

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
        <header className="flex justify-between px-5">
          <h1 className="h3">게시물</h1>
          <div className="flex items-center justify-end">
            <PostStatusFilter />
          </div>
        </header>

        <PostListContainer />
      </main>
    </div>
  )
}
