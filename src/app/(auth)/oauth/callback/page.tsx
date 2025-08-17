'use client'

import { useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

export default function CallbackPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const token = searchParams.get('token')
  const status = searchParams.get('status')

  if (!token) return

  localStorage.setItem('accessToken', token)

  useEffect(() => {
    if (token && status === 'new') {
      router.replace('/latte-chat/user/onboarding/welcome')
    } else {
      router.replace('/latte-chat')
    }
  }, [token, router])

  return <></>
}
