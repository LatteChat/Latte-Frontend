'use client'

import { useRouter } from 'next/navigation'
import TitleHeader from '../TitleHeader'

export default function LetterCardLayout({
  title,
  actionButton,
  children,
}: {
  title: string
  actionButton?: React.ReactNode
  children: React.ReactNode
}) {
  const router = useRouter()

  const handleBack = () => {
    if (document.referrer) {
      router.back()
    } else {
      router.push('/latte-chat/letters/archive') // fallback
    }
  }

  return (
    <div>
      <TitleHeader title="글 보관함" />

      <div className="min-h-[calc(100svh-8rem)] bg-secondary-brown-1 px-5 pb-24 pt-5">
        <section className="rounded-10 bg-white p-5 shadow-border">
          <header className="mb-10 flex items-center justify-between">
            <button onClick={handleBack}>
              <img src="/icons/close-icon.svg" />
            </button>
            <h1 className="h4">{title}</h1>
            <img src="/icons/more-icon.svg" />
          </header>

          <article>{children}</article>

          <div className="mt-5">{actionButton}</div>
        </section>
      </div>
    </div>
  )
}
