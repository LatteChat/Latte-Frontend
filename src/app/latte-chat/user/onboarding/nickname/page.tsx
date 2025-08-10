'use client'

import StepButton from '@/features/user/onboarding/components/StepButton'
import StepTitle from '@/features/user/onboarding/components/StepTitle'

export default function UserOnBoardingNicknamePage() {
  const handleClickNextButton = () => {}

  return (
    <main className="min-h-main relative h-auto space-y-8 bg-gray-100 px-5 py-10 pb-32">
      <StepTitle title={'닉네임을 입력해주세요.'} activeIndex={0} />

      <div className="flex w-full flex-col gap-8">
        <div className="flex w-full items-center justify-between gap-3 overflow-hidden rounded-xl bg-gray-200 pr-5">
          <input
            type="text"
            className="flex-1 bg-transparent px-5 py-4 text-base outline-none"
            placeholder="닉네임을 입력해주세요"
          />
          <span className="w-8 text-gray-400">0/10</span>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 w-full px-5 pb-11">
        <StepButton value="다음" onClick={handleClickNextButton} />
      </div>
    </main>
  )
}
