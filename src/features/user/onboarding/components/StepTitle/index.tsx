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
        {new Array(7).fill(0).map((_, index) => {
          const isActive = index === activeIndex
          return (
            <span
              key={index}
              className={`aspect-square h-2 w-2 shrink-0 rounded-full ${isActive ? 'bg-secondary-brown-4' : 'bg-gray-3'}`}
            ></span>
          )
        })}
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="h1 whitespace-pre-line text-black">{title}</h1>
        {intro && (
          <p className="b4 whitespace-pre-line text-gray-400">{intro}</p>
        )}
      </div>
    </div>
  )
}
