'use client'

import { useRouter } from 'next/navigation'
import Button from '@/shared/components/Button'
import BottomNavigationBar from '@/shared/components/BottomNavigationBar'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="relative flex h-svh w-full max-w-md flex-col">
      <div className="relative flex h-full w-full flex-col overflow-auto">
        <div className="flex flex-1 flex-col items-center justify-center gap-4 px-5 py-5">
          <h1 className="text-6xl font-bold text-gray-2">404</h1>
          <p className="b4 whitespace-pre-line text-black">
            {`요청하신 페이지를 찾을 수가 없습니다.\n홈으로 이동해 다양한 콘텐츠를 만나보세요.`}
          </p>
        </div>

        <div className="w-full px-5 pb-10">
          <Button
            buttonText="홈으로 돌아가기"
            onClick={() => {
              router.replace('/latte-chat')
            }}
          ></Button>
        </div>
      </div>

      <BottomNavigationBar />
    </div>
  )
}
