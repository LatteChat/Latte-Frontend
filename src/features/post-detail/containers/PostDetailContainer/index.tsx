'use client'

import PostHeader from '../../components/PostHeader'
import PostAnswer from '../../components/PostAnswer'
import PostContent from '../../components/PostContent'
import { useCommentActionActions } from '@/features/post/comment/stores/commentActionStore'
import { useEffect } from 'react'
import useGetPostDetailQuery from '../../hooks/useGetPostDetailQuery'
import { PostLikeButtonFeature } from '@/features/post-like'

export default function PostDetailContainer({
  letterId,
  user,
}: {
  letterId: number
  user?: any
}) {
  const { data: post } = useGetPostDetailQuery({
    letterId,
    userId: user.memberType === 'JUNIOR' ? user.juniorId : user.seniorId,
    memberType: user.memberType,
  })
  const { cancelSelectedComment } = useCommentActionActions()

  useEffect(() => {
    return () => {
      cancelSelectedComment()
    }
  }, [])

  return (
    <section className="px-5 pb-5 pt-10">
      <PostHeader
        user={{
          juniorId: post?.juniorDetailDto.juniorId!,
          nickname: post?.juniorDetailDto.name ?? '-',
          age: post?.juniorDetailDto.age,
          profile:
            post?.juniorDetailDto.image ?? '/images/coffee-bean-image.png',
        }}
        date={post?.createdAt ?? ''}
        likeCount={post?.heart ?? 0}
        commentCount={post?.totalComments ?? 0}
      />
      <PostContent
        imageUrl={post?.image}
        category={post?.category}
        title={post?.title ?? '제목이 없습니다'}
        content={post?.content ?? '본문이 없습니다'}
      />
      {post?.answerResponseDto && (
        <PostAnswer
          user={post?.answerResponseDto.seniorDetailDto}
          date={post?.answerResponseDto.createdAt}
          content={post?.answerResponseDto.content}
        />
      )}

      <div className="mt-4 flex justify-center">
        <PostLikeButtonFeature letterId={letterId} initialLike={post?.liked} />
      </div>
    </section>
  )
}
