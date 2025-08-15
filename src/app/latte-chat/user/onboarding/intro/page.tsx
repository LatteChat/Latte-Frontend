'use client'

import StepButton from '@/features/user/onboarding/components/StepButton'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function UserOnBoardingIntroPage() {
  const router = useRouter()

  const handleClickNextButton = () => {
    router.push('/latte-chat/user/onboarding/nickname')
  }

  return (
    <div className="relative h-full bg-gray-100 py-10">
      <div className="relative left-1/2 top-1/3 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <Image
          src="/images/test-image.png"
          width={149}
          height={149}
          alt="환영 이미지"
          className="aspect-square rounded-full"
        />
        <h1 className="h2 absolute top-[calc(50%+6.5rem)] whitespace-pre-line text-center text-black">
          {`라떼챗 시작을 위해\n몇 가지 여쭤볼게요.`}
        </h1>
      </div>

      <div className="absolute bottom-11 w-full px-5">
        <StepButton value="다음" onClick={handleClickNextButton} />
      </div>
    </div>
  )
}
