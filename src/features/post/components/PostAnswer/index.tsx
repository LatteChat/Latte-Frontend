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
    <section className="bg-secondary-brown-1 border-primary shadow-border flex w-full flex-col gap-4 rounded-10 border p-5">
      <h5 className="b6">답변</h5>

      <div className="flex flex-col gap-2">
        <div>
          <div className="flex items-center gap-1.5">
            <div className="relative flex h-10 w-10">
              <UserProfile profile="/images/test-image.png" />
            </div>

            <div className="flex w-full flex-col gap-1">
              <div className="flex flex-wrap justify-between">
                <span className="b7 text-black">{user?.nickname}</span>
                <span className="b9 text-gray-4">{date}</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {user.tags.map((tag, index) => {
                  return (
                    <span
                      key={index}
                      className="b9 border-secondary-brown-2 flex items-center justify-center whitespace-nowrap rounded border bg-white px-2 text-black"
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
