'use client'

import FormInput from '@/features/user/onboarding/components/FormInput'
import StepButton from '@/features/user/onboarding/components/StepButton'
import StepTitle from '@/features/user/onboarding/components/StepTitle'
import { useRouter } from 'next/navigation'

export default function UserOnBoardingExperiencePage() {
  const router = useRouter()

  const handleClickNextButton = () => {
    router.push(`/latte-chat/user/onboarding/agreements`)
  }

  return (
    <main className="relative h-auto min-h-main space-y-8 bg-white px-5 py-10 pb-32">
      <StepTitle
        title={'실력자임을 인증해주세요!'}
        intro={'회사, 경력 인증을 간단히 진행할게요.'}
        activeIndex={3}
      />

      <div className="flex w-full flex-col gap-4">
        <div className="flex gap-2">
          <FormInput label="이름" placeholder="실명을 입력해주세요." />
          <FormInput label="경력" placeholder="경력을 입력해주세요." />
        </div>
        <FormInput
          label="회사"
          placeholder="회사를 검색해주세요."
          icon={<img src="/icons/search-icon.svg" />}
        />
        <FormInput label="직무" placeholder="경력을 입력해주세요." />

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <label className="b4">인증하기</label>
            <img src="/images/certification-image.svg" className="w-14" />
          </div>
          <div className="flex justify-between rounded-[0.625rem] bg-white py-3 pl-4 pr-3 shadow">
            <p className="b4">경력 인증을 위해 정부24로 이동합니다.</p>
            <img
              src="/icons/right-arrow-icon.svg"
              className="aspect-square h-6 w-6"
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 w-full px-5 pb-11">
        <StepButton value="다음" onClick={handleClickNextButton} />
      </div>
    </main>
  )
}
