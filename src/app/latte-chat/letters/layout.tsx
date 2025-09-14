'use client'

import { useUserInfo } from '@/shared/hooks/useUserInfo'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function LettersLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { data: user, isLoading } = useUserInfo()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/login')
    }
  }, [user, isLoading, router])

  if (isLoading || !user) {
    return null
  }

  return <>{children}</>
}
