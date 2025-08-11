'use client'

import BaristaRankContainer from '@/features/home/containers/BaristaRankContainer'
import PopularPostListContainer from '@/features/home/containers/PopularPostListContainer'
import PostListContainer from '@/shared/containers/PostListContainer'

export default function LatteChatHomePage() {
  return (
    <div className="min-h-main flex h-auto flex-col bg-gray-100 py-5">
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
    </div>
  )
}
