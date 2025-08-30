export default function SeniorLetterContentCardListContainer() {
  return (
    <div className="flex flex-col gap-8">
      {new Array(5).fill(0).map((x) => {
        return (
          <section className="relative rounded-xl bg-latte-gradient-3 p-[4px]">
            <div className="border-gradient relative flex flex-col items-start gap-2 rounded-10 bg-white p-4 shadow-border">
              <div className="absolute -top-4 right-5 rounded-10 bg-white px-2 py-1 shadow-border">
                <span className="b6 text-black">300콩</span>
              </div>
              <div className="flex gap-2">
                <span className="b9 rounded border-transparent bg-secondary-brown-2 px-1.5 py-0.5 text-white">
                  취업 및 회사
                </span>
                <span className="b9 rounded border border-primary bg-white px-1.5 py-0.5 text-secondary-brown-2">
                  현실적인
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <h1 className="h4">
                    IT 디자이너 취업 시장, 요즘은 어떤가요?
                  </h1>
                  <p className="b4 line-clamp-2">
                    요즘 취업 준비를 하면서 정말 많이 드는 고민이에요. 특히
                    UX/UI 디자이너나 프로덕트 디자이너 쪽을 준비하는 입장에서,
                  </p>
                </div>
                <span className="b9 text-gray-5">나도취업할래</span>
              </div>
              <div className="flex w-full gap-4">
                <button className="b4 flex-1 rounded-10 bg-gray-3 py-2 text-black">
                  사연 보기
                </button>
                <button className="b4 flex-1 rounded-10 bg-secondary-brown-2 py-2 text-white">
                  선택하기 (1/5)
                </button>
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}
