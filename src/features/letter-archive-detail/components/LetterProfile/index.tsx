import { AgeType } from '@/features/user/types/User'
import UserProfile from '@/shared/components/UserProfile'

export default function LetterProfile({
  user,
  daysLeft,
}: {
  user: {
    profile?: string
    nickname: string
    age: AgeType
  }
  daysLeft: string
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="mb-5 flex items-center gap-1.5">
        <div className="flex aspect-square h-9 w-9">
          <UserProfile
            profile={user.profile ?? '/images/coffee-bean-image.png'}
            age={user.age}
          />
        </div>
        <span className="b5">{user.nickname ?? ''}</span>
      </div>
      <span className="b10 text-gray-5">유효기간: {daysLeft}일</span>
    </div>
  )
}
