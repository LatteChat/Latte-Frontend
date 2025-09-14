import PostDetailPage from '@/screens/latte-chat/posts/detail/ui'

export default async function PostDetailRoute({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const letterId = Number(id)

  return <PostDetailPage letterId={letterId} />
}
