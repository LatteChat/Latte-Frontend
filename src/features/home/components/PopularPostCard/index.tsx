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
      <div className="flex w-full flex-shrink-0 cursor-pointer gap-4 rounded-[0.625rem] bg-white px-5 py-5">
        <Image
          src={imageUrl}
          alt="게시글 이미지"
          width={150}
          height={150}
          className="h-[9.4rem] w-[9.4rem] rounded-lg object-cover"
        />

        <div className="flex flex-1 flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="b7 flex h-4 items-center justify-center whitespace-nowrap rounded-[1.25rem] bg-gray-200 px-[0.625rem]">
              {rank}위
            </span>
            <HeartIcon
              onClick={handleClickLikeButton}
              color={isLike ? '#ED1C24' : '#D9D9D9'}
              className="h-6 w-6"
            />
          </div>

          <div className="flex flex-col gap-1">
            <h2 className="h4 line-clamp-1 w-full">{title}</h2>
            <p className="b4 line-clamp-3">{content}</p>
          </div>

          <div>
            <span className="b9 text-gray-400">{writer}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
