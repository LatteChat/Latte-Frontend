'use client'

import JuniorLetterListPage from '@/screens/latte-chat/letter/main/junior/ui'
import SeniorLetterListPage from '@/screens/latte-chat/letter/main/senior/ui'
import { useUserInfo } from '@/shared/hooks/useUserInfo'

export default function LetterListRoute() {
  const { data: userInfo } = useUserInfo()

  return (
    <>
      {userInfo?.memberType === 'SENIOR' ? (
        <SeniorLetterListPage />
      ) : (
        <JuniorLetterListPage />
      )}
    </>
  )
}
