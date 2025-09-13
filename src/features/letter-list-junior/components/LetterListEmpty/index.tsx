export default function LetterListEmpty() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 pb-20">
      <img
        src="/images/glass-empty-image.png"
        className="aspect-square h-16 w-16"
      />
      <p className="b4 text-center">
        등록된 사연이 없습니다.
        <br />
        사연을 작성해보세요.
      </p>
    </div>
  )
}
