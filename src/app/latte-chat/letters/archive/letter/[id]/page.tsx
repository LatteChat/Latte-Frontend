'use client'

import { useUserInfo } from '@/shared/hooks/useUserInfo'
import JuniorLetterArchiveDetailPage from '@/pages/latte-chat/letter/archive/detail/junior/ui'
import SeniorLetterArchiveDetailPage from '@/pages/latte-chat/letter/archive/detail/senior/ui'

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
