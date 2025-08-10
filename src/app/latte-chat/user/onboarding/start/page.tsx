import Image from 'next/image'

export default function UserOnBoardingStartPage() {
  return (
    <div className="relative h-full bg-gray-100 py-10">
      <div className="relative left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-2/3 flex-col gap-10">
        <div className="flex flex-col items-center text-xl font-normal">
          <p>준비 완료!</p>
          <p>라떼챗을 시작해보아요.</p>
        </div>
        <div className="flex flex-col items-center gap-10">
          <Image
            src="/images/test-image.png"
            width={149}
            height={149}
            alt="환영 이미지"
            className="aspect-square rounded-full"
          />
        </div>
      </div>

      <div className="absolute bottom-11 w-full px-5">
        <button className="w-full rounded-2xl bg-white py-4 text-base">
          라떼챗 시작하기
        </button>
      </div>
    </div>
  )
}
