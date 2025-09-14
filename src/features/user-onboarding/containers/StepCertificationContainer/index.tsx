'use client'

import { useModal } from '@/shared/contexts/ModalContext'
import { useState } from 'react'
import CertificatiotnSuccessModal from '../../components/CertificationSuccessModal'
import CertificationButton from '../../components/CertificationButton'
import StepTitle from '../../components/StepTitle'
import StepButton from '../../components/StepButton'

const CERTIFICATION_BUTTONS: {
  id: 'kakao' | 'phone' | 'ipin'
  iconUrl: string
  title: string
  description: string
}[] = [
  {
    id: 'kakao',
    iconUrl: '/icons/kakao-icon.svg',
    title: '카카오 인증',
    description: '카카오 인증서로 인증을 진행해요.',
  },
  {
    id: 'phone',
    iconUrl: '/icons/phone-icon.svg',
    title: '휴대전화 인증',
    description: '본인 명의의 전화번호로 인증을 진행해요.',
  },
  {
    id: 'ipin',
    iconUrl: '/icons/lock-icon.svg',
    title: '아이핀(I-PIN) 인증',
    description: '아이핀으로 인증을 진행해요.',
  },
]

export default function OnboardingCertificationContainer({
  onNext,
}: {
  onNext: (count?: number) => void
}) {
  const [selectedCertification, setSelectedCertification] = useState<
    'kakao' | 'phone' | 'ipin' | null
  >(null)
  const [isAvailable, setIsAvailable] = useState(true)
  const { openModal } = useModal()

  const handleClickCertificationButton = () => {
    openModal(<CertificatiotnSuccessModal onNext={onNext} />)
  }

  return (
    <main className="relative h-auto min-h-main space-y-8 bg-white px-5 py-10 pb-32">
      <StepTitle
        title={'나이를 인증해주세요'}
        intro={'선택하신 연령대에 대한 인증을 진행할게요.'}
        activeIndex={2}
      />

      <div>
        <div className="flex w-full flex-col gap-4">
          {CERTIFICATION_BUTTONS.map((button) => {
            return (
              <CertificationButton
                key={button.id}
                title={button.title}
                iconUrl={button.iconUrl}
                description={button.description}
                isSelect={selectedCertification === button.id}
                onClick={() => setSelectedCertification(button.id)}
              />
            )
          })}
        </div>
        {!isAvailable && (
          <span className="b9 text-secondary-red">* 입력이 필요합니다</span>
        )}
      </div>

      <div className="absolute inset-x-0 bottom-0 w-full px-5 pb-11">
        <StepButton value="인증하기" onClick={handleClickCertificationButton} />
      </div>
    </main>
  )
}
