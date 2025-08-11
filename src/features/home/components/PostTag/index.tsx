export default function PostTag({ tag }: { tag: string }) {
  return (
    <span className="b9 flex select-none items-center justify-center rounded-[0.25rem] bg-gray-200 px-[0.28rem] py-[0.125rem] text-gray-400">
      {tag}
    </span>
  )
}
