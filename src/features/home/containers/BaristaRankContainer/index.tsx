export default function BaristaRankContainer() {
  return (
    <section className="flex items-center gap-4 px-5">
      <div className="bg-secondary-brown-4 flex h-[7.4rem] w-[8.7rem] shrink-0 flex-col items-start gap-1 rounded-10 p-4">
        <h1 className="b2 text-secondary-brown-1">이달의 바리스타</h1>
        <span className="b9 text-gray-2">* 채택 수 기준</span>
      </div>

      <div className="flex h-full flex-1 items-end justify-center gap-2">
        <ul className="flex w-full flex-col gap-2">
          {new Array(3).fill(0).map((x, index) => {
            return (
              <li className="shadow-border flex items-center gap-2 rounded-10 bg-white px-5 py-1">
                <span className="h3 w-5 text-black">0{index + 1}</span>
                <span className="bg-gray-5 inline-block aspect-square h-7 w-7"></span>
                <span className="b7 text-gray-5">고양이가제일좋아</span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
