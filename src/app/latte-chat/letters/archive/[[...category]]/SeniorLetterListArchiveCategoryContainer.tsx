import PostCard from '@/shared/components/PostCard'
import LetterStatusFilter from '@/features/letter/archive/components/LetterStatusFilter'
import { useParams, useRouter } from 'next/navigation'
import { useLetterFilterStore } from '@/features/letter/stores/letterFilterStore'
import Link from 'next/link'
import { Category } from '@/shared/types/Category'
import { useGetFilteredSeniorLetterListQuery } from '@/features/letter/hooks/useGetFilteredSeniorLetterListQuery'
import { useUserInfo } from '@/shared/hooks/useUserInfo'

const CATEGORIES: { label: string; value: Category }[] = [
  { label: '취업 및 회사', value: 'CAREER' },
  { label: '진로', value: 'EDUCATION' },
  { label: '뉴스', value: 'NEWS' },
  { label: '쇼핑', value: 'SHOPPING' },
  { label: '반려동물', value: 'PETS' },
  { label: '연예', value: 'ENTERTAINMENT' },
  { label: '증권 및 금융', value: 'FINANCE' },
  { label: '스포츠', value: 'SPORTS' },
  { label: '게임', value: 'GAME' },
  { label: '뷰티 및 패션', value: 'BEAUTY_FASHION' },
  { label: '독서', value: 'BOOKS' },
  { label: '여행', value: 'TRAVEL' },
  { label: '영화', value: 'MOVIE' },
  { label: '애니메이션', value: 'ANIMATION' },
  { label: '음식 및 요리', value: 'FOOD' },
  { label: '음악 및 악기', value: 'MUSIC' },
]

export default function SeniorLetterListArchiveCategoryContainer() {
  const router = useRouter()
  const params = useParams()
  const selectedCategory = params.category?.[0] ?? null
  const statusFilter = useLetterFilterStore((state) => state.statusFilter)
  const { data: userInfo } = useUserInfo()

  const { data: filteredLetterList } = useGetFilteredSeniorLetterListQuery({
    seniorId: userInfo?.seniorId!,
    answer: statusFilter,
    category: selectedCategory,
    page: 0,
  })

  const handleSelectCategory = (category: Category) => {
    if (selectedCategory === category) {
      router.replace('/latte-chat/letters/archive')
    } else {
      router.replace(`/latte-chat/letters/archive/${category}`)
    }
  }

  return (
    <div>
      <header className="b2 sticky top-0 z-10">
        <div className="flex h-12 items-center justify-center bg-white">
          <h1>글 보관함</h1>
        </div>
        <nav aria-label="카테고리 탐색" className="bg-gray-1 py-[0.875rem]">
          <ul className="scrollbar-hide flex gap-2 overflow-auto px-5">
            {CATEGORIES.map((category, index) => {
              return (
                <li key={index}>
                  <button
                    onClick={() => handleSelectCategory(category.value)}
                    className={`${selectedCategory === category.value ? 'border-secondary-brown-2 bg-secondary-brown-1' : 'border-transparent bg-white'} b4 flex h-full w-full flex-1 whitespace-nowrap rounded-10 border-2 px-4 py-2 text-secondary-brown-5`}
                  >
                    {category.label}
                  </button>
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
          {filteredLetterList?.content?.map((letter: any, index: number) => {
            return (
              <Link
                key={index}
                href={
                  letter?.answerStatus === 'SAVED'
                    ? `/latte-chat/letters/archive/letter/${letter.letterId}/answer`
                    : `/latte-chat/letters/archive/letter/${letter.letterId}`
                }
              >
                <PostCard
                  post={{
                    tag: letter.category,
                    title: letter.title,
                    content: letter.content,
                    image: letter.image,
                    date: letter.createAt,
                    likeCount: letter.heart,
                    commentCount: letter.view,
                    answerStatus: letter.answerStatus,
                    letterStatus: letter.letterStatus,
                  }}
                  showStatus
                  showShadow
                />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
