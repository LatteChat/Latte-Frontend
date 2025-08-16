import PostCard from '@/shared/components/PostCard'
import PostFilterContainer from '@/shared/containers/PostFilterContainer'

const POSTS = [
  {
    tag: '취업 및 회사',
    title: '요즘 회사 생활',
    content: '집에 가고 싶어요...',
    date: '2025-08-07',
    likeCount: 12,
    commentCount: 3,
  },
  {
    tag: '여행',
    title: '첫 번째 여행 이야기',
    content: '지난 주에 제주도에 다녀왔어요. 너무 좋았답니다!',
    date: '2025-08-11',
    likeCount: 23,
    commentCount: 5,
  },
  {
    tag: '여행',
    title: '서울 맛집 탐방기',
    content: '서울에서 꼭 가봐야 할 맛집을 소개합니다.',
    date: '2025-08-10',
    likeCount: 40,
    commentCount: 8,
  },
  {
    tag: '일상',
    title: '오늘 하루 기록',
    content:
      '오늘은 날씨가 좋아서 기분도 좋았어요. 오늘은 날씨가 좋아서 기분도 좋았어요. 오늘은 날씨가 좋아서 기분도 좋았어요.',
    date: '2025-08-09',
    likeCount: 15,
    commentCount: 2,
  },
  {
    tag: '여행',
    title: '강릉 바다 사진',
    content: '강릉 바다에서 찍은 멋진 사진들을 공유해요.',
    date: '2025-08-08',
    likeCount: 30,
    commentCount: 7,
  },
  {
    tag: '취미',
    title: '요즘 빠진 취미',
    content: '요즘 그림 그리기에 푹 빠졌어요.',
    date: '2025-08-07',
    likeCount: 12,
    commentCount: 3,
  },
]

export default function PostListContainer() {
  return (
    <section className="flex flex-col gap-[0.875rem]">
      <header className="flex justify-between px-5">
        <h1 className="h3">게시물</h1>
        <div className="flex cursor-pointer items-center gap-2">
          <span className="b6">더보기</span>
          <img
            src="/icons/right-arrow-icon.svg"
            alt="더보기 아이콘"
            className="aspect-square h-6 w-6"
          />
        </div>
      </header>

      <PostFilterContainer />

      <main className="flex flex-col gap-4 px-5">
        {POSTS.map((post, index) => {
          return <PostCard key={index} post={post} showMeta />
        })}
      </main>
    </section>
  )
}
