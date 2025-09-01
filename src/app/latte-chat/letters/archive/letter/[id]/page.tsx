'use client'

import { useUserInfo } from '@/shared/hooks/useUserInfo'
import JuniorArchiveLetterDetailContainer from './JuniorArchiveLetterDetailContainer'
import SeniorArchiveLetterDetailContainer from './SeniorArchiveLetterDetailContainer'

export default function ArchiveLetterDetailPage() {
  const { data: userInfo } = useUserInfo()

  return (
    <>
      {userInfo?.memberType === 'SENIOR' ? (
        <SeniorArchiveLetterDetailContainer />
      ) : (
        <JuniorArchiveLetterDetailContainer />
      )}
    </>
  )
}
