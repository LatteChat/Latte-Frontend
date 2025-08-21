export default function PostTag({ tag }: { tag: string }) {
  return (
    <span className="b9 bg-secondary-brown-2 flex select-none items-center justify-center rounded-[0.25rem] px-[0.28rem] py-[0.125rem] text-white">
      {tag}
    </span>
  )
}
