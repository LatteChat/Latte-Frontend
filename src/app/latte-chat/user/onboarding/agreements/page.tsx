'use client'

import Checkbox from '@/features/user/onboarding/components/Checkbox'
import StepButton from '@/features/user/onboarding/components/StepButton'
import StepTitle from '@/features/user/onboarding/components/StepTitle'
import { useRouter } from 'next/navigation'

export default function UserOnBoardingAgreementsPage() {
  const router = useRouter()

  const handleClickNextButton = () => {
    router.push(`/latte-chat/user/onboarding/start`)
  }

  return (
    <main className="min-h-main relative flex h-auto flex-1 flex-col space-y-8 bg-gray-100 px-5 py-10 pb-32">
      <StepTitle title="필요한 항목에 동의해주세요." activeIndex={4} />

      <fieldset className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="aspect-square h-4 w-4 text-base font-normal"
          />
          <span className="h4">전체 동의</span>
        </div>
        <Checkbox label="개인 정보 수집 동의" required>
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
        <Checkbox label="커피챗 이용 규정" required>
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
        <Checkbox label="이벤트성 푸시 알림 동의">
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
