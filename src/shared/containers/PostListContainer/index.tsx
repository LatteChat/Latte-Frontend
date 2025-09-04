import { useGetPostListQuery } from '@/features/home/hooks/useGetPostListQuery'
import { usePostFilterStore } from '@/features/post/stores/postFilterStore'
import PostCard from '@/shared/components/PostCard'
import PostFilterContainer from '@/shared/containers/PostFilterContainer'
import { useUserInfo } from '@/shared/hooks/useUserInfo'
import { Category } from '@/shared/types/Type'
import Link from 'next/link'
import { useState } from 'react'

export default function PostListContainer() {
  const { data: userInfo } = useUserInfo()
  const [selected, setSelected] = useState<Category | null>(null)
  const { statusFilter } = usePostFilterStore()

  const { data: postListByCategory } = useGetPostListQuery({
    page: 0,
    filter: statusFilter,
    category: selected,
    userId:
      userInfo?.memberType === 'JUNIOR'
        ? userInfo?.juniorId
        : userInfo?.seniorId,
    memberType: userInfo?.memberType,
  })

  console.log('postListByCategory:', postListByCategory)

  return (
    <section className="flex flex-col">
      <PostFilterContainer selected={selected} setSelected={setSelected} />

      <main className="flex flex-col gap-3.5 px-5">
        {postListByCategory?.content.map((post, index) => {
          console.log(post)
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
        })}
      </main>
    </section>
  )
}
