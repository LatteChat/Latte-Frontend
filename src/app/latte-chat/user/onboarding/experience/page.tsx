'use client'

import FormInput from '@/features/user/onboarding/components/FormInput'
import FormInputWithButton from '@/features/user/onboarding/components/FormInputWithButton'
import StepButton from '@/features/user/onboarding/components/StepButton'
import StepTitle from '@/features/user/onboarding/components/StepTitle'

export default function UserOnBoardingExperiencePage() {
  const handleClickNextButton = () => {}

  return (
    <main className="relative h-auto min-h-svh space-y-8 bg-gray-100 px-5 py-10 pb-32">
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
          icon={<img src="/icons/daum-icon.svg" />}
        />
        <FormInput label="직무" placeholder="경력을 입력해주세요." />

        <div className="space-y-2">
          <FormInputWithButton
            label="회사 이메일"
            placeholder="회사 이메일을 입력해주세요."
            buttonText="인증메일 발송"
            buttonWidth="w-28"
          />
          <FormInputWithButton
            placeholder="인증번호"
            buttonText="인증하기"
            buttonWidth="w-28"
          >
            <span>03:00</span>
          </FormInputWithButton>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 w-full px-5 pb-11">
        <StepButton value="다음" onClick={handleClickNextButton} />
      </div>
    </main>
  )
}
