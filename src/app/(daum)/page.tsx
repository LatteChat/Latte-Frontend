import Image from 'next/image'

const HEADER_OPTIONS = [
  {
    iconUrl: '/icons/didi-icon.svg',
    value: 'didi',
    name: '디디',
  },
  {
    iconUrl: '/icons/point-icon.svg',
    value: 'point',
    name: '포인트',
  },
  {
    iconUrl: '/icons/alarm-icon.svg',
    value: 'alarm',
    name: '알람',
  },
]

export default function Home() {
  return (
    <div className="h-auto min-h-main bg-gray-100">
      <nav className="flex h-14 items-center justify-between bg-white px-5">
        <button>
          <img
            src="/icons/menu-icon.svg"
            className="aspect-square w-6 min-w-2"
            alt="메뉴 아이콘"
          />
        </button>
        <ul className="flex items-center gap-4">
          {HEADER_OPTIONS.map((option) => {
            return (
              <li key={option.value} className="flex items-center">
                <button>
                  <img
                    src={option.iconUrl}
                    className="aspect-square w-6 min-w-2"
                    alt={option.name + ' 아이콘'}
                  />
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      <section className="px-5 pb-14">
        <div className="mb-5 flex justify-between px-4 pb-1 pt-6">
          <div>
            <span className="text-sm text-gray-300">8월4일 월요일</span>
            <h1 className="whitespace-pre-line text-xl text-gray-500">{`지금 알아야 할\n오후 주요 이슈`}</h1>
          </div>
          <Image
            src="/images/daum-home-search.svg"
            alt="홈 배너 이미지"
            width={93}
            height={75}
          />
        </div>

        <div className="mb-3 flex w-full items-center rounded-3xl bg-white px-5">
          <img
            src="/icons/daum-fill-icon.svg"
            className="aspect-square h-6 w-6 shrink-0"
            alt="다음 아이콘"
          />
          <input className="min-w-0 flex-1 px-2 py-4 outline-none" />
          <img
            src="/icons/flower-icon.svg"
            className="aspect-square h-6 w-6 shrink-0"
            alt="꽃 아이콘"
          />
        </div>

        <div className="flex items-center">
          <span className="flex aspect-square h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-sm text-gray-500">
            AI
          </span>
          <span className="flex-1 px-2 text-sm text-gray-500">
            손흥민 경기와 이수지 패러디
          </span>
          <span className="text-sm text-gray-500">▼</span>
        </div>
      </section>

      <section className="mb-3 flex h-28 items-center justify-center bg-gray-300">
        라떼챗 홍보 배너
      </section>

      <div className="px-5">
        <section className="x- mb-3 flex w-full gap-6 overflow-hidden">
          {new Array(3).fill(0).map((_, index) => {
            return (
              <div
                key={index}
                className="h-24 w-[7.3rem] flex-shrink-0 rounded-[1.25rem] bg-gray-300"
              ></div>
            )
          })}
        </section>

        <section className="h-24 w-full rounded-[1.25rem] bg-gray-300"></section>
      </div>
    </div>
  )
}
