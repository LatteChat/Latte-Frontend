import Button from '@/shared/components/Button'
import { useModal } from '@/shared/contexts/ModalContext'

export default function DeclarationSuccessModal() {
  const { closeModal } = useModal()
  return (
    <div className="flex w-full flex-col items-center gap-5 bg-white px-5 py-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="h2 text-black">신고가 접수되었어요</h1>
        <p className="b6 text-gray-5">
          신고 내용이 확인되면 적절한 조치가 이루어져요.
        </p>
      </div>

      <div className="flex w-full gap-2">
        <Button
          type="MODAL"
          buttonText="닫기"
          bgColor="bg-gray-3"
          textColor="text-black"
          onClick={closeModal}
        />
      </div>
    </div>
  )
}
