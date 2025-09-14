'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LettersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('accessToken')
    setToken(stored)

    if (!stored) {
      router.replace('/login')
    }
  }, [router])

  if (!token) {
    return null
  }

  return <>{children}</>
}
