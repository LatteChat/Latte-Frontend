'use client'

import BottomNavigationBar from '@/shared/components/BottomNavigationBar'
import Button from '@/shared/components/Button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()

  return (
    <div className="relative flex h-svh w-full max-w-md flex-col">
      <div className="relative flex h-full w-full flex-col overflow-auto">
        <div className="flex flex-1 flex-col items-center justify-center gap-7 px-5 py-5">
          <img src="/images/lattechat-logo.svg" className="w-44" />

          <p className="b4 whitespace-pre-line text-center text-black">
            {`로그인이 필요한 서비스입니다.\n로그인하시겠습니까?`}
          </p>
        </div>

        <div className="flex w-full gap-2 px-5 pb-10">
          <Button
            buttonText="돌아가기"
            bgColor="bg-gray-3"
            textColor="text-black"
            onClick={() => {
              router.back()
            }}
          ></Button>
          <Link
            href={`${process.env.NEXT_PUBLIC_BASE_URL}/oauth2/authorization/kakao`}
            className="w-full"
          >
            <Button buttonText="로그인하러가기"></Button>
          </Link>
        </div>
      </div>

      <BottomNavigationBar />
    </div>
  )
}
