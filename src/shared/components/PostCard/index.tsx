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
      className={`${showShadow ? 'shadow' : ''} relative flex w-full cursor-pointer flex-col items-center gap-4 rounded-xl bg-white p-5`}
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
        {showMeta && (
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
        )}
      </div>
    </article>
  )
}
