import { AgeType } from '@/features/user/types/User'
import UserProfile from '@/shared/components/UserProfile'

export default function UserInfoBox({
  name,
  image,
  tags,
  age,
}: {
  name?: string
  image?: string
  tags?: string[]
  age?: AgeType
}) {
  return (
    <section className="relative flex flex-col items-center pb-4 pt-2">
      <button className="b6 bg-secondary-red absolute right-0 top-0 rounded-xl px-2 py-1 text-white">
        인증
      </button>
      <div className="flex aspect-square h-[5.4rem] w-[5.4rem] items-center">
        <UserProfile
          profile={image ?? '/images/coffee-bean-image.png'}
          age={age}
        />
      </div>
      <span className="b1 mb-3 mt-2">
        {name ?? '닉네임을 찾을 수 없습니다'}
      </span>
      <div className="flex gap-2">
        {tags &&
          tags.map((tag, index) => {
            return (
              <span
                key={index}
                className="b6 border-secondary-brown-2 rounded border bg-white px-2 py-1 text-black"
              >
                #{tag}
              </span>
            )
          })}
      </div>
    </section>
  )
}
