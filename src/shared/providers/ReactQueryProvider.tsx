'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { createQueryClient } from '../libs/queryClient'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [queryClient] = useState(() => createQueryClient(router))

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
