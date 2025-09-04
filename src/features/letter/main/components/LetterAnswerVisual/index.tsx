import Image from 'next/image'

export default function LetterAnswerVisual() {
  return (
    <div className="relative flex flex-col items-center">
      <div className="relative flex items-start justify-center">
        <div className="absolute -left-10 top-3">
          <div className="relative inline-block pb-[0.625rem]">
            <div className="b5 rounded-lg bg-white px-3 py-2 text-secondary-brown-4 shadow-border">
              커피 머신을 눌러보세요.
            </div>

            <img
              src="/images/speech-bubble-tail-image.svg"
              className="absolute bottom-0 left-3"
            />
          </div>
        </div>

        <img
          src="/images/coffee-machine-image.png"
          width={159}
          height={239}
          alt="커피머신 이미지"
        />
      </div>
      <h1 className="h3 absolute bottom-0 text-secondary-brown-5">
        상대방의 고민은 무엇일까요?
      </h1>
    </div>
  )
}
