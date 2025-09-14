'use client'

export default function LetterCardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      {/* 썸네일 */}
      <div className="mb-3 h-40 w-full rounded-lg bg-gray-200" />

      {/* 태그 */}
      <div className="mb-2 h-4 w-16 rounded bg-gray-200" />

      {/* 제목 */}
      <div className="mb-2 h-5 w-3/4 rounded bg-gray-200" />

      {/* 내용 */}
      <div className="mb-1 h-4 w-full rounded bg-gray-200" />
      <div className="h-4 w-2/3 rounded bg-gray-200" />

      {/* 하단 정보 */}
      <div className="mt-3 flex gap-3">
        <div className="h-4 w-10 rounded bg-gray-200" />
        <div className="h-4 w-10 rounded bg-gray-200" />
      </div>
    </div>
  )
}
