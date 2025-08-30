'use client'

import { useUserInfo } from '@/shared/hooks/useUserInfo'
import LetterDetailContainer from './LetterDetailContainer'
import SeniorLetterDetailContainer from './SeniorLetterDetailContainer'

export default function LetterDetailPage() {
  const { data: userInfo } = useUserInfo()

  return (
    <>
      {userInfo?.memberType === 'SENIOR' ? (
        <SeniorLetterDetailContainer />
      ) : (
        <LetterDetailContainer />
      )}
    </>
  )
}
