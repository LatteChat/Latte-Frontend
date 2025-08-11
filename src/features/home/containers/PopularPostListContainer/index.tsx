import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './customSwiperStyles.css'
import PopularPostCard from '../../components/PopularPostCard'
import Link from 'next/link'

const POPULAR_POSTS = [
  {
    id: 1,
    rank: 1,
    title: 'N기업 관련 취업 질문',
    content:
      '최근 모기업 면접을 보고 왔는데, 아주아주 어려웠습니다. 도대체 취업은 어떻게 하는 것인가요!!!',
    isLike: true,
    writer: '김유경',
    imageUrl: '/images/test-image.png',
  },
  {
    id: 2,
    rank: 2,
    title: 'N기업 관련 취업 질문',
    content:
      '최근 모기업 면접을 보고 왔는데, 아주아주 어려웠습니다. 도대체 취업은 어떻게 하는 것인가요!!!',
    isLike: false,
    writer: '김유경',
    imageUrl: '/images/test-image.png',
  },
  {
    id: 3,
    rank: 3,
    title: 'N기업 관련 취업 질문',
    content:
      '최근 모기업 면접을 보고 왔는데, 아주아주 어려웠습니다. 도대체 취업은 어떻게 하는 것인가요!!!',
    isLike: false,
    writer: '김유경',
    imageUrl: '/images/test-image.png',
  },
]

export default function PopularPostListContainer() {
  return (
    <section className="w-full space-y-4">
      <header className="flex justify-between px-5">
        <h1 className="h3">인기 게시글</h1>
        <Link href={`/`} className="flex cursor-pointer items-center gap-2">
          <span className="text-xs">더보기</span>
          <img
            src="/icons/right-arrow-icon.svg"
            alt="더보기 아이콘"
            className="aspect-square h-6 w-6"
          />
        </Link>
      </header>

      <main className="flex w-full flex-col items-center gap-4 overflow-hidden px-5">
        <Swiper
          className="w-full"
          modules={[Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1.05}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          {POPULAR_POSTS.map((post) => (
            <SwiperSlide key={post.id}>
              <PopularPostCard post={post} />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </section>
  )
}
