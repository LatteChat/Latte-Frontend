import Image from 'next/image'

export default function LatteChatPage() {
  return (
    <div className="h-full bg-gray-100 px-5 py-10">
      <div>
        <Image
          src="/images/test-image.png"
          width={149}
          height={149}
          alt="환영 아이콘"
          className="aspect-square rounded-full"
        />
        <h1>라떼챗에 오신 것을 환영합니다!</h1>
      </div>
      <button className="w-full rounded-2xl bg-white py-4">다음</button>
      <div className="fixed bottom-0 left-0 h-[83px] w-full bg-red-200">
        네비
      </div>
    </div>
  )
}
