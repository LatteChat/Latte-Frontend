'use client'

import { useUserInfo } from '@/shared/hooks/useUserInfo'
import SeniorLetterListArchiveCategoryContainer from './SeniorLetterListArchiveCategoryContainer'
import JuniorLetterArchiveListPage from '@/pages/latte-chat/letter/archive/junior/ui'

export default function LettersArchiveCategoryPage() {
  const { data: userInfo } = useUserInfo()

  return (
    <>
      {userInfo?.memberType === 'SENIOR' ? (
        <SeniorLetterListArchiveCategoryContainer />
      ) : (
        <JuniorLetterArchiveListPage />
      )}
    </>
  )
}
