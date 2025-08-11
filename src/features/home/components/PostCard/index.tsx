import Image from 'next/image'
import PostTag from '../PostTag'

type PostCardProps = {
  post: {
    tags?: string[]
    title: string
    content: string
    date: string
    likeCount: number
    commentCount: number
  }
}

export default function PostCard({
  post: { tags = [], title, content, date, likeCount, commentCount },
}: PostCardProps) {
  const displayTags = tags.length > 3 ? tags.slice(0, 3) : tags

  return (
    <div className="flex w-full cursor-pointer flex-col items-center gap-4 rounded-xl bg-white p-5 shadow-sm">
      <div className="flex w-full gap-5">
        <div className="flex w-full flex-col gap-2">
          <div className="flex gap-2">
            {displayTags.map((tag) => {
              return <PostTag key={tag} tag={tag} />
            })}
            {tags.length > 3 && (
              <span className="b9 flex select-none items-center justify-center gap-1 rounded-[0.25rem] bg-gray-200 px-[0.28rem] py-[0.125rem] text-gray-400">
                {new Array(3).fill(0).map((_, index) => {
                  return (
                    <span
                      key={index}
                      className="inline-block h-[0.125rem] w-[0.125rem] bg-gray-400"
                    ></span>
                  )
                })}
              </span>
            )}
          </div>

          <div className="flex w-full flex-col gap-1">
            <h2 className="h4">{title}</h2>
            <p className="b4 line-clamp-2 w-full flex-1 text-gray-800">
              {content}
            </p>
          </div>
        </div>

        <Image
          src="/images/test-image.png"
          className="h-24 w-24 flex-shrink-0 rounded-lg bg-gray-300"
          width={96}
          height={96}
          alt="게시글 이미지"
        />
      </div>

      <div className="flex w-full items-center justify-between gap-2 text-gray-400">
        <span className="b9">{date}</span>
        <div className="flex gap-2">
          <div className="flex items-center gap-[1px]">
            <img
              src="/icons/empty-heart-icon.svg"
              className="aspect-square h-[0.875rem] w-[0.875rem]"
              alt="좋아요 아이콘"
            />
            <span className="b9">{likeCount}</span>
          </div>
          <div className="flex items-center gap-[1px]">
            <img
              src="/icons/comment-icon.svg"
              className="aspect-square h-3 w-3"
              alt="댓글 아이콘"
            />
            <span className="b9">{commentCount}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
