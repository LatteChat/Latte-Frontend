import PostAnswer from '@/features/post/components/PostAnswer'
import PostContent from '@/features/post/components/PostContent'
import PostHeader from '@/features/post/components/PostHeader'
import Topbar from '@/shared/components/Topbar'
import CommentListContainer from '@/features/post/containers/CommentListContainer'

const TOPBAR_ICONS = [
  {
    iconUrl: '/icons/post-share-icon.svg',
    alt: '공유',
    href: '',
  },
  {
    iconUrl: '/icons/bookmark-icon.svg',
    alt: '북마크',
    href: '',
  },
]

const POST = {
  user: {
    profile: '/images/tesg-image.png',
    nickname: '아이스아뭬리칵',
  },
  date: '2025년 8월 5일',
  likeCount: 40,
  commentCount: 23,
  category: '취업 및 회사',
  title: 'UX/UI 디자이너의 취업',
  content:
    '자취방에 처음 이사 온 날, 밤새 누가 현관문을 열다 닫는 소리가 들렸다. "위층 소린가 보다" 하고 넘겼지만, 다음 날 아침 우편함에 쪽지가 하나 꽂혀 있었다. “밤에는 그 문 열지 마세요. 저 혼자 살 땐 괜찮았는데, 이제 둘이라서요.” 문제는 그 쪽지에 적힌 이름이, 이 집 전 세입자 이름이었다는 거다.자취방에 처음 이사 온 날, 밤새 누가 현관문을 열다 닫는 소리가 들렸다. "위층 소린가 보다" 하고 넘겼지만, 다음 날 아침 우편함에 쪽지가 하나 꽂혀 있었다. “밤에는 그 문 열지 마세요. 저 혼자 살 땐 괜찮았는데, 이제 둘이라서요.” 문제는 그 쪽지에 적힌 이름이, 이 집 전 세입자 이름이었다는 거다.자취방에 처음 이사 온 날, 밤새 누가 현관문을 열다 닫는 소리가 들렸다. "위층 소린가 보다" 하고 넘겼지만, 다음 날 아침 우편함에 쪽지가 하나 꽂혀 있었다. “밤에는 그 문 열지 마세요. 저 혼자 살 땐 괜찮았는데, 이제 둘이라서요.” 문제는 그 쪽지에 적힌 이름이, 이 집 전 세입자 이름이었다는 거다.',
  imgUrl: '/images/test-image.png',
  answer: {
    user: {
      profile: '/images/test-image.png',
      nickname: '고먐미',
      tags: ['10년째 대리', '직설적인', 'INTJ'],
    },
    date: '2025년 8월 7일',
    content:
      '자취방에 처음 이사 온 날, 밤새 누가 현관문을 열다 닫는 소리가 들렸다. "위층 소린가 보다" 하고 넘겼지만, 다음 날 아침 우편함에 쪽지가 하나 꽂혀 있었다. “밤에는 그 문 열지 마세요. 저 혼자 살 땐 괜찮았는데, 이제 둘이라서요.” 문제는 그 쪽지에 적힌 이름이, 이 집 전 세입자 이름이었다는 거다.',
  },
}

export default function PostDetailContainer() {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <Topbar icons={TOPBAR_ICONS} />
      </div>

      <main className="flex h-auto min-h-main flex-col bg-white">
        <section className="px-5 pb-5 pt-10">
          <PostHeader
            user={POST.user}
            date={POST.date}
            likeCount={POST.likeCount}
            commentCount={POST.commentCount}
          />
          <PostContent
            imageUrl={POST.imgUrl}
            category={POST.category}
            title={POST.title}
            content={POST.content}
          />
          <PostAnswer
            user={POST.answer.user}
            date={POST.date}
            content={POST.content}
          />
          <div className="mt-4 flex justify-center">
            <button className="bg-secondary-brown-4 text-secondary-brown-1 flex items-center gap-1 rounded-10 px-4 py-2">
              <img src="/icons/empty-heart-icon.svg" />
              <span className="b6">공감해요</span>
            </button>
          </div>
        </section>

        <hr className="h-[0.3rem] w-full border-0 bg-gray-300" />

        <CommentListContainer />
      </main>
    </div>
  )
}
