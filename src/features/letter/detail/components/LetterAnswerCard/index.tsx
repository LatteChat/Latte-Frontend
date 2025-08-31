import { AgeType } from '@/features/user/types/User'
import UserProfile from '@/shared/components/UserProfile'

export type Member = {
  name: string
  image: string
  tag: string[]
  age: AgeType
}

export default function LetterAnswerCard({
  answer: { user, content, createdAt },
  adopted,
}: {
  answer: {
    user: Member
    content: string
    createdAt: string
  }
  adopted?: boolean
}) {
  return (
    <section className="relative flex flex-col gap-4 rounded-10 border border-secondary-brown-2 bg-secondary-brown-1 p-5">
      {adopted && (
        <span className="b10 absolute left-5 top-5 rounded-10 bg-secondary-brown-2 px-2 py-1 text-white">
          채택한 답변
        </span>
      )}
      <div className="flex flex-col items-center">
        <div className="mb-2.5 ml-1 flex aspect-square h-10 w-10">
          <UserProfile profile="/images/coffee-bean-image.png" />
        </div>
        <span className="b7 mb-1">{user.name}</span>
        <div className="flex flex-wrap justify-center gap-1">
          {user.tag.map((tag, index) => {
            return (
              <span
                key={index}
                className="b9 rounded border border-secondary-brown-2 bg-white px-2 py-0.5 text-black"
              >
                #{tag}
              </span>
            )
          })}
        </div>
      </div>

      <p className="b4 text-gray-7">{content}</p>

      <time className="b9 self-end text-gray-5">{createdAt}</time>
    </section>
  )
}
