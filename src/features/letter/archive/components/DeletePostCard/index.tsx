import Image from 'next/image'
import { Category } from '@/shared/types/Category'
import { AnswerStatus } from '@/shared/types/AnswerStatus'
import { formatDate } from '@/shared/utils/formatDate'
import PostTag from '@/shared/components/PostTag'
import Checkbox from '@/features/user/onboarding/components/Checkbox'

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
  letterId: number
  tag: Category
  title: string
  content: string
  image: string | null
  date: string | 'EMPTY'
}

type PostCardProps = {
  post: Post
  isSelected: boolean
  onSelect: (letterId: number) => void
}

export default function DeletePostCard({
  post: { letterId, tag, title, content, date, image },
  isSelected,
  onSelect,
}: PostCardProps) {
  return (
    <article
      onClick={() => onSelect(letterId)}
      className={`${isSelected ? 'border-secondary-brown-2 bg-secondary-brown-1' : 'border-transparent bg-white'} relative flex w-full cursor-pointer items-start gap-2 rounded-10 border-[2px] p-5 shadow-border`}
    >
      <div>
        <Checkbox isCheck={isSelected} label={''} showRequired={false} />
      </div>

      <div className="flex flex-1 flex-col">
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

          <img
            src={image ?? '/images/coffee-bean-image.png'}
            className="bg-se h-24 w-24 flex-shrink-0 rounded-10 shadow-border"
            width={95}
            height={95}
            alt="게시글 이미지"
          />
        </div>

        <div className="flex w-full items-center justify-between gap-2 text-gray-5">
          <span className="b9">{formatDate(date)}</span>
        </div>
      </div>
    </article>
  )
}
