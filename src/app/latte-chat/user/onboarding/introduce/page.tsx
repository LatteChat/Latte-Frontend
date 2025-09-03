'use client'

import StepButton from '@/features/user/onboarding/components/StepButton'
import StepTitle from '@/features/user/onboarding/components/StepTitle'
import { useSignupStore } from '@/features/user/stores/signupStore'
import { useRouter } from 'next/navigation'

export default function UserOnBoardingIntroducePage() {
  const router = useRouter()
  const setIntroduce = useSignupStore((state) => state.setIntroduce)

  const handleClickNextButton = () => {
    router.push(`/latte-chat/user/onboarding/agreements`)
  }

  return (
    <main className="relative flex h-auto min-h-main flex-1 flex-col space-y-8 px-5 py-10 pb-32">
      <StepTitle
        title={`본인을 소개해주세요`}
        intro={`자기소개는 마이페이지에서 변경이 가능해요.\n자세히 작성할수록 우수 멘토가 될 확률이 높아져요.`}
        activeIndex={4}
      />

      <div className="flex flex-1 flex-col gap-1.5">
        <textarea
          onChange={(e) => setIntroduce(e.target.value)}
          placeholder="간단한 소개글을 작성해주세요.(선택)"
          className="h-full max-h-96 flex-1 resize-none rounded-10 p-5 shadow-border outline-none placeholder:text-center placeholder:text-gray-6"
        ></textarea>
      </div>

      <footer className="absolute inset-x-0 bottom-0 w-full px-5 pb-11">
        <StepButton value="다음" onClick={handleClickNextButton} />
      </footer>
    </main>
  )
}
