import UserProfile from '@/shared/components/UserProfile'
import { formatDateDefault } from '@/shared/utils/formatDate'

type AgeType =
  | 'UNDER_10'
  | 'TWENTIES'
  | 'THIRTIES'
  | 'FORTIES'
  | 'FIFTIES'
  | 'SIXTIES_AND_ABOVE'

type PostAnswerProps = {
  user?: {
    seniorId: number
    name: string
    image: string | null
    tag: string[] | null
    age: AgeType
  }
  date: string
  content: string
}

export default function PostAnswer({ user, date, content }: PostAnswerProps) {
  return (
    <section className="flex w-full flex-col gap-4 rounded-10 border border-primary bg-secondary-brown-1 p-5 shadow-border">
      <h5 className="b6">답변</h5>

      <div className="flex flex-col gap-2">
        <div>
          <div className="flex items-center gap-1.5">
            <div className="relative flex h-10 w-10">
              <UserProfile
                profile={user?.image ?? '/images/coffee-bean-image.png'}
                age={user?.age}
                isView={true}
                seniorId={user?.seniorId}
              />
            </div>

            <div className="flex w-full flex-col gap-1">
              <div className="flex flex-wrap justify-between">
                <span className="b7 text-black">{user?.name}</span>
                <span className="b9 text-gray-4">
                  {formatDateDefault(date)}
                </span>
              </div>
              <div className="flex flex-wrap gap-1">
                {user?.tag?.map((tag, index) => {
                  return (
                    <span
                      key={index}
                      className="b9 flex items-center justify-center whitespace-nowrap rounded border border-secondary-brown-2 bg-white px-2 text-black"
                    >
                      {`#${tag}`}
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <p className="b4 text-gray-7">{content}</p>
      </div>
    </section>
  )
}
