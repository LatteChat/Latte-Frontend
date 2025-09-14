'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import StepButton from '../../components/StepButton'

export default function OnboardingStartContainer() {
  const router = useRouter()

  const handleClickNextButton = () => {
    router.replace(`/latte-chat`)
  }

  return (
    <div className="relative h-full bg-white py-10">
      <div className="relative left-1/2 top-1/3 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <Image
          src="/images/latte-mugcup-image.svg"
          width={227}
          height={227}
          alt="라떼챗 이미지"
          className="ml-5 aspect-square h-56 rounded-full"
        />
        <h1 className="h2 absolute top-[calc(50%+6.5rem)] whitespace-pre-line text-center text-black">
          준비완료!
          <br />
          <span className="text-secondary-brown-4">라떼챗</span>을 시작할 수
          있어요.
        </h1>
      </div>

      <div className="absolute bottom-11 w-full px-5">
        <StepButton value="라떼챗 시작하기" onClick={handleClickNextButton} />
      </div>
    </div>
  )
}
