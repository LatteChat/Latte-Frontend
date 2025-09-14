'use client'

import { useUserInfo } from '@/shared/hooks/useUserInfo'
import JuniorLetterListPage from '@/pages/latte-chat/letter/main/junior/ui'
import SeniorLetterListPage from '@/pages/latte-chat/letter/main/senior/ui'

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
