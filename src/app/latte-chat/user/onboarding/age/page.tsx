'use client'

import AgeSelector from '@/features/user/onboarding/components/AgeSelector'
import StepButton from '@/features/user/onboarding/components/StepButton'
import StepTitle from '@/features/user/onboarding/components/StepTitle'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const MENTEE_AGE_TYPE = ['10대 ↓', '20대', '30대']
const MENTOR_AGE_TYPE = ['40대', '50대', '60대 ↑']

export default function UserOnBoardingAgePage() {
  const router = useRouter()
  const [role, setRole] = useState<string | null>('mentor') // mentor mentee

  const handleClickNextButton = () => {
    if (!role) return
    router.push(`/latte-chat/user/onboarding/role?role=${role}`)
  }

  return (
    <main className="min-h-main relative space-y-8 bg-gray-100 px-5 py-10 pb-32">
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
            role="멘티"
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
            role="멘토"
          />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 w-full px-5 pb-11">
        <StepButton value="다음" onClick={handleClickNextButton} />
      </div>
    </main>
  )
}
