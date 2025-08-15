import UserProfile from '@/shared/components/UserProfile'

type PostAnswerProps = {
  user: {
    nickname: string
    profile: string
    tags: string[]
  }
  date: string
  content: string
}

export default function PostAnswer({ user, date, content }: PostAnswerProps) {
  return (
    <section className="flex w-full flex-col gap-4 bg-gray-200 p-5">
      <h5 className="b6">답변</h5>

      <div className="flex flex-col gap-2">
        <div>
          <div className="flex items-center gap-[0.375rem]">
            <div className="relative aspect-square h-[2.375rem] w-[2.375rem]">
              <UserProfile profile="/images/test-image.png" />
            </div>

            <div className="flex w-full flex-col gap-1">
              <div className="flex flex-wrap justify-between">
                <span className="b7">{user?.nickname}</span>
                <span className="b9 text-gray-400">{date}</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {user.tags.map((tag, index) => {
                  return (
                    <span
                      key={index}
                      className="b9 flex items-center justify-center whitespace-nowrap rounded bg-white px-2"
                    >
                      {`#${tag}`}
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <p className="b4 text-gray-500">{content}</p>
      </div>
    </section>
  )
}
