import Image from 'next/image'

export default function UserOnBoardingIntroPage() {
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
        <h1 className="absolute top-[calc(50%+6.5rem)] whitespace-pre-line text-center text-xl font-normal text-black">
          {`라떼챗 시작을 위해\n몇 가지 여쭤볼게요.`}
        </h1>
      </div>

      <div className="absolute bottom-11 w-full px-5">
        <button className="w-full rounded-2xl bg-white py-4 text-base">
          다음
        </button>
      </div>
    </div>
  )
}
