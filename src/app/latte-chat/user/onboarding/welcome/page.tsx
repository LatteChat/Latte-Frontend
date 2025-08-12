'use client'

import StepButton from '@/features/user/onboarding/components/StepButton'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function UserOnBoardingWelcomePage() {
  const router = useRouter()

  const handleClickNextButton = () => {
    router.push('/latte-chat/user/onboarding/intro')
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
        <h1 className="h2 absolute top-[calc(50%+6.5rem)] text-center text-black">
          라떼챗에 오신 것을 환영합니다!
        </h1>
      </div>

      <div className="absolute bottom-11 w-full px-5">
        <StepButton value="다음" onClick={handleClickNextButton} />
      </div>
    </div>
  )
}
