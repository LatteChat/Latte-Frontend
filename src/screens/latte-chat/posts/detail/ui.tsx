import Topbar from '@/shared/components/Topbar'
import PostDetailContainer from '@/features/post-detail/containers/PostDetailContainer'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { getUserServer } from '@/features/user/services/userService.server'
import { fetchPostDetailServer } from '@/features/post-detail/services/postDetailService.server'
import ReactQueryHydrate from '@/shared/libs/ReactQueryHydrate'
import { CommentFeature } from '@/features/post-comment'

const TOPBAR_ICONS = [
  {
    iconUrl: '/icons/post-share-icon.svg',
    alt: '공유',
    href: '',
  },
  {
    iconUrl: '/icons/empty-bookmark-icon.svg',
    alt: '북마크',
    href: '',
  },
]

export default async function PostDetailPage({
  letterId,
}: {
  letterId: number
}) {
  const queryClient = new QueryClient()
  const user = await getUserServer()

  await queryClient.prefetchQuery({
    queryKey: ['/post/detail', letterId],
    queryFn: () =>
      fetchPostDetailServer({
        letterId,
        userId: user?.memberType === 'JUNIOR' ? user.juniorId : user?.seniorId,
        memberType: user?.memberType,
      }),
  })

  const dehydratedState = dehydrate(queryClient)

  return (
    <div>
      <div className="sticky top-0 z-50 flex flex-col gap-4">
        <Topbar icons={TOPBAR_ICONS} />
      </div>

      <main className="flex h-auto min-h-main flex-col bg-white">
        <ReactQueryHydrate state={dehydratedState}>
          <PostDetailContainer letterId={letterId} user={user} />
        </ReactQueryHydrate>

        <hr className="h-[0.3rem] w-full border-0 bg-gray-300" />

        <CommentFeature letterId={letterId} />
      </main>
    </div>
  )
}
