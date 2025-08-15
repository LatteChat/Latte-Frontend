import Image from 'next/image'

export default function DaumCommunity() {
  return (
    <div>
      <header className="flex w-full justify-between px-5 py-3">
        <span className="h1">커뮤니티</span>
        <img src="/icons/search-icon.svg" />
      </header>

      <main className="min-h-[calc(100svh-8.5rem)] bg-gray-100">
        <div className="flex w-full items-center justify-center gap-5 pl-8 pr-11">
          <p className="b2">[체크] 환급금: 300,000원</p>
          <Image
            src="/images/community-banner-image.svg"
            width={93}
            height={80}
            alt="환급금 이미지"
          />
        </div>

        <div className="flex flex-col gap-5 rounded-[1.25rem] bg-white p-5">
          <div className="flex items-center gap-[1px]">
            <h2 className="b2">라떼챗</h2>
            <img src="/icons/right-arrow-icon.svg" />
          </div>
          <div className="flex flex-col gap-4 border-t pt-4">
            <Image
              src="/images/latte-chat-image.png"
              alt="라뗴챗 이미지"
              height={113}
              width={336}
              className="w-full rounded-3xl"
            />
            <div className="flex flex-col gap-2">
              <h3 className="h3">라떼챗 소개 문구 추가하기</h3>
              <p className="b4 whitespace-pre-line">
                {` 안녕하세요. 다음의 새로운 서비스인\n라떼챗 커뮤니티를 소개합니다.`}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
