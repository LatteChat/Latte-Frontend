'use client'

import { useUserInfo } from '@/shared/hooks/useUserInfo'
import SeniorLettersContainer from './SeniorLettersContainer'
import JuniorLetterListPage from '@/pages/latte-chat/letter/main/junior/ui'

export default function LetterListRoute() {
  const { data: userInfo } = useUserInfo()

  return (
    <>
      {userInfo?.memberType === 'SENIOR' ? (
        <SeniorLettersContainer />
      ) : (
        <JuniorLetterListPage />
      )}
    </>
  )
}
