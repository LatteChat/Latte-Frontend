'use client'

import { useUserInfo } from '@/shared/hooks/useUserInfo'
import JuniorLetterArchiveListPage from '@/pages/latte-chat/letter/archive/junior/ui'
import SeniorLetterArchiveListPage from '@/pages/latte-chat/letter/archive/senior/ui'

export default function LettersArchiveCategoryPage() {
  const { data: userInfo } = useUserInfo()

  return (
    <>
      {userInfo?.memberType === 'JUNIOR' ? (
        <JuniorLetterArchiveListPage />
      ) : (
        <SeniorLetterArchiveListPage />
      )}
    </>
  )
}
