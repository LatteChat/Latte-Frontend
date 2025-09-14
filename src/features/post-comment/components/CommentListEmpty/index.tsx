export default function CommentListEmpty() {
  return (
    <div className="flex items-center justify-center gap-1 py-10 text-center">
      <img
        src="/images/glass-empty-image.png"
        className="aspect-square h-10 w-10 opacity-50"
      />
      <p className="b6 text-gray-6">
        작성된 댓글이 없습니다.
        <br />첫 댓글을 남겨주세요.
      </p>
    </div>
  )
}
