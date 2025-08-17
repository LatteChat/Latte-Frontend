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

    if (!token || !memberId) return

    localStorage.setItem('accessToken', token)
    localStorage.setItem('memberId', memberId)

    if (status === 'new') {
      router.replace('/latte-chat/user/onboarding/welcome')
    } else {
      router.replace('/latte-chat')
    }
  }, [searchParams, router])

  return null
}
