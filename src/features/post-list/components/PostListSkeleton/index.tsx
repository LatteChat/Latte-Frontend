export default function PostListSkeleton() {
  return (
    <div className="flex flex-col gap-3.5">
      {new Array(4).fill(0).map((_, index) => {
        return (
          <div
            key={index}
            className="animate-shimmer bg-skeleton h-40 w-full rounded-10 bg-[length:skeleton]"
          ></div>
        )
      })}
    </div>
  )
}
