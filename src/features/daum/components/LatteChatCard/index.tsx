import Image from 'next/image'

export default function LatteChatCard() {
  return (
    <section className="flex flex-col gap-5 rounded-[1.25rem] bg-white p-5">
      <header className="flex items-center gap-[1px]">
        <h2 className="b2">라떼챗</h2>
        <img src="/icons/right-arrow-icon.svg" />
      </header>

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
    </section>
  )
}
