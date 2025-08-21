'use client'

import { useUserInfo } from '@/shared/hooks/useUserInfo'
import JuniorLettersContainer from './JuniorLettersContainer'
import SeniorLettersContainer from './SeniorLettersContainer'

export default function LettersPage() {
  const { data: userInfo } = useUserInfo()

  return (
    <>
      {userInfo?.memberType !== 'SENIOR' ? (
        <SeniorLettersContainer />
      ) : (
        <JuniorLettersContainer />
      )}
    </>
  )
}
