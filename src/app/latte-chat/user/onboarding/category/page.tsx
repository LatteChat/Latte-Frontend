'use client'

import CategoryTag from '@/features/user/onboarding/components/CategoryTag'
import StepButton from '@/features/user/onboarding/components/StepButton'
import StepTitle from '@/features/user/onboarding/components/StepTitle'
import { useSignupStore } from '@/features/user/stores/signupStore'
import { CATEGORIES } from '@/shared/types/Type'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function UserOnBoardingCategoryPage() {
  const router = useRouter()
  const categoryList = useSignupStore((state) => state.categoryList)
  const setCategoryList = useSignupStore((state) => state.setCategoryList)
  const [isAvailable, setIsAvailable] = useState(true)

  const handleClickNextButton = () => {
    if (categoryList.length <= 0) {
      setIsAvailable(false)
      return
    }

    router.push(`/latte-chat/user/onboarding/introduce`)
  }

  return (
    <main className="relative flex h-auto min-h-main flex-1 flex-col space-y-8 bg-white px-5 py-10 pb-32">
      <StepTitle
        title={`멘토링 주제를 골라주세요`}
        intro="본인이 자신 있게 답할 수 있는 주제를 골라주세요."
        activeIndex={3}
      />

      <div className="flex flex-col gap-1.5">
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
        {!isAvailable && (
          <span className="b9 text-secondary-red">* 선택이 필요합니다</span>
        )}
      </div>

      <footer className="absolute inset-x-0 bottom-0 w-full px-5 pb-11">
        <StepButton value="다음" onClick={handleClickNextButton} />
      </footer>
    </main>
  )
}
