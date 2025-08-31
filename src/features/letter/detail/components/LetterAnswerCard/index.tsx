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
}: {
  answer: {
    user: Member
    content: string
    createdAt: string
  }
}) {
  return (
    <section className="bg-secondary-brown-1 border-secondary-brown-2 mt-5 flex flex-col gap-4 rounded-10 border p-5">
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
                className="b9 border-secondary-brown-2 rounded border bg-white px-2 py-0.5 text-black"
              >
                #{tag}
              </span>
            )
          })}
        </div>
      </div>

      <p className="b4 text-gray-7">{content}</p>

      <time className="b9 text-gray-5 self-end">{createdAt}</time>
    </section>
  )
}
