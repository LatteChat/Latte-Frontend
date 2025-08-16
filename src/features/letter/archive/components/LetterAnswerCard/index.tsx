import Image from 'next/image'

export default function LetterAnswerCard() {
  return (
    <section className="mt-5 flex flex-col gap-4 rounded-10 bg-gray-200 p-5">
      <div className="flex flex-col items-center">
        <Image
          src="/images/test-image.png"
          alt="답변자 프로필 이미지"
          width={34}
          height={34}
          className="mb-2 aspect-square h-9 w-9 rounded-full"
        />
        <span className="b7 mb-1">고양미</span>
        <div className="flex flex-wrap justify-center gap-1">
          {new Array(3).fill(0).map((x, index) => {
            return (
              <span key={index} className="b9 rounded bg-white px-2 py-0.5">
                #고양이
              </span>
            )
          })}
        </div>
      </div>

      <p className="b4">
        자취방에 처음 이사 온 날, 밤새 누가 현관문을 열다 닫는 소리가 들렸다.
        "위층 소린가 보다" 하고 넘겼지만, 다음 날 아침 우편함에 쪽지가 하나 꽂혀
        있었다. “밤에는 그 문 열지 마세요. 저 혼자 살 땐 괜찮았는데, 이제
        둘이라서요.” 문제는 그 쪽지에 적힌 이름이, 이 집 전 세입자 이름이었다는
        거다.
      </p>

      <time className="b9 self-end text-gray-400">8월 25일</time>
    </section>
  )
}
