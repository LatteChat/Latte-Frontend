'use client'

import JuniorLetterArchiveDetailPage from '@/screens/latte-chat/letter/archive/detail/junior/ui'
import SeniorLetterArchiveDetailPage from '@/screens/latte-chat/letter/archive/detail/senior/ui'
import { useUserInfo } from '@/shared/hooks/useUserInfo'

export default function ArchiveLetterDetailPage() {
  const { data: userInfo } = useUserInfo()

  return (
    <>
      {userInfo?.memberType === 'SENIOR' ? (
        <SeniorLetterArchiveDetailPage />
      ) : (
        <JuniorLetterArchiveDetailPage />
      )}
    </>
  )
}
