'use client'

import { useUserInfo } from '@/shared/hooks/useUserInfo'
import LettersArchiveCategoryContainer from './LettersArchiveCategoryContainer'
import SeniorLetterListArchiveCategoryContainer from './SeniorLetterListArchiveCategoryContainer'

export default function LettersArchiveCategoryPage() {
  const { data: userInfo } = useUserInfo()

  return (
    <>
      {userInfo?.memberType === 'SENIOR' ? (
        <SeniorLetterListArchiveCategoryContainer />
      ) : (
        <LettersArchiveCategoryContainer />
      )}
    </>
  )
}
