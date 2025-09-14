import { BaristaRankFeature } from '@/features/barista-ranking-list'
import { fetchBaristaList } from '@/features/barista-ranking-list/services/baristaRankingService.server'
import { PopularPostListFeature } from '@/features/post-popular-list'
import { fetchPostListServer } from '@/features/post-popular-list/services/postPopularListService.server'
import { getUserServer } from '@/features/user/services/userService.server'

import NavTabBar from '@/shared/components/NavTabBar'
import Topbar from '@/shared/components/Topbar'
import PostListContainer from '@/shared/containers/PostListContainer'
import Image from 'next/image'
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

export default async function LatteChatHomePage() {
  const user = await getUserServer()
  const popularPosts = await fetchPostListServer({
    page: 0,
    filter: 'view',
    category: null,
    ...(user && {
      userId: user.memberType === 'JUNIOR' ? user.juniorId : user.seniorId,
      memberType: user.memberType,
    }),
  })
  const baristas = await fetchBaristaList()
  const posts = await fetchPostListServer({
    page: 0,
    filter: 'all',
    ...(user && {
      userId: user.memberType === 'JUNIOR' ? user.juniorId : user.seniorId,
      memberType: user.memberType,
    }),
  })

  return (
    <div>
      <div className="sticky top-0 z-10 flex flex-col gap-4 bg-white">
        <Topbar icons={TOPBAR_ICONS} />
        <NavTabBar />
      </div>

      <main className="relative flex h-auto min-h-main flex-col py-5">
        <div className="pointer-events-none absolute left-0 top-0 -z-10 h-[96rem] w-full bg-[linear-gradient(180deg,#E5CBA5_0%,#FFF_45.67%)]" />

        <div className="mb-7">
          <PopularPostListFeature user={user} initialPosts={popularPosts} />
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
          <BaristaRankFeature initialBaristas={baristas} />
        </div>

        <section>
          <header className="flex justify-between px-5">
            <h1 className="h3">게시물</h1>
            <Link
              href={'/latte-chat/posts'}
              className="flex items-center gap-2"
            >
              <span className="b6">더보기</span>
              <img
                src="/icons/next-arrow-icon.svg"
                alt="더보기 아이콘"
                className="aspect-square h-4 w-4"
              />
            </Link>
          </header>

          <PostListContainer user={user} initialPosts={posts} />
        </section>
      </main>
    </div>
  )
}
