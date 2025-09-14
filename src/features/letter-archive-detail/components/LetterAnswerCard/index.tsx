import { AgeType } from '@/features/user/types/User'
import UserProfile from '@/shared/components/UserProfile'
import { formatDateDefault } from '@/shared/utils/formatDate'

export type Member = {
  name: string
  image: string
  tag: string[]
  age: AgeType
}

export default function LetterAnswerCard({
  answer: { user, content, createdAt },
  isAdoptedLetter = false,
  adopted,
}: {
  answer: {
    user: Member
    content: string
    createdAt: string
  }
  isAdoptedLetter?: boolean
  adopted?: boolean
}) {
  return (
    <section className="relative flex h-full flex-1 flex-col gap-4 rounded-10 border border-secondary-brown-2 bg-secondary-brown-1 p-5">
      {isAdoptedLetter && (
        <span
          className={`b10 self-start rounded-10 ${adopted ? 'bg-secondary-brown-2' : 'bg-gray-5'} px-2 py-1 text-white`}
        >
          {adopted ? '답변이 채택되었어요.' : '아쉽지만, 채택이 되지 않았어요.'}
        </span>
      )}
      <div className="flex flex-col items-center">
        <div className="mb-2.5 ml-1 flex aspect-square h-10 w-10">
          <UserProfile profile={user.image} age={user.age} />
        </div>
        <span className="b7 mb-1">{user.name}</span>
        <div className="flex flex-wrap justify-center gap-1">
          {(user.tag ?? []).map((tag, index) => {
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

      <p className="b4 flex-grow whitespace-pre-line text-gray-7">{content}</p>

      <time className="b9 self-end text-gray-5">
        {formatDateDefault(createdAt)}
      </time>
    </section>
  )
}
