import Link from 'next/link'
import PostCard from '@/shared/components/PostCard'
import LetterStatusFilter from '@/features/letter/archive/components/LetterStatusFilter'

type LetterStatus = 'ANSWERED' | 'ACCEPTED' | 'SAVED' | 'PENDING'

type Post = {
  tag: string
  title: string
  content: string
  date: string
  likeCount: number
  commentCount: number
  status?: LetterStatus
}

const LETTERS: Post[] = [
  {
    tag: '여행',
    title: '첫 번째 여행 이야기',
    content: '지난 주에 제주도에 다녀왔어요. 너무 좋았답니다!',
    date: '2025-08-11',
    likeCount: 23,
    commentCount: 5,
    status: 'ANSWERED',
  },
  {
    tag: '여행',
    title: '서울 맛집 탐방기',
    content: '서울에서 꼭 가봐야 할 맛집을 소개합니다.',
    date: '2025-08-10',
    likeCount: 40,
    commentCount: 8,
    status: 'ACCEPTED',
  },
  {
    tag: '일상',
    title: '오늘 하루 기록',
    content:
      '오늘은 날씨가 좋아서 기분도 좋았어요. 오늘은 날씨가 좋아서 기분도 좋았어요. 오늘은 날씨가 좋아서 기분도 좋았어요.',
    date: '2025-08-09',
    likeCount: 15,
    commentCount: 2,
    status: 'SAVED',
  },
  {
    tag: '여행',
    title: '강릉 바다 사진',
    content: '강릉 바다에서 찍은 멋진 사진들을 공유해요.',
    date: '2025-08-08',
    likeCount: 30,
    commentCount: 7,
    status: 'PENDING',
  },
  {
    tag: '취미',
    title: '요즘 빠진 취미',
    content: '요즘 그림 그리기에 푹 빠졌어요.',
    date: '2025-08-07',
    likeCount: 12,
    commentCount: 3,
    status: 'PENDING',
  },
]

export default function LettersArchiveCategoryContainer() {
  return (
    <div>
      <header className="b2 sticky top-0 z-10">
        <div className="flex h-12 items-center justify-center bg-white">
          <h1>글 보관함</h1>
        </div>
        <nav aria-label="카테고리 탐색" className="bg-gray-1 py-[0.875rem]">
          <ul className="scrollbar-hide flex gap-2 overflow-auto px-5">
            {new Array(5).fill(0).map((_, index) => {
              return (
                <li key={index}>
                  <Link
                    href="/latte-chat/letters/archive/travel"
                    className="b4 text-secondary-brown-5 flex h-full w-full flex-1 whitespace-nowrap rounded-10 border-2 border-transparent bg-white px-4 py-2"
                  >
                    취업 및 회사
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>

      <div className="flex min-h-[calc(100svh-8rem)] flex-col gap-4 bg-white px-5 py-3">
        <div className="flex justify-end">
          <LetterStatusFilter />
        </div>
        <div className="flex flex-col gap-[1.875rem]">
          {LETTERS.map((letter, index) => {
            return <PostCard post={letter} key={index} showStatus showShadow />
          })}
        </div>
      </div>
    </div>
  )
}
