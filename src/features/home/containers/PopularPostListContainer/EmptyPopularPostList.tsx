export default function EmptyPopularPostList() {
  return (
    <div className="flex h-40 w-full items-center justify-center rounded-2xl bg-white px-5 text-gray-4">
      <p className="whitespace-pre-line text-center">
        {`아직 인기 게시글이 없습니다.\n첫 번째 사연의 주인공이 되어보세요 ✍️`}
      </p>
    </div>
  )
}
