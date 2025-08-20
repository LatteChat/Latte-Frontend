import Image from 'next/image'
import PostTag from '../PostTag'

type LetterStatus = 'ANSWERED' | 'ACCEPTED' | 'SAVED' | 'PENDING'

const LETTER_STATUS_LABEL: Record<LetterStatus, string> = {
  ANSWERED: '답변 완료',
  ACCEPTED: '채택 완료',
  SAVED: '저장됨',
  PENDING: '답변 대기 중',
}

type Post = {
  tag: string
  title: string
  content: string
  date: string
  likeCount: number
  commentCount: number
  status?: LetterStatus
}

type PostCardProps = {
  post: Post
  showStatus?: boolean
  showShadow?: boolean
  showMeta?: boolean
}

export default function PostCard({
  post: { tag, title, content, date, likeCount, commentCount, status },
  showStatus,
  showShadow,
  showMeta,
}: PostCardProps) {
  return (
    <article
      className={`${showShadow ? 'shadow' : ''} shadow-border relative flex w-full cursor-pointer flex-col items-center gap-4 rounded-10 bg-white p-5`}
    >
      {status && showStatus && (
        <span className="b6 absolute -top-4 left-4 rounded-full bg-gray-300 px-2 py-1">
          {LETTER_STATUS_LABEL[status]}
        </span>
      )}

      <div className="flex w-full gap-5">
        <div className="flex w-full flex-col gap-2">
          <div className="flex gap-2">
            <PostTag tag={tag} />
          </div>

          <div className="flex w-full flex-col gap-1">
            <h2 className="h4 text-black">{title}</h2>
            <p className="b4 line-clamp-2 w-full flex-1 text-black">
              {content}
            </p>
          </div>
        </div>

        <Image
          src="/images/test-image.png"
          className="shadow-border h-24 w-24 flex-shrink-0 rounded-10 bg-gray-300"
          width={95}
          height={95}
          alt="게시글 이미지"
        />
      </div>

      <div className="text-gray-5 flex w-full items-center justify-between gap-2">
        <span className="b9">{date}</span>
        {showMeta && (
          <div className="flex gap-2">
            <div className="flex items-center gap-[1px]">
              <img
                src="/icons/empty-heart-icon.svg"
                className="w-3.5h-3.5 aspect-square h-3.5"
                alt="좋아요 아이콘"
              />
              <span className="b9">{likeCount}</span>
            </div>
            <div className="flex items-center gap-[2px]">
              <img
                src="/icons/comment-icon.svg"
                className="aspect-square h-3 w-3"
                alt="댓글 아이콘"
              />
              <span className="b9">{commentCount}</span>
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
