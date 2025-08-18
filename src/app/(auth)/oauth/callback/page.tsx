'use client'

import { Suspense } from 'react'
import CallbackContainer from './CallbackContainer'

export default function CallbackPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CallbackContainer />
    </Suspense>
  )
}
