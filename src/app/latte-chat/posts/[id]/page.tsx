import PostDetailPage from '@/pages/latte-chat/posts/detail/ui'

export default function PostDetailRoute({
  params,
}: {
  params: { id: string }
}) {
  if (!params.id) return null

  return <PostDetailPage letterId={Number(params.id)} />
}
