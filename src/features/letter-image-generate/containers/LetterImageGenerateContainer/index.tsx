'use client'

import LetterSendButton from '@/features/letter-send/components/LetterSendButton'
import { useGetJuniorLetterDetail } from '@/features/letter/detail/hooks/useGetJuniorLetterDetail'
import NavTabBar from '@/shared/components/NavTabBar'
import Topbar from '@/shared/components/Topbar'
import { useParams, useRouter } from 'next/navigation'
import Button from '@/shared/components/Button'
import LetterImageRetryButton from '../../components/LetterImageRetryButton'

const TOPBAR_ICONS = [
  {
    iconUrl: '/icons/alarm-icon.svg',
    alt: '알람',
    href: '',
  },
  {
    iconUrl: '/icons/search-icon.svg',
    alt: '검색',
    href: '',
  },
]

export default function LetterImageGenerateContainer() {
  const params = useParams()
  const letterId = params?.id ? Number(params?.id) : null
  const router = useRouter()

  if (!letterId) return

  const { data: letterDetail } = useGetJuniorLetterDetail({
    letterId,
  })

  return (
    <div className="bg-secondary-brown-1">
      <div className="sticky top-0 z-10 flex flex-col gap-4 bg-white">
        <Topbar icons={TOPBAR_ICONS} />
        <NavTabBar />
      </div>

      <div className="w-full px-5 py-10">
        <div className="w-fufll flex flex-col items-center rounded-10 bg-white p-5 shadow-border">
          <h1 className="h3 mb-10">AI 사진이 생성되었어요!</h1>

          <div className="flex w-full flex-col items-center gap-4">
            {letterDetail?.image && (
              <div className="px-5">
                <img
                  src={letterDetail?.image}
                  width={400}
                  height={400}
                  alt="생성된 AI 사연 이미지"
                  className="aspect-square h-64 w-64 rounded-10 object-cover shadow-border"
                />
              </div>
            )}

            <LetterImageRetryButton letterId={letterId} />
          </div>

          <div className="mt-10 flex w-full flex-col items-center gap-5">
            <p className="b6 text-black">사연을 보낼까요?</p>
            <div className="flex w-full gap-2">
              <LetterSendButton />
              <Button
                onClick={() => router.back()}
                buttonText="닫기"
                type="CARD_SMALL"
                bgColor="bg-gray-3"
                textColor="text-black"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
