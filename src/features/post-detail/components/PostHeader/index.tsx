import UserProfile from '@/shared/components/UserProfile'
import { formatDateDefault } from '@/shared/utils/formatDate'

type AgeType =
  | 'TEENAGER'
  | 'TWENTIES'
  | 'THIRTIES'
  | 'FORTIES'
  | 'FIFTIES'
  | 'SIXTIES'

type PostHeaderProps = {
  user: {
    juniorId: number
    nickname: string
    age?: AgeType
    profile: string
  }
  date: string
  likeCount: number
  commentCount: number
}

export default function PostHeader({
  user: { juniorId, nickname, age, profile },
  date,
  likeCount,
  commentCount,
}: PostHeaderProps) {
  return (
    <header className="flex items-end gap-1">
      <div className="relative flex aspect-square h-11 w-11">
        <UserProfile
          profile={profile ?? '/images/coffee-bean-image.png'}
          age={age}
          isView={true}
          juniorId={juniorId}
        />
      </div>

      <div className="flex w-full flex-col">
        <div className="flex justify-between">
          <span className="b5">{nickname ?? '-'}</span>
          <span className="b10 text-gray-400">{formatDateDefault(date)}</span>
        </div>
        <div className="flex gap-2 text-gray-400">
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
    </header>
  )
}
