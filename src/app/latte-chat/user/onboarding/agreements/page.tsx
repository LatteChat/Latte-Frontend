'use client'

import { useState } from 'react'
import useSaveJuniorUser from '@/features/user/hooks/useSaveJuniorUser'
import useSaveSeniorUser from '@/features/user/hooks/useSaveSeniorUser'
import Checkbox from '@/features/user/onboarding/components/Checkbox'
import StepButton from '@/features/user/onboarding/components/StepButton'
import StepTitle from '@/features/user/onboarding/components/StepTitle'
import {
  useSignupState,
  useSignupStore,
} from '@/features/user/stores/signupStore'

export default function UserOnBoardingAgreementsPage() {
  const [agreeList, setAgreeList] = useState([false, false])
  const pushAllowed = useSignupStore((state) => state.pushAllowed)
  const setPushAllowed = useSignupStore((state) => state.setPushAllowed)
  const memberType = useSignupStore((state) => state.memberType)
  const signupInfoReset = useSignupStore((state) => state.reset)
  const signupState = useSignupState()
  const { mutate: saveJuniorUserMutate } = useSaveJuniorUser()
  const { mutate: saveSeniorUserMutate } = useSaveSeniorUser()

  const handleClickNextButton = async () => {
    if (typeof window === 'undefined') return

    const memberId = localStorage.getItem('memberId')
    if (!memberId) return
    if (agreeList.some((agree) => agree == false)) {
      alert('필수 동의를 모두 체크했는지 확인해주세요')
      return
    }

    if (memberType === 'JUNIOR') {
      saveJuniorUserMutate({
        memberId: Number(memberId),
        body: signupState,
      })
    } else {
      saveSeniorUserMutate({
        memberId: Number(memberId),
        body: {
          ...signupState,
          categoryList: signupState.categoryList.map((category) => ({
            category,
          })),
        },
      })
    }

    signupInfoReset()
  }

  return (
    <main className="relative flex h-auto min-h-main flex-1 flex-col space-y-8 bg-gray-100 px-5 py-10 pb-32">
      <StepTitle title="필요한 항목에 동의해주세요." activeIndex={4} />

      <fieldset className="flex flex-col items-start gap-4">
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            className="aspect-square h-4 w-4 text-base font-normal"
            onChange={(e) => {
              if (e.target.checked) {
                setAgreeList([true, true])
                setPushAllowed(true)
              } else {
                setAgreeList([false, false])
                setPushAllowed(false)
              }
            }}
          />
          <span className="h4">전체 동의</span>
        </label>
        <Checkbox
          label="개인 정보 수집 동의"
          required
          isCheck={agreeList[0]}
          onChange={(e) => {
            const nAgreeList = [...agreeList]
            nAgreeList[0] = !nAgreeList[0]
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
      </fieldset>

      <footer className="absolute inset-x-0 bottom-0 w-full px-5 pb-11">
        <StepButton value="완료" onClick={handleClickNextButton} />
      </footer>
    </main>
  )
}
