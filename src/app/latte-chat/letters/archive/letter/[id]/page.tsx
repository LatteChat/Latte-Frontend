'use client'

import { useUserInfo } from '@/shared/hooks/useUserInfo'
import SeniorArchiveLetterDetailContainer from './SeniorArchiveLetterDetailContainer'
import JuniorLetterArchiveDetailPage from '@/pages/latte-chat/letter/archive/detail/junior/ui'

export default function ArchiveLetterDetailPage() {
  const { data: userInfo } = useUserInfo()

  return (
    <>
      {userInfo?.memberType === 'SENIOR' ? (
        <SeniorArchiveLetterDetailContainer />
      ) : (
        <JuniorLetterArchiveDetailPage />
      )}
    </>
  )
}
