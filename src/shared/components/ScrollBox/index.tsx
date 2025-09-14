'use client'

import { useLetterViewStateActions } from '@/features/letter-list-senior/stores/letterViewStateStore'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

export default function ScrollBox({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  if (!pathname) return null

  const containerRef = useRef<HTMLDivElement | null>(null)
  const { setScrollY, getScrollY } = useLetterViewStateActions()

  // 저장
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      setScrollY(pathname, container.scrollTop)
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [pathname, setScrollY])

  // 복원
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const saved = getScrollY(pathname)
    if (saved > 0) {
      container.scrollTo({ top: saved, behavior: 'auto' })
    }
  }, [pathname, getScrollY])

  return (
    <main ref={containerRef} className="flex-1 overflow-auto">
      {children}
    </main>
  )
}
