'use client'

import StepButton from '@/features/user/onboarding/components/StepButton'
import StepTitle from '@/features/user/onboarding/components/StepTitle'
import { useSignupStore } from '@/features/user/stores/signupStore'
import { useRouter } from 'next/navigation'

export default function UserOnBoardingNicknamePage() {
  const router = useRouter()
  const nickname = useSignupStore((state) => state.name)
  const setNickname = useSignupStore((state) => state.setName)

  const handleClickNextButton = () => {
    if (nickname.length <= 0) {
      alert('닉네임을 입력해주세요')
      return
    }
    router.push('/latte-chat/user/onboarding/age')
  }

  return (
    <div className="relative h-auto min-h-main space-y-8 bg-white px-5 py-10 pb-32">
      <StepTitle title={'닉네임을 입력해주세요.'} activeIndex={0} />

      <div className="flex w-full flex-col gap-8">
        <div className="bg-gray-1 flex w-full items-center justify-between gap-3 overflow-hidden rounded-xl pr-5">
          <input
            type="text"
            className="b1 placeholder:text-gray-5 flex-1 bg-transparent px-5 py-4 outline-none"
            placeholder="닉네임을 입력해주세요"
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value)
            }}
          />
          <span className="b1 text-gray-5 w-8">{nickname.length}/10</span>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 w-full px-5 pb-11">
        <StepButton value="다음" onClick={handleClickNextButton} />
      </div>
    </div>
  )
}
