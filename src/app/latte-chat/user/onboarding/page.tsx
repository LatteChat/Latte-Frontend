import OnboardingContainer from '@/features/user-onboarding/containers/OnboardingContainer'
import { Suspense } from 'react'

export default function UserOnboardingPage() {
  return (
    <Suspense>
      <OnboardingContainer />
    </Suspense>
  )
}
