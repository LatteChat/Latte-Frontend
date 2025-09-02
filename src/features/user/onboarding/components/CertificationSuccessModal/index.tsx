import { useModal } from '@/shared/contexts/ModalContext'
import { useRouter } from 'next/navigation'

export default function CertificatiotnSuccessModal() {
  const router = useRouter()
  const { closeModal } = useModal()

  return (
    <div className="flex w-full flex-col items-center gap-5 bg-white px-5 py-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="h2 text-black">인증이 완료되었어요</h1>
        <p className="b6 text-gray-5">나이가 인증되었어요.</p>
      </div>
      <button
        onClick={() => {
          router.push(`/latte-chat/user/onboarding/role`)
          closeModal()
        }}
        className="w-full rounded-10 bg-secondary-brown-2 py-2.5 text-white"
      >
        다음
      </button>
    </div>
  )
}
