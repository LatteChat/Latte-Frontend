'use client'

import { Suspense } from 'react'
import UserOnBoardingRoleContainer from './UserOnBoardingRoleContainer'

export default function UserOnboardingRolePage() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <UserOnBoardingRoleContainer />
    </Suspense>
  )
}
