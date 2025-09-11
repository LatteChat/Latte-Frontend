'use client'

import { useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

export default function CallbackContainer() {
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const token = searchParams.get('token')
    const status = searchParams.get('status')
    const memberId = searchParams.get('memberId')

    if (!token) return

    localStorage.setItem('accessToken', token)

    if (status === 'new') {
      localStorage.setItem('memberId', memberId ?? '')
      router.replace('/latte-chat/user/onboarding?step=1')
    } else {
      router.replace('/latte-chat')
    }
  }, [searchParams, router])

  return null
}
