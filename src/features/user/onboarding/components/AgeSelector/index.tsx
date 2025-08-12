import Image from 'next/image'

export default function AgeSelector({
  imgUrl,
  role,
  info,
  ages,
}: {
  imgUrl: string
  role: string
  info: React.ReactNode
  ages: string[]
}) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-5">
        <div className="flex shrink-0 flex-col items-center gap-2 rounded-[0.625rem] bg-white px-10 py-5">
          <Image
            src={imgUrl}
            width={85}
            height={85}
            className="aspect-square h-[5.3rem] w-[5.3rem]"
            alt="역할 이미지"
          />
          <span className="h4">{role}</span>
        </div>
        <p className="b4 whitespace-pre-line text-center">{info}</p>
      </div>
      <div className="flex gap-3">
        {ages.map((age, index) => {
          return (
            <button
              key={index}
              className="flex flex-1 items-center justify-center rounded-[0.625rem] border border-transparent bg-white py-[0.875rem]"
            >
              <span className="b1">{age}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
