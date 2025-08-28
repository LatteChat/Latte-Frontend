export default function DateDivider({ dateLabel }: { dateLabel: string }) {
  return (
    <div className="my-5 flex items-center justify-center">
      <hr className="h-[1px] w-full bg-gray-600" />
      <span className="b10 flex flex-1 items-center whitespace-nowrap px-5 text-neutral-600">
        {dateLabel}
      </span>
      <hr className="h-[1px] w-full bg-gray-600" />
    </div>
  )
}
