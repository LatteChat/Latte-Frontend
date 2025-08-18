import Image from 'next/image'

export default function ImageGeneratingModal() {
  return (
    <div className="flex w-full flex-col items-center rounded-lg bg-white p-6 px-5 pb-10 text-center">
      <Image
        src="/images/sparkling-coffee-bean-image.svg"
        alt="로딩중 이미지"
        width={236}
        height={236}
        className="aspect-square h-60 w-60"
      />
      <div className="flex flex-col gap-5">
        <p className="b10">약 2분 정도 소요됩니다.</p>
        <div className="flex flex-col gap-1">
          <h2 className="h3">AI 이미지를 생성하고 있어요...</h2>
          <p className="b4">어플을 종료하거나 뒤로 가기를 누르지 마세요.</p>
        </div>
      </div>
    </div>
  )
}
