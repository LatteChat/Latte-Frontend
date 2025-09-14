import Image from 'next/image'

const TOPBAR_ICONS = [
  {
    iconUrl: '/icons/alarm-icon.svg',
    alt: '알람',
    href: '',
  },
  {
    iconUrl: '/icons/search-icon.svg',
    alt: '검색',
    href: '',
  },
]

const PRODUCTS = [
  {
    id: 1,
    store: '스타벅스',
    title: '스타벅스 아이스 카페 라떼 T',
    point: 3000,
    imageUrl: '/images/coffee1-image.png',
  },
  {
    id: 2,
    store: '메가MGC커피',
    title: '(ICE)카페라떼',
    point: 1800,
    imageUrl: '/images/coffee2-image.png',
  },
  {
    id: 3,
    store: '투썸플레이스',
    title: '카페라떼 R',
    point: 3000,
    imageUrl: '/images/coffee3-image.png',
  },
  {
    id: 4,
    store: '하삼동커피',
    title: '(ICE)카페라떼',
    point: 1800,
    imageUrl: '/images/coffee4-image.png',
  },
]

export default function StorePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex h-12 items-center justify-center bg-white">
        <h1 className="b2">스토어</h1>
      </div>

      {/* Search & Points */}
      <div className="flex flex-col gap-5 border-gray-200 bg-white px-5 pb-5">
        <div className="flex items-center overflow-hidden rounded-10 bg-gray-1">
          <input
            type="text"
            placeholder="검색어를 입력해주세요."
            className="b12 w-full bg-transparent px-3 py-3 text-sm text-black placeholder-gray-5 outline-none"
          />
          <img
            src="/icons/search-icon.svg"
            className="mr-2 aspect-square h-6 w-6"
          />
        </div>

        <div className="flex items-center gap-2 rounded-10 border-[2px] border-secondary-brown-2 bg-secondary-brown-1 py-3.5 pl-5 pr-4 shadow-sm">
          <img src="/icons/coffee-bean-icon.svg" />
          <div className="flex flex-1 items-center justify-between">
            <span className="b1 text-black">내 원두 포인트</span>
            <span className="h3 text-black">5,000콩</span>
          </div>
          <img src="/icons/right-arrow-icon.svg" />
        </div>
      </div>

      {/* Categories */}
      <div className="mb-5 flex items-center gap-5 overflow-auto rounded-10 bg-secondary-brown-4 px-5 py-5">
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <h4 className="b2 text-white">교환권</h4>
            <img src="/icons/right-arrow-icon.svg" alt="이동하기" />
          </div>
          <p className="b10 whitespace-nowrap text-white">
            원두 포인트를
            <br />
            상품으로 교환해요.
          </p>
          <Image
            src="/images/coffee-beans-image.svg"
            width={67}
            height={67}
            alt="원두콩"
          />
        </div>
        <div className="scrollbar-hide flex gap-3 overflow-auto">
          {['커피', '교촌', 'CU'].map((category) => {
            return (
              <div key={category} className="flex flex-col items-center gap-2">
                <div className="aspect-square h-[5.6rem] w-[5.6rem] rounded-[1.25rem] bg-white"></div>
                <span className="text-white">커피</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Banner */}
      <div className="mb-5 px-5">
        <img
          src="/images/lattechat-advertisement.png"
          width={1340}
          height={256}
          alt="환급금 이미지"
        />
      </div>

      {/* Products */}
      <section className="px-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="b5 flex items-end gap-2">
            <strong className="h3 text-gray-800">상품</strong>1,000
          </h2>
          <div className="flex gap-2">
            <img src="/icons/filter-icon.svg" />
            <span className="b10">추천순</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-5">
          {PRODUCTS.map((product) => {
            return (
              <div className="flex flex-col gap-3" key={product.id}>
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full rounded-[1.25rem] object-cover"
                />
                <div className="flex flex-col text-black">
                  <span className="b10">{product.store}</span>
                  <h3 className="b2">{product.title}</h3>
                  <p className="b1">{product.point}콩</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
