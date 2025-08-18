import Image from 'next/image'

export default function LetterAnswerVisual() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex items-start justify-center">
        <div className="absolute -left-[0.7rem]">
          <div className="relative inline-block pb-[0.625rem]">
            <div className="b5 rounded-lg bg-white px-3 py-2">
              사연이 도착했어요!
            </div>

            <img
              src="/images/speech-bubble-tail-image.svg"
              className="absolute bottom-0 left-3"
            />
          </div>
        </div>

        <Image
          src="/images/coffee-machine-image.png"
          width={208}
          height={208}
          alt="커피머신 이미지"
        />
      </div>
      <h1 className="h3">상대방의 고민은 무엇일까요?</h1>
    </div>
  )
}
