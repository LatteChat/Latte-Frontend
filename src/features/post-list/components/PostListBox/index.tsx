import PostCard from '@/shared/components/PostCard'
import Link from 'next/link'
import { forwardRef } from 'react'

type PostListBoxProps = {
  posts: any
  hasNextPage: boolean
  isFetchingNextPage: boolean
}

const PostListBox = forwardRef<HTMLDivElement, PostListBoxProps>(
  ({ posts, hasNextPage, isFetchingNextPage }, loadMoreRef) => {
    return (
      <>
        {posts?.pages.flatMap((page: any) =>
          page.content.map((post: any) => {
            return (
              <Link
                key={post.letterId}
                href={`/latte-chat/posts/${post.letterId}`}
              >
                <PostCard
                  post={{
                    title: post.title,
                    content: post.content,
                    commentCount: post.countComments,
                    image: post.image,
                    likeCount: post.heart,
                    date: post.createAt,
                    tag: post.category,
                  }}
                  showMeta
                />
              </Link>
            )
          })
        )}

        {hasNextPage && (
          <div ref={loadMoreRef} className="flex justify-center py-5">
            {isFetchingNextPage && (
              <img
                src="/images/spinner-image.png"
                className="aspect-square h-10 w-10"
                alt="로딩중"
              />
            )}
          </div>
        )}
      </>
    )
  }
)

PostListBox.displayName = 'PostListBox'

export default PostListBox
