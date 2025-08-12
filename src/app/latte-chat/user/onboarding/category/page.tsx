'use client'

import CategoryTag from '@/features/user/onboarding/components/CategoryTag'
import StepButton from '@/features/user/onboarding/components/StepButton'
import StepTitle from '@/features/user/onboarding/components/StepTitle'
import { useRouter } from 'next/navigation'

const CATEGORIES = [
  '뉴스',
  '쇼핑',
  '반려동물',
  '연예',
  '증권 및 금융',
  '스포츠',
  '취업 및 회사',
  '진로',
  '게임',
  '뷰티 및 패션',
  '독서',
  '여행',
  '영화',
  '애니메이션',
  '음식 및 요리',
  '음악 및 악기',
]

export default function UserOnBoardingCategoryPage() {
  const router = useRouter()

  const handleClickNextButton = () => {
    router.push(`/latte-chat/user/onboarding/experience`)
  }

  return (
    <main className="min-h-main relative flex h-auto flex-1 flex-col space-y-14 bg-gray-100 px-5 py-10 pb-32">
      <StepTitle title={`관심 있는 카테고리를 선택해주세요.`} activeIndex={2} />

      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map((category) => (
            <CategoryTag key={category} label={category} selected={false} />
          ))}
        </div>
        <p className="b4">* 붉은 박스 항목은 간단한 인증이 필요합니다.</p>
      </div>

      <footer className="absolute inset-x-0 bottom-0 w-full px-5 pb-11">
        <StepButton value="다음" onClick={handleClickNextButton} />
      </footer>
    </main>
  )
}
