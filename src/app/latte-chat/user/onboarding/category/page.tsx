'use client'

import CategoryTag from '@/features/user/onboarding/components/CategoryTag'
import StepButton from '@/features/user/onboarding/components/StepButton'
import StepTitle from '@/features/user/onboarding/components/StepTitle'
import { useSignupStore } from '@/features/user/stores/signupStore'
import { CATEGORIES } from '@/shared/types/Type'
import { useRouter } from 'next/navigation'

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
