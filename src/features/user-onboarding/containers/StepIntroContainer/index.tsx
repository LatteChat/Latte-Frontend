'use client'

import Image from 'next/image'
import StepButton from '../../components/StepButton'

export default function OnboardingIntroContainer({
  onNext,
}: {
  onNext: (count?: number) => void
}) {
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
          <span className="text-secondary-brown-4">라떼챗</span>&nbsp;시작에
          앞서,
          <br />몇 가지를 여쭤볼게요.
        </h1>
      </div>

      <div className="absolute bottom-11 w-full px-5">
        <StepButton value="다음" onClick={() => onNext()} />
      </div>
    </div>
  )
}
