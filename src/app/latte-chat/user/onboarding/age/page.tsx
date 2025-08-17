'use client'

import AgeSelector from '@/features/user/onboarding/components/AgeSelector'
import StepButton from '@/features/user/onboarding/components/StepButton'
import StepTitle from '@/features/user/onboarding/components/StepTitle'
import { useSignupStore } from '@/features/user/stores/signupStore'
import { AgeType } from '@/features/user/types/User'
import { useRouter } from 'next/navigation'

const MENTEE_AGE_TYPE: { label: string; value: AgeType }[] = [
  { label: '10대 ↓', value: 'UNDER_10' },
  { label: '20대', value: 'TWENTIES' },
  { label: '30대', value: 'THIRTIES' },
]

const MENTOR_AGE_TYPE: { label: string; value: AgeType }[] = [
  { label: '40대', value: 'FORTIES' },
  { label: '50대', value: 'FIFTIES' },
  { label: '60대 ↑', value: 'SIXTIES_AND_ABOVE' },
]

export default function UserOnBoardingAgePage() {
  const router = useRouter()
  const memberType = useSignupStore((state) => state.memberType)

  const handleClickNextButton = () => {
    if (!memberType) return
    router.push(`/latte-chat/user/onboarding/role`)
  }

  return (
    <div className="relative min-h-main space-y-8 bg-gray-100 px-5 py-10 pb-32">
      <StepTitle title={'연령대를 선택해주세요.'} activeIndex={1} />

      <div className="flex flex-col gap-7">
        <div className="px-3">
          <AgeSelector
            imgUrl="/images/shot-image.png"
            ages={MENTEE_AGE_TYPE}
            info={
              <>
                <span className="b3">멘티 역할</span>을 합니다.
                <br />
                조언을 얻을 수 있으며,
                <br />
                <span className="b3">10-30대의</span>
                <br />
                사용자에게 권장합니다.
              </>
            }
            role={{
              label: '멘티',
              value: 'JUNIOR',
            }}
          />
        </div>
        <div className="px-3">
          <AgeSelector
            imgUrl="/images/milk-image.png"
            ages={MENTOR_AGE_TYPE}
            info={
              <>
                <span className="b3">멘토 역할</span>을 합니다.
                <br />
                조언을 얻을 수 있으며,
                <br />
                <span className="b3">40-60대 이상의</span>
                <br />
                사용자에게 권장합니다.
              </>
            }
            role={{
              label: '멘토',
              value: 'SENIOR',
            }}
          />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 w-full px-5 pb-11">
        <StepButton value="다음" onClick={handleClickNextButton} />
      </div>
    </div>
  )
}
