import CommunityHeader from '@/features/daum/components/CommunityHeader'
import IssueCard from '@/features/daum/components/IssueCard'
import LatteChatCard from '@/features/daum/components/LatteChatCard'
import Image from 'next/image'
import Link from 'next/link'

export default function DaumCommunity() {
  return (
    <div>
      <CommunityHeader />

      <main className="min-h-[calc(100svh-8.5rem)] bg-gray-100 pb-5">
        <div className="flex w-full items-center justify-center gap-10 pl-8 pr-11">
          <p className="b2">[체크] 환급금: 300,000원</p>
          <Image
            src="/images/community-banner-image.svg"
            width={93}
            height={80}
            alt="환급금 이미지"
          />
        </div>

        <div className="flex flex-col gap-5">
          <Link
            href={`${process.env.NEXT_PUBLIC_BASE_URL}/oauth2/authorization/kakao`}
          >
            <LatteChatCard />
          </Link>
          <IssueCard />
        </div>
      </main>
    </div>
  )
}
