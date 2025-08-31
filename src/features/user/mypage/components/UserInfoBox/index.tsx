import { AgeType } from '@/features/user/types/User'
import UserProfile from '@/shared/components/UserProfile'

export default function UserInfoBox({
  name,
  image,
  tags,
  age,
  type,
}: {
  name?: string
  image?: string
  tags?: string[]
  age?: AgeType
  type?: 'JUNIOR' | 'SENIOR'
}) {
  return (
    <section className="flex flex-col items-center pb-4 pt-2">
      <div className="flex aspect-square h-[5.4rem] w-[5.4rem] items-center">
        <UserProfile
          profile={image ?? '/images/coffee-bean-image.png'}
          age={age}
        />
      </div>
      <div className="mb-2 mt-2 flex flex-col items-center gap-1">
        <span className="b1">{name ?? '닉네임을 찾을 수 없습니다'}</span>
        {type && type === 'SENIOR' && (
          <div className="b10 flex gap-1.5 pb-3 text-gray-6">
            <span>채택 수</span>
            <span>45</span>
          </div>
        )}
      </div>
      <div className="flex gap-2">
        {tags?.map((tag, index) => {
          return (
            <span
              key={index}
              className="b6 rounded border border-secondary-brown-2 bg-white px-2 py-1 text-black"
            >
              #{tag}
            </span>
          )
        })}
      </div>
    </section>
  )
}
