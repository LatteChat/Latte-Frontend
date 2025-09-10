export default function PremiumBox({ isPremium }: { isPremium: boolean }) {
  return (
    <div className="rounded-10 bg-latte-gradient-3 p-0.5">
      <div className="flex w-full items-center justify-between rounded-lg bg-latte-gradient-4 px-5 pb-4 pt-5">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <span className="h4 text-secondary-brown-4">라떼챗</span>
            <span className="b9 inline-block rounded-full bg-black px-1 py-[2px] text-white">
              프리미엄
            </span>
          </div>
          <p className="b10 text-gray-5">다음 결제 예정일: 2025년 9월 16일</p>
        </div>
        <button className="b10 flex items-center gap-1 rounded-10 bg-gray-2 px-2 py-1 text-black">
          변경하기
          <img
            src="/icons/next-arrow-icon.svg"
            className="aspect-square h-3 w-3"
          />
        </button>
      </div>
    </div>
  )
}
