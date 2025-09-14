'use client'

import { useSignupStore } from '@/features/user/stores/signupStore'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import StepTitle from '../../components/StepTitle'
import StepButton from '../../components/StepButton'

export default function OnboardingNicknameContainer({
  onNext,
}: {
  onNext: (count?: number) => void
}) {
  const nickname = useSignupStore((state) => state.name)
  const setNickname = useSignupStore((state) => state.setName)
  const [isAvailable, setIsAvailable] = useState(true)

  const handleClickNextButton = () => {
    if (nickname.length <= 0) {
      setIsAvailable(false)
      return
    }
    onNext()
  }

  return (
    <div className="relative h-auto min-h-main space-y-8 bg-white px-5 py-10 pb-32">
      <StepTitle title={'닉네임을 입력해주세요'} activeIndex={0} />

      <div className="flex w-full flex-col gap-1">
        <div className="flex w-full items-center justify-between gap-3 overflow-hidden rounded-xl bg-gray-1 pr-5">
          <input
            type="text"
            className="b1 flex-1 bg-transparent px-5 py-4 outline-none placeholder:text-gray-5"
            placeholder="닉네임을 입력해주세요"
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value)
            }}
          />
          <span className="b1 w-8 text-gray-5">{nickname.length}/10</span>
        </div>
        {!isAvailable && (
          <span className="b9 text-secondary-red">* 입력이 필요합니다</span>
        )}
      </div>

      <div className="absolute inset-x-0 bottom-0 w-full px-5 pb-11">
        <StepButton value="다음" onClick={handleClickNextButton} />
      </div>
    </div>
  )
}
