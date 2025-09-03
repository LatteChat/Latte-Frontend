import Image from 'next/image'
import PostTag from '../PostTag'
import { Category } from '@/shared/types/Category'
import { AnswerStatus } from '@/shared/types/AnswerStatus'
import { formatDate } from '@/shared/utils/formatDate'

const LETTER_STATUS_LABEL: Record<AnswerStatus, string> = {
  WRITING: '저장됨',
  SENT: '답변 대기 중',
  WAITING: '답변 대기 중',
  SAVED: '저장됨',
  ANSWERED: '답변 완료',
  ADOPTED: '채택 완료',
  MATCHED: '답변 완료',
  EMPTY: '대기 중',
}

type Post = {
  tag: Category
  title: string
  content: string
  image: string | null
  date: string
  likeCount: number
  commentCount: number
  answerStatus?: AnswerStatus
  letterStatus?:
    | 'WRITING'
    | 'SENT'
    | 'ANSWERED'
    | 'ADOPTED'
    | 'MATCHED'
    | 'EMPTY'
}

type PostCardProps = {
  post: Post
  showStatus?: boolean
  showShadow?: boolean
  showMeta?: boolean
}

export default function PostCard({
  post: {
    tag,
    title,
    content,
    date,
    likeCount,
    image,
    commentCount,
    answerStatus,
    letterStatus,
  },
  showStatus,
  showShadow,
  showMeta,
}: PostCardProps) {
  return (
    <article
      className={`${showShadow ? 'shadow' : ''} relative flex w-full cursor-pointer flex-col items-center gap-4 rounded-10 bg-white p-5 shadow-border`}
    >
      {(letterStatus || answerStatus) && showStatus && (
        <span className="b6 absolute -top-4 left-4 rounded-full bg-gray-3 px-2 py-1 text-black">
          {LETTER_STATUS_LABEL[(answerStatus ? answerStatus : letterStatus)!]}
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
          src={image ?? '/images/coffee-bean-image.png'}
          className="h-24 w-24 flex-shrink-0 rounded-10 bg-primary shadow-border"
          width={95}
          height={95}
          alt="게시글 이미지"
        />
      </div>

      <div className="flex w-full items-center justify-between gap-2 text-gray-5">
        <span className="b9">{formatDate(date)}</span>
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
