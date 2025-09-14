import { useModal } from '@/shared/contexts/ModalContext'
import Button from '@/shared/components/Button'

export default function AdoptSuccessModal() {
  const { closeModal } = useModal()

  return (
    <div className="flex w-full flex-col items-center gap-5 bg-white px-5 py-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="h2 text-black">채택이 완료되었어요</h1>
        <p className="b6 text-center text-gray-5">
          답변이 채택되었어요.
          <br />
          커뮤니티에 글이 게시됩니다.
        </p>
      </div>

      <div className="flex w-full gap-2">
        <Button
          buttonText="닫기"
          onClick={closeModal}
          type="MODAL"
          bgColor="bg-gray-3"
          textColor="text-black"
        />
      </div>
    </div>
  )
}
