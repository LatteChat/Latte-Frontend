'use client'

import SubsriptionCard from '@/features/chat/subscription/components/SubscriptionCard'
import {
  Subscription,
  SubscriptionType,
} from '@/features/chat/subscription/types/Subscription'
import Image from 'next/image'
import { useState } from 'react'

const SUBSCRIPTIONS: Subscription[] = [
  {
    id: 'premium',
    title: '프리미엄 구독권',
    explanations: [
      '전화/영상 통화 무제한',
      'AI 이미지 생성 무제한',
      '어쩌구 저쩌구',
    ],
    period: '월',
    price: 3800,
  },
  {
    id: 'decaffeine',
    title: '디카페인 일일권',
    explanations: ['전화/영상 통화 일일권', '전화/영상 통화 일일권2'],
    period: '30분당',
    price: 1000,
  },
]

export default function SubscriptionContainer() {
  const [selected, setSelected] = useState<SubscriptionType | null>(null)

  return (
    <div className="flex min-h-[calc(100svh-5rem)] flex-col items-center bg-gray-100 px-5 pb-14 pt-12">
      <header className="mb-5">
        <h1 className="b3 rounded-[1.25rem] bg-gray-500 px-4 py-2 text-white">
          구독 정보
        </h1>
      </header>

      <main className="flex w-full flex-col items-center gap-5">
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-2">
            <p className="h4 whitespace-pre-line">{`영상통화 무제한으로\n더욱 심도 있는 대화를 즐겨보세요!`}</p>
            <p className="b10">프리미엄 혹은 디카페인 중에 선택해주세요</p>
          </div>

          <Image
            src="/images/coffee-beans-image.svg"
            alt="커피빈 이미지"
            width={112}
            height={112}
            className="aspect-square h-28 w-28"
          />
        </div>

        <div className="flex w-full flex-col gap-4">
          {SUBSCRIPTIONS.map((subscription) => {
            return (
              <SubsriptionCard
                key={subscription.id}
                subscription={subscription}
                isSelect={subscription.id === selected}
                onClick={() => setSelected(subscription.id)}
              />
            )
          })}
        </div>

        <div className="flex flex-col items-center gap-5">
          <button className="b1 rounded-[1.25rem] bg-gray-500 px-10 py-2 text-white">
            라떼챗 구독 시작하기
          </button>
          <p className="b6 text-gray-500">언제든지 구독을 취소할 수 있습니다</p>
        </div>
      </main>

      <footer className="mt-4">
        <ul className="flex">
          <li className="b9 border-r border-gray-400 px-2 text-gray-400">
            이용 약관
          </li>
          <li className="b9 border-r border-gray-400 px-2 text-gray-400">
            개인 정보 처리 방침
          </li>
          <li className="b9 px-2 text-gray-400">고객센터</li>
        </ul>
      </footer>
    </div>
  )
}
