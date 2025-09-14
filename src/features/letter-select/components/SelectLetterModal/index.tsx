import Button from '@/shared/components/Button'
import { useModal } from '@/shared/contexts/ModalContext'
import { useRouter } from 'next/navigation'

export default function SelectLetterModal() {
  const router = useRouter()
  const { closeModal } = useModal()

  return (
    <div className="flex w-full flex-col items-center gap-5 bg-white px-5 py-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="h2 text-black">사연이 선택되었어요</h1>
        <p className="b6 text-gray-5">글 보관함에서 답변을 작성할 수 있어요.</p>
      </div>

      <div className="flex w-full gap-2">
        <Button
          type="MODAL"
          buttonText="글 보관함"
          onClick={() => {
            router.push(`/latte-chat/letters/archive`)
            closeModal()
          }}
        />

        <Button
          type="MODAL"
          buttonText=" 닫기"
          onClick={() => {
            closeModal()
          }}
          bgColor="bg-gray-3"
          textColor="text-black"
        />
      </div>
    </div>
  )
}
