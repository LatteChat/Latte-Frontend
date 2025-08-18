import StepButton from '@/features/user/onboarding/components/StepButton'
import { useSignupStore } from '@/features/user/stores/signupStore'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function UserOnBoardingRoleContainer() {
  const router = useRouter()
  const memberType = useSignupStore((state) => state.memberType)

  const handleClickNextButton = () => {
    router.push('/latte-chat/user/onboarding/category')
  }

  return (
    <div className="relative flex h-auto min-h-main flex-1 flex-col space-y-8 bg-gray-100 px-5 py-10 pb-32 pt-0">
      <main className="flex flex-col items-center gap-9 pt-[13vh]">
        <Image
          src={
            memberType === 'SENIOR'
              ? '/images/milk-image.png'
              : '/images/shot-image.png'
          }
          width={158}
          height={158}
          className="aspect-square h-40 w-40"
          alt="역할 이미지"
        />
        <h2 className="h2 whitespace-pre-line text-center">{`${memberType === 'SENIOR' ? '멘토' : '멘티'}로 설정되었어요!\n이제부터 ${memberType === 'SENIOR' ? '답변' : '사연'}을 작성할 수 있어요.`}</h2>
      </main>

      <footer className="absolute inset-x-0 bottom-0 w-full px-5 pb-11">
        <StepButton value="다음" onClick={handleClickNextButton} />
      </footer>
    </div>
  )
}
