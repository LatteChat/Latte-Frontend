'use client'

import { useRouter } from 'next/navigation'
import TitleHeader from '../TitleHeader'
import MoreButton from '@/features/letter-archive-detail-junior/components/MoreButton'

export default function LetterCardLayout({
  title,
  actionButton,
  children,
  isMore,
}: {
  title: string
  actionButton?: React.ReactNode
  children: React.ReactNode
  isMore?: boolean
}) {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <div>
      <TitleHeader title="글 보관함" />

      <div className="min-h-[calc(100svh-8rem)] bg-secondary-brown-1 px-5 pb-24 pt-5">
        <section className="rounded-10 bg-white p-5 shadow-border">
          <header className="relative mb-10 flex items-center justify-center">
            <button onClick={handleBack} className="absolute left-0">
              <img src="/icons/close-icon.svg" />
            </button>
            <h1 className="h4">{title}</h1>
            {isMore && <MoreButton />}
          </header>

          <article>{children}</article>

          <div className="mt-5">{actionButton}</div>
        </section>
      </div>
    </div>
  )
}
