'use client'

import { QueryClient, QueryCache, MutationCache } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export function createQueryClient(router: ReturnType<typeof useRouter>) {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: (failureCount, error: any) => {
          if (error?.status === 401 || error?.status === 403) return false
          return failureCount < 3
        },
      },
    },
    queryCache: new QueryCache({
      onError: (error: any) => {
        if (error?.status === 401 || error?.status === 403) {
          router.push('/login')
        }
      },
    }),
    mutationCache: new MutationCache({
      onError: (error: any) => {
        if (error?.status === 401 || error?.status === 403) {
          router.push('/login')
        }
      },
    }),
  })
}
