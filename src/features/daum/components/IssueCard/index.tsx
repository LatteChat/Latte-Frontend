export default function IssueCard() {
  return (
    <section className="rounded-[1.25rem] bg-white p-5">
      <header className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-[1px]">
          <h2 className="b2">이슈를 말하다</h2>
          <img src="/icons/right-arrow-icon.svg" />
        </div>
        <div className="flex gap-1">
          <span className="b6">세이프봇 작동 중</span>
          <img
            src="/icons/info-icon.svg"
            alt="정보 아이콘"
            className="aspect-square h-[1.125rem] w-[1.125rem]"
          />
        </div>
      </header>

      <div className="flex flex-col gap-2 border-t border-gray-200 pt-4">
        <p className="b6 text-gray-500">
          <span className="text-black">머니투데이</span>에서 토론을 제안합니다 ·
          26,275명 투표
        </p>

        <h3 className="h3 text-gray-900">
          중학생 자녀의 소비쿠폰 소유권 주장, 어떻게 해야 할까?
        </h3>
        <p className="b4 text-gray-600">
          소비쿠폰을 둘러싼 부모 자식간의 소유권 분쟁이 일어나고 있습니다.
          당신의 생각은?
        </p>
      </div>
      <div className="mt-4 space-y-2">
        <label className="b4 flex items-center justify-between rounded-full bg-gray-200 px-4 py-3 text-gray-900">
          <span>자녀에게 줘야 한다</span>
          <input type="radio" name="vote" className="h-4 w-4 accent-black" />
        </label>
        <label className="b4 flex items-center justify-between rounded-full bg-gray-200 px-4 py-3 text-gray-900">
          <span>안 줘도 된다</span>
          <input type="radio" name="vote" className="h-4 w-4 accent-black" />
        </label>
      </div>
      <div className="mt-4 flex gap-2">
        <button className="b4 flex-1 rounded-full bg-black py-3 text-white">
          투표하기
        </button>
        <button className="b4 flex-1 rounded-full bg-gray-100 py-3 text-gray-900">
          결과보기
        </button>
      </div>
    </section>
  )
}
