'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { notFound } from 'next/navigation'

import StepWelcome from '../StepWelcomeContainer'
import StepIntro from '../StepIntroContainer'
import StepNickname from '../StepNicknameContainer'
import StepAge from '../StepAgeContainer'
import StepCertification from '../StepCertificationContainer'
import StepRole from '../StepRoleContainer'
import StepCategory from '../StepCategoryContainer'
import StepIntroduce from '../StepIntroduceContainer'
import StepAgreements from '../StepAgreementsContainer'
import StepGuide from '../StepGuideContainer'
import StepStart from '../StepStartContainer'

const STEPS = [
  StepWelcome,
  StepIntro,
  StepNickname,
  StepAge,
  StepCertification,
  StepRole,
  StepCategory,
  StepIntroduce,
  StepAgreements,
  StepGuide,
  StepStart,
]

export default function OnboardingContainer() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const step = Number(searchParams.get('step') ?? 1)

  if (step <= 0 || step >= 12) {
    notFound()
  }

  const StepComponent = STEPS[step - 1]

  const next = (count?: number) => {
    if (step < STEPS.length) {
      router.push(`/latte-chat/user/onboarding?step=${step + (count ?? 1)}`)
    }
  }

  return <StepComponent onNext={next} />
}
