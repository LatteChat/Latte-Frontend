import PostAnswer from '@/features/post/components/PostAnswer'
import PostContent from '@/features/post/components/PostContent'
import PostHeader from '@/features/post/components/PostHeader'
import Topbar from '@/shared/components/Topbar'
import CommentListContainer from '@/features/post/containers/CommentListContainer'
import useGetPostDetailQuery from '@/features/post/hooks/useGetPostDetailQuery'
import { useUserInfo } from '@/shared/hooks/useUserInfo'
import { useParams } from 'next/navigation'
import useLikePostQuery from '@/features/post/hooks/useLikePostQuery'

const TOPBAR_ICONS = [
  {
    iconUrl: '/icons/post-share-icon.svg',
    alt: '공유',
    href: '',
  },
  {
    iconUrl: '/icons/bookmark-icon.svg',
    alt: '북마크',
    href: '',
  },
]

export default function PostDetailContainer() {
  const params = useParams()
  const letterId = Number(params.id) ?? null

  if (!letterId) return null

  const { data: userInfo } = useUserInfo()
  const { data: postDetail } = useGetPostDetailQuery(
    userInfo
      ? {
          letterId,
          userId:
            userInfo.memberType === 'JUNIOR'
              ? userInfo.juniorId
              : userInfo.seniorId,
          memberType: userInfo.memberType,
        }
      : undefined
  )
  const { mutate: likePostMutate } = useLikePostQuery()

  const handleClickLikeButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()

    if (!userInfo) {
      console.warn('로그인이 필요합니다')
      return
    }

    const userId =
      userInfo.memberType === 'JUNIOR' ? userInfo.juniorId : userInfo.seniorId

    if (userId == null) return

    likePostMutate({
      letterId,
      userId,
      memberType: userInfo.memberType,
    })
  }

  console.log('게시글 상세 내용:', postDetail)

  return (
    <div>
      <div className="flex flex-col gap-4">
        <Topbar icons={TOPBAR_ICONS} />
      </div>

      <main className="flex h-auto min-h-main flex-col bg-white">
        <section className="px-5 pb-5 pt-10">
          <PostHeader
            user={{
              nickname: postDetail?.juniorDetailDto.name ?? '-',
              age: postDetail?.juniorDetailDto.age,
              profile:
                postDetail?.juniorDetailDto.image ??
                '/images/coffee-bean-image.png',
            }}
            date={postDetail?.createdAt ?? ''}
            likeCount={postDetail?.heart ?? 0}
            commentCount={postDetail?.totalComments ?? 0}
          />
          <PostContent
            imageUrl={postDetail?.image}
            category={postDetail?.category}
            title={postDetail?.title ?? '제목이 없습니다'}
            content={postDetail?.content ?? '본문이 없습니다'}
          />
          {postDetail?.answerResponseDto && (
            <PostAnswer
              user={postDetail?.answerResponseDto.seniorDetailDto}
              date={postDetail?.answerResponseDto.createdAt}
              content={postDetail?.answerResponseDto.content}
            />
          )}
          <div className="mt-4 flex justify-center">
            <button
              onClick={handleClickLikeButton}
              className="flex items-center gap-1 rounded-10 bg-secondary-brown-4 px-4 py-2 text-secondary-brown-1"
            >
              <img
                src={`${postDetail?.liked ? '/icons/fill-heart-icon.svg' : '/icons/empty-heart-icon.svg'}`}
              />
              <span className="b6">공감해요</span>
            </button>
          </div>
        </section>

        <hr className="h-[0.3rem] w-full border-0 bg-gray-300" />

        <CommentListContainer comments={postDetail?.commentResponseDto ?? []} />
      </main>
    </div>
  )
}
