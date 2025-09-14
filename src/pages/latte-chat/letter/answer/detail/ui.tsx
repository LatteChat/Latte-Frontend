'use client'

import { AnswerDetaillFeature } from '@/features/letter-answer-detail'
import { useParams } from 'next/navigation'

export default function AnswerDetailPage() {
  const params = useParams()
  const letterId = params?.id ? Number(params?.id) : null

  if (!letterId) {
    console.log('권한 없음')
  }

  return <AnswerDetaillFeature letterId={letterId!} />
}
