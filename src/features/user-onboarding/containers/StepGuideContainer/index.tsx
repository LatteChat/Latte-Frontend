'use client'

import { useState } from 'react'
import useSaveJuniorUser from '@/features/user-onboarding/hooks/useSaveJuniorUserMutation'
import useSaveSeniorUser from '@/features/user-onboarding/hooks/useSaveSeniorUserMutation'
import {
  useSignupState,
  useSignupStore,
} from '@/features/user/stores/signupStore'
import StepTitle from '../../components/StepTitle'
import GuideItem from '../../components/GuideItem'
import Checkbox from '../../components/Checkbox'
import StepButton from '../../components/StepButton'

const GUIDE_BUTTONS: {
  imageUrl: string
  title: string
  description: string
}[] = [
  {
    imageUrl: '/images/hot-coffee-image.png',
    title: '존중하는 말, 따뜻한 말',
    description: `상대방을 가족이나 친구처럼 존중해주세요.\n따뜻하게 남긴 짧은 댓글도 큰 힘이 됩니다.`,
  },
  {
    imageUrl: '/images/heart-hand-image.png',
    title: '책임감과 진정성',
    description: `한 번 받은 사연은 책임감을 갖고 답변해주세요.\n답변, 사연을 모두 소중히 여겨주세요.`,
  },
  {
    imageUrl: '/images/warning-image.png',
    title: '커뮤니티 신고 시스템',
    description: `가이드라인 위반 사항을 발견하면 신고해주세요.\n단순한 의견 차이로 인한 신고는 금지하고 있어요.`,
  },
]

export default function OnboardingGuideContainer({
  onNext,
}: {
  onNext: (count?: number) => void
}) {
  const memberType = useSignupStore((state) => state.memberType)
  const signupInfoReset = useSignupStore((state) => state.reset)
  const signupState = useSignupState()
  const { mutate: saveJuniorUserMutate } = useSaveJuniorUser()
  const { mutate: saveSeniorUserMutate } = useSaveSeniorUser()
  const [isAvailable, setIsAvailable] = useState(true)
  const [agreement, setAgreement] = useState(false)

  const handleClickNextButton = async () => {
    if (typeof window === 'undefined') return
    if (!agreement) {
      setIsAvailable(false)
      return
    }

    const memberId = localStorage.getItem('memberId')
    if (!memberId) return

    if (memberType === 'JUNIOR') {
      saveJuniorUserMutate(
        {
          memberId: Number(memberId),
          body: signupState,
        },
        {
          onSuccess: (data) => {
            console.log('Junior 등록 성공:', data)
            onNext()
          },
          onError: (error) => {
            console.error('Junior 등록 실패:', error)
          },
        }
      )
    } else {
      saveSeniorUserMutate(
        {
          memberId: Number(memberId),
          body: {
            ...signupState,
            categoryList: signupState.categoryList.map((category) => ({
              category,
            })),
          },
        },
        {
          onSuccess: (data) => {
            console.log('Senior 등록 성공:', data)
            onNext()
          },
          onError: (error) => {
            console.error('Senior 등록 실패:', error)
          },
        }
      )
    }

    signupInfoReset()
  }

  return (
    <main className="relative flex h-auto min-h-main flex-1 flex-col space-y-8 bg-white px-5 py-10 pb-32">
      <StepTitle title="라떼챗 매너 가이드를 읽어주세요" activeIndex={5} />

      <div className="flex flex-col gap-5">
        <h3 className="h3 text-secondary-brown-4">
          라떼챗은 따뜻한 감성 커뮤니티입니다.
        </h3>
        <div className="flex flex-col gap-4">
          {GUIDE_BUTTONS.map((guide) => {
            return (
              <GuideItem
                key={guide.title}
                title={guide.title}
                description={guide.description}
                imageUrl={guide.imageUrl}
              />
            )
          })}
        </div>

        <div>
          <Checkbox
            label="위 내용을 확인했어요."
            required
            isCheck={agreement}
            onChange={(e) => {
              setAgreement(!agreement)
            }}
            showRequired={false}
          ></Checkbox>
          {!isAvailable && (
            <span className="b9 text-secondary-red">
              * 위 항목에 동의해주세요.
            </span>
          )}
        </div>
      </div>

      <footer className="absolute inset-x-0 bottom-0 w-full px-5 pb-11">
        <StepButton value="완료" onClick={handleClickNextButton} />
      </footer>
    </main>
  )
}
