'use client'

import JuniorLetterArchiveListPage from '@/screens/latte-chat/letter/archive/junior/ui'
import SeniorLetterArchiveListPage from '@/screens/latte-chat/letter/archive/senior/ui'
import { useUserInfo } from '@/shared/hooks/useUserInfo'
import { Suspense } from 'react'

export default function LettersArchiveCategoryPage() {
  const { data: userInfo } = useUserInfo()

  return (
    <Suspense>
      {userInfo?.memberType === 'JUNIOR' ? (
        <JuniorLetterArchiveListPage />
      ) : (
        <SeniorLetterArchiveListPage />
      )}
    </Suspense>
  )
}
