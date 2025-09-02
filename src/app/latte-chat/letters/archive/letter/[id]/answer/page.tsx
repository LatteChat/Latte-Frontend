'use client'

import { useParams } from 'next/navigation'
import LetterAnswerContainer from './LetterAnswerContainer'

export default function LetterAnswerPage() {
  const params = useParams()
  const letterId = params.id ? Number(params.id) : null

  if (!letterId) {
    console.log('권한 없음')
  }

  return <LetterAnswerContainer letterId={letterId!} />
}
