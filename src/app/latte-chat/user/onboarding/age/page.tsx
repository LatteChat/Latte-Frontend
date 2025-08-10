'use client'

import StepButton from '@/features/user/onboarding/components/StepButton'
import StepTitle from '@/features/user/onboarding/components/StepTitle'

const AGE_TYPE = [
  {
    name: '10대 이하',
  },
  {
    name: '20대',
  },
  {
    name: '30대',
  },
  {
    name: '40대',
  },
  {
    name: '50대',
  },
  {
    name: '60대 이상',
  },
]

export default function UserOnBoardingAgePage() {
  const handleClickNextButton = () => {}

  return (
    <main className="min-h-main relative space-y-8 bg-gray-100 px-5 py-10 pb-32">
      <StepTitle title={'연령대를 입력해주세요.'} activeIndex={1} />

      <div className="flex flex-col gap-4">
        {AGE_TYPE.map((age) => (
          <button
            key={age.name}
            className="w-full rounded-xl border border-transparent bg-white px-5 py-4 text-left hover:border-black hover:bg-gray-300"
          >
            {age.name}
          </button>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 w-full px-5 pb-11">
        <StepButton value="다음" onClick={handleClickNextButton} />
      </div>
    </main>
  )
}
