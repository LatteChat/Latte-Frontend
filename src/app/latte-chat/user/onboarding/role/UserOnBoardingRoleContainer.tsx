import StepButton from '@/features/user/onboarding/components/StepButton'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'

export default function UserOnBoardingRoleContainer() {
  const router = useRouter()
  const params = useSearchParams()
  const role = params.get('role') // mentor mentee

  // role이 없을 경우

  const handleClickNextButton = () => {
    router.push('/latte-chat/user/onboarding/category')
  }

  return (
    <div className="min-h-main relative flex h-auto flex-1 flex-col space-y-8 bg-gray-100 px-5 py-10 pb-32 pt-0">
      <main className="flex flex-col items-center gap-9 pt-[13vh]">
        <Image
          src={
            role === 'mentor'
              ? '/images/milk-image.png'
              : '/images/shot-image.png'
          }
          width={158}
          height={158}
          className="aspect-square h-40 w-40"
          alt="역할 이미지"
        />
        <h2 className="h2 whitespace-pre-line text-center">{`${role === 'mentor' ? '멘토' : '멘티'}로 설정되었어요!\n이제부터 ${role === 'mentor' ? '답변' : '사연'}을 작성할 수 있어요.`}</h2>
      </main>

      <footer className="absolute inset-x-0 bottom-0 w-full px-5 pb-11">
        <StepButton value="다음" onClick={handleClickNextButton} />
      </footer>
    </div>
  )
}
