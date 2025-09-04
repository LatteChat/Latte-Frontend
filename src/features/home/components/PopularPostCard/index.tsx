import Image from 'next/image'
import Link from 'next/link'
import HeartIcon from '@/shared/assets/icons/heart-icon.svg'
import useLikePostQuery from '@/features/post/hooks/useLikePostQuery'
import { useUserInfo } from '@/shared/hooks/useUserInfo'

type PopularPostCardProps = {
  post: {
    letterId: number
    title: string
    content: string
    imageUrl: string
    isLike: boolean
  }
  user: {
    name: string
  }
  rank: number
}

export default function PopularPostCard({
  post: { letterId, title, content, imageUrl, isLike },
  user: { name },
  rank,
}: PopularPostCardProps) {
  const { data: userInfo } = useUserInfo()
  const { mutate: likePostMutate } = useLikePostQuery({
    letterId,
  })

  const handleClickLikeButton = (e: React.MouseEvent<SVGSVGElement>) => {
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

  return (
    <Link href={`/latte-chat/posts/${letterId}`}>
      <div className="flex w-full flex-shrink-0 items-center gap-4 rounded-10 bg-white px-5 py-5 shadow-border">
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="b7 flex h-4 items-center justify-center whitespace-nowrap rounded-[1.25rem] bg-secondary-brown-4 px-[0.625rem] text-white">
              {rank}위
            </span>
            <HeartIcon
              onClick={handleClickLikeButton}
              color={isLike ? '#ED1C24' : '#D9D9D9'}
              className="h-6 w-6"
            />
          </div>

          <div className="flex flex-col gap-1">
            <h2 className="h4 line-clamp-1 w-full text-black">{title}</h2>
            <p className="b6 line-clamp-3 h-[3.2rem] break-all text-gray-5">
              {content}
            </p>
          </div>

          <div className="flex justify-start">
            <span className="b9 text-gray-5">{name}</span>
          </div>
        </div>

        <img
          src={imageUrl}
          alt="게시글 이미지"
          width={115}
          height={115}
          className="aspect-square h-[7.2rem] w-[7.2rem] object-cover shadow-border"
        />
      </div>
    </Link>
  )
}
