'use client'

import AgeSelector from '@/features/user/onboarding/components/AgeSelector'
import StepButton from '@/features/user/onboarding/components/StepButton'
import StepTitle from '@/features/user/onboarding/components/StepTitle'
import { useSignupStore } from '@/features/user/stores/signupStore'
import { AgeType } from '@/features/user/types/User'
import { useRouter } from 'next/navigation'

const MENTEE_AGE_TYPE: { label: string; value: AgeType }[] = [
  { label: '10대 ↓', value: 'TEENAGER' },
  { label: '20대', value: 'TWENTIES' },
  { label: '30대', value: 'THIRTIES' },
]

const MENTOR_AGE_TYPE: { label: string; value: AgeType }[] = [
  { label: '40대', value: 'FORTIES' },
  { label: '50대', value: 'FIFTIES' },
  { label: '60대 ↑', value: 'SIXTIES' },
]

export default function UserOnBoardingAgePage() {
  const router = useRouter()
  const memberType = useSignupStore((state) => state.memberType)

  const handleClickNextButton = () => {
    if (!memberType) return
    router.push(`/latte-chat/user/onboarding/certification`)
  }

  return (
    <div className="relative min-h-main space-y-8 bg-white px-5 py-10 pb-32">
      <StepTitle title={'연령대를 확인해주세요'} activeIndex={1} />

      <div className="flex flex-col gap-7">
        <AgeSelector
          imgUrl="/images/shot-image.png"
          ages={MENTEE_AGE_TYPE}
          info="인생에 조언이 필요하다면, 멘티로 시작해보세요. 10-30대에게 권장해요!"
          role={{
            label: '멘티',
            value: 'JUNIOR',
          }}
        />
        <AgeSelector
          imgUrl="/images/milk-image.png"
          ages={MENTOR_AGE_TYPE}
          info="인생에 경험을 나누고 싶다면, 멘토로 시작해보세요.40-60대에게 권장해요!"
          role={{
            label: '멘토',
            value: 'SENIOR',
          }}
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 w-full px-5 pb-11">
        <StepButton value="다음" onClick={handleClickNextButton} />
      </div>
    </div>
  )
}
