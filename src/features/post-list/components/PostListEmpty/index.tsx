export default function PostListEmpty() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 pb-20">
      <img
        src="/images/glass-empty-image.png"
        className="aspect-square h-16 w-16"
      />
      <p className="b4">등록된 게시물이 없습니다.</p>
    </div>
  )
}
