export default function StepTitle({
  title,
  intro,
  activeIndex,
}: {
  title: string
  intro?: string
  activeIndex: number
}) {
  return (
    <div className="flex flex-col items-start gap-8">
      <div className="flex w-full gap-3">
        {new Array(5).fill(0).map((_, index) => {
          const isActive = index === activeIndex
          return (
            <span
              key={index}
              className={`aspect-square h-2 w-2 shrink-0 rounded-full ${isActive ? 'bg-black' : 'bg-gray-300'}`}
            ></span>
          )
        })}
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="whitespace-pre-line text-2xl font-normal text-black">
          {title}
        </h1>
        {intro && <p className="text-sm font-normal text-gray-400">{intro}</p>}
      </div>
    </div>
  )
}
