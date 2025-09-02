'use client'

import { useState } from 'react'
import Checkbox from '@/features/user/onboarding/components/Checkbox'
import StepButton from '@/features/user/onboarding/components/StepButton'
import StepTitle from '@/features/user/onboarding/components/StepTitle'
import { useSignupStore } from '@/features/user/stores/signupStore'
import { useRouter } from 'next/navigation'

export default function UserOnBoardingAgreementsPage() {
  const router = useRouter()
  const [agreeList, setAgreeList] = useState([false, false, false])
  const pushAllowed = useSignupStore((state) => state.pushAllowed)
  const setPushAllowed = useSignupStore((state) => state.setPushAllowed)

  const [isAvailable, setIsAvailable] = useState(true)

  const handleClickNextButton = async () => {
    if (typeof window === 'undefined') return

    if (agreeList.some((agree) => agree == false)) {
      setIsAvailable(false)
      return
    }

    router.push(`/latte-chat/user/onboarding/guide`)
  }

  return (
    <main className="relative flex h-auto min-h-main flex-1 flex-col space-y-8 bg-white px-5 py-10 pb-32">
      <StepTitle title="필요한 항목에 동의해주세요" activeIndex={5} />

      <fieldset className="flex flex-col gap-4">
        <label
          className={`${agreeList[0] ? 'border-secondary-brown-2 bg-secondary-brown-1' : 'border-transparent bg-gray-1'} flex w-full cursor-pointer items-center gap-2 rounded-10 border px-5 py-4`}
        >
          <input
            type="checkbox"
            className="peer aspect-square h-5 w-5 rounded-sm border-[1.5px] bg-white accent-secondary-brown-4"
            onChange={(e) => {
              if (e.target.checked) {
                setAgreeList([true, true, true])
                setPushAllowed(true)
              } else {
                setAgreeList([false, false, false])
                setPushAllowed(false)
              }
            }}
          />

          <span className="h4">전체 동의</span>
        </label>
        <div className="flex w-full flex-col gap-4 px-4">
          <Checkbox
            label="개인 정보 수집 동의"
            required
            isCheck={agreeList[1]}
            onChange={(e) => {
              const nAgreeList = [...agreeList]
              nAgreeList[1] = !nAgreeList[1]
              setAgreeList(nAgreeList)
            }}
          >
            <p>
              다음과 같은 글을 지속적으로 작성할 경우, 운영진에 의해 탈퇴 처리될
              수 있습니다.
            </p>
            <ul className="list-inside list-disc">
              <li>지나친 종교적, 정치적 발언</li>
              <li>타인을 향한 욕설 및 혐오 발언</li>
              <li>성적 수치심</li>
              <li>이외 분란 조장하는 글</li>
              <li>도배 및 지나친 홍보글</li>
            </ul>
          </Checkbox>
          <Checkbox
            label="커피챗 이용 규정"
            required
            isCheck={agreeList[2]}
            onChange={(e) => {
              const nAgreeList = [...agreeList]
              nAgreeList[2] = !nAgreeList[2]
              setAgreeList(nAgreeList)
            }}
          >
            <p>
              다음과 같은 글을 지속적으로 작성할 경우, 운영진에 의해 탈퇴 처리될
              수 있습니다.
            </p>
            <ul className="list-inside list-disc">
              <li>지나친 종교적, 정치적 발언</li>
              <li>타인을 향한 욕설 및 혐오 발언</li>
              <li>성적 수치심</li>
              <li>이외 분란 조장하는 글</li>
              <li>도배 및 지나친 홍보글</li>
            </ul>
          </Checkbox>
          <Checkbox
            label="이벤트성 푸시 알림 동의"
            isCheck={pushAllowed}
            onChange={(e) => {
              setPushAllowed(e.target.checked)
            }}
          >
            <p>
              다음과 같은 글을 지속적으로 작성할 경우, 운영진에 의해 탈퇴 처리될
              수 있습니다.
            </p>
            <ul className="list-inside list-disc">
              <li>지나친 종교적, 정치적 발언</li>
              <li>타인을 향한 욕설 및 혐오 발언</li>
              <li>성적 수치심</li>
              <li>이외 분란 조장하는 글</li>
              <li>도배 및 지나친 홍보글</li>
            </ul>
          </Checkbox>
        </div>
        {!isAvailable && (
          <span className="b9 text-secondary-red">
            * 필수 항목에 동의해주세요
          </span>
        )}
      </fieldset>

      <footer className="absolute inset-x-0 bottom-0 w-full px-5 pb-11">
        <StepButton value="다음" onClick={handleClickNextButton} />
      </footer>
    </main>
  )
}
