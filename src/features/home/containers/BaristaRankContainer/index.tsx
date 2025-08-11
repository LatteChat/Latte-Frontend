export default function BaristaRankContainer() {
  return (
    <section className="flex flex-col items-start justify-center gap-4 px-5">
      <header className="flex items-center gap-2">
        <h1 className="h3">이달의 바리스타</h1>
        <span className="text-[0.625rem] text-gray-500">* 채택 수 기준</span>
      </header>

      <main className="flex w-full items-end justify-center gap-2 pt-9">
        {/* 2등 */}
        <div className="relative flex h-[3.8rem] flex-1 flex-col items-center rounded-md bg-gray-300">
          <div className="absolute -top-9 h-12 w-12 rounded-full bg-white"></div>
          <span className="mb-1 mt-auto text-2xl text-gray-500">2</span>
        </div>

        {/* 1등 */}
        <div className="relative flex h-[5.3rem] flex-1 flex-col items-center rounded-md bg-gray-300">
          <div className="absolute -top-9 h-12 w-12 rounded-full bg-white"></div>
          <span className="mb-1 mt-auto text-2xl text-gray-500">1</span>
        </div>

        {/* 3등 */}
        <div className="relative flex h-[3.5rem] flex-1 flex-col items-center rounded-md bg-gray-300">
          <div className="absolute -top-9 h-12 w-12 rounded-full bg-white"></div>
          <span className="mb-1 mt-auto text-2xl text-gray-500">3</span>
        </div>
      </main>
    </section>
  )
}
