import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './customSwiperStyles.css'
import PopularPostCard from '../../components/PopularPostCard'
import Link from 'next/link'
import { useGetPostListQuery } from '../../hooks/useGetPostListQuery'
import { useUserInfo } from '@/shared/hooks/useUserInfo'
import RightArrowIcon from '@/shared/assets/icons/right-arrow-icon.svg'

export default function PopularPostListContainer() {
  const { data: userInfo } = useUserInfo()
  const { data: popularPostList } = useGetPostListQuery(
    userInfo
      ? {
          page: 0,
          filter: 'view',
          category: null,
          userId:
            userInfo.memberType === 'JUNIOR'
              ? userInfo.juniorId
              : userInfo.seniorId,
          memberType: userInfo.memberType,
        }
      : undefined
  )

  return (
    <section className="w-full space-y-4">
      <header className="flex justify-between px-5">
        <h1 className="h3">인기 게시글</h1>
        <Link
          href={`/latte-chat/posts`}
          className="flex cursor-pointer items-center gap-1"
        >
          <span className="b6">더보기</span>
          <RightArrowIcon className="#000000 h-6 w-6" />
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
          {popularPostList?.content.slice(0, 3).map((post, index) => (
            <SwiperSlide key={post.letterId}>
              <PopularPostCard
                post={{
                  letterId: post.letterId,
                  title: post.title,
                  content: post.content,
                  imageUrl: post.image,
                  isLike: post.liked,
                }}
                user={{ name: post.juniorName }}
                rank={index + 1}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </section>
  )
}
