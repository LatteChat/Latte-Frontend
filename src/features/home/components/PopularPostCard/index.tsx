import Image from 'next/image'
import Link from 'next/link'
import HeartIcon from '@/shared/assets/icons/heart-icon.svg'

type PopularPostCardProps = {
  post: {
    id: number
    rank: number
    title: string
    content: string
    isLike: boolean
    writer: string
    imageUrl: string
  }
}

export default function PopularPostCard({
  post: { id, rank, title, content, isLike, writer, imageUrl },
}: PopularPostCardProps) {
  const handleClickLikeButton = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation()
    e.preventDefault()
  }

  return (
    <Link href={`/latte-chat/posts/${id}`}>
      <div className="shadow-border flex w-full flex-shrink-0 items-center gap-4 rounded-10 bg-white px-5 py-5">
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="b7 bg-secondary-brown-4 flex h-4 items-center justify-center whitespace-nowrap rounded-[1.25rem] px-[0.625rem] text-white">
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
            <p className="b6 text-gray-5 line-clamp-3 break-all">{content}</p>
          </div>

          <div className="flex justify-start">
            <span className="b9 text-gray-5">{writer}</span>
          </div>
        </div>

        <Image
          src={imageUrl}
          alt="게시글 이미지"
          width={115}
          height={115}
          className="shadow-border aspect-square h-[7.2rem] w-[7.2rem] object-cover"
        />
      </div>
    </Link>
  )
}
