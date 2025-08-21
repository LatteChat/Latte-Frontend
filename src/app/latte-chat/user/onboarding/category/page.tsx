'use client'

import CategoryTag from '@/features/user/onboarding/components/CategoryTag'
import StepButton from '@/features/user/onboarding/components/StepButton'
import StepTitle from '@/features/user/onboarding/components/StepTitle'
import { useSignupStore } from '@/features/user/stores/signupStore'
import { useRouter } from 'next/navigation'

type Category =
  | 'NEWS'
  | 'SHOPPING'
  | 'PETS'
  | 'ENTERTAINMENT'
  | 'FINANCE'
  | 'SPORTS'
  | 'CAREER'
  | 'EDUCATION'
  | 'GAME'
  | 'BEAUTY_FASHION'
  | 'BOOKS'
  | 'TRAVEL'
  | 'MOVIE'
  | 'ANIMATION'
  | 'FOOD'
  | 'MUSIC'

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

export default function UserOnBoardingCategoryPage() {
  const router = useRouter()
  const memberType = useSignupStore((state) => state.memberType)
  const categoryList = useSignupStore((state) => state.categoryList)
  const setCategoryList = useSignupStore((state) => state.setCategoryList)

  const handleClickNextButton = () => {
    if (categoryList.length <= 0) {
      alert('카테고리를 한 개 이상 선택해주세요')
      return
    }

    const hasAuthenticatedCategory = categoryList.some(
      (category) => category === 'CAREER' || category === 'EDUCATION'
    )

    if (hasAuthenticatedCategory && memberType === 'SENIOR') {
      router.push(`/latte-chat/user/onboarding/experience`)
    } else {
      router.push(`/latte-chat/user/onboarding/agreements`)
    }
  }

  return (
    <main className="relative flex h-auto min-h-main flex-1 flex-col space-y-14 bg-white px-5 py-10 pb-32">
      <StepTitle title={`관심 있는 카테고리를 선택해주세요.`} activeIndex={2} />

      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map((category) => {
            const isSelected = categoryList.some(
              (selected) => selected === category.value
            )
            return (
              <CategoryTag
                key={category.value}
                label={category.label}
                isSelected={isSelected}
                onClick={() => {
                  setCategoryList(category.value)
                }}
              />
            )
          })}
        </div>
        {memberType === 'SENIOR' && (
          <p className="b6 text-gray-5">
            * 인증 마크가 붙은 건 간단한 인증이 필요합니다.
          </p>
        )}
      </div>

      <footer className="absolute inset-x-0 bottom-0 w-full px-5 pb-11">
        <StepButton value="다음" onClick={handleClickNextButton} />
      </footer>
    </main>
  )
}
