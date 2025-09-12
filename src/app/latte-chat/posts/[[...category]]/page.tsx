import PostListContainer from '@/features/post-list/containers/PostListContainer'
import { fetchPostListServer } from '@/features/post-popular-list/services/postPopularListService.server'
import PostStatusFilter from '@/features/post/containers/PostStatusFilter'
import { getUserServer } from '@/features/user/services/userService.server'
import NavTabBar from '@/shared/components/NavTabBar'
import Topbar from '@/shared/components/Topbar'
import ReactQueryHydrate from '@/shared/libs/ReactQueryHydrate'
import { dehydrate, QueryClient } from '@tanstack/react-query'

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

export default async function LatteChatCommunityPage() {
  const queryClient = new QueryClient()

  const user = await getUserServer()

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['/main/list', 'all', null],
    queryFn: ({ pageParam = 0 }) =>
      fetchPostListServer({
        page: pageParam,
        filter: 'all',
        ...(user && {
          userId: user.memberType === 'JUNIOR' ? user.juniorId : user.seniorId,
          memberType: user.memberType,
        }),
      }),
    initialPageParam: 0,
  })

  const dehydratedState = dehydrate(queryClient)

  return (
    <div>
      <div className="sticky top-0 z-10 flex flex-col gap-4 bg-white">
        <Topbar icons={TOPBAR_ICONS} />
        <NavTabBar />
      </div>

      <main className="flex h-auto min-h-[calc(100svh-11rem)] flex-col py-5">
        <header className="flex justify-between px-5">
          <h1 className="h3">게시물</h1>
          <div className="flex items-center justify-end">
            <PostStatusFilter />
          </div>
        </header>

        <ReactQueryHydrate state={dehydratedState}>
          <PostListContainer user={user} />
        </ReactQueryHydrate>
      </main>
    </div>
  )
}
