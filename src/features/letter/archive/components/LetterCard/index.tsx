'use client'

import Image from 'next/image'
import LetterAnswerCard from '../LetterAnswerCard'
import { useRouter } from 'next/navigation'
import LetterActionBox from '../LetterActionBox'

export default function LetterCard({ title }: { title: string }) {
  const router = useRouter()

  const handleBack = () => {
    if (document.referrer) {
      router.back()
    } else {
      router.push('/latte-chat/letters/archive') // fallback
    }
  }

  return (
    <section className="rounded-10 bg-white p-5">
      <header className="mb-10 flex items-center justify-between">
        <button onClick={handleBack}>
          <img src="/icons/close-icon.svg" />
        </button>
        <h1 className="h4">{title}</h1>
        <img src="/icons/bookmark-icon.svg" />
      </header>

      <article>
        <header className="flex flex-col items-start gap-2">
          <span className="b9 bg-secondary-brown-2 inline-block rounded px-2 py-0.5 text-white">
            취업 및 회사
          </span>
          <h2 className="h3 text-black">
            IT 디자이너 취업 시장, 요즘 어떤가요?
          </h2>
        </header>

        <figure className="p-5">
          <Image
            src="/images/test-image.png"
            alt="사연 이미지"
            className="aspect-square w-full rounded-10 object-cover"
            width={255}
            height={255}
          />
        </figure>

        <p className="b1 text-gray-7">
          자취방에 처음 이사 온 날, 밤새 누가 한말은 열다 닫는 소리가 들렸다.
          "위층 소리인가 보다" 하고 넘겼지만, 다음 날 아침 우편함에 쪽지가 하나
          꽂혀 있었다. "밤에는 그 문 열지 마세요. 저 혼자 살 땐 괜찮았는데, 이제
          돌아가세요?" 쪽지에는 그 쪽지에 적힌 이름이, 이 집 전 세입자
          이름이었다는 거다.
          <span className="text-black">&nbsp;&nbsp;...더보기</span>
        </p>

        <LetterAnswerCard />
      </article>

      <LetterActionBox
        description="답변을 채택하시겠어요?"
        buttonText="채택하기"
      />
    </section>
  )
}
