import useSaveLetterImageMutation from '@/features/letter-image-generate/hooks/useSaveLetterImageMutation'
import ImageGeneratingModal from '@/features/modal/components/ImageGeneratingModal'
import Button from '@/shared/components/Button'
import { useModal } from '@/shared/contexts/ModalContext'
import { useRouter } from 'next/navigation'

export default function LetterImageGenerateButton({
  type = 'DEFAULT',
  bgColor,
  letterId,
}: {
  type?: 'DEFAULT' | 'MODAL' | 'CARD'
  bgColor?: string
  letterId: number
}) {
  const router = useRouter()

  const { openModal } = useModal()
  const { mutate: saveLetterImageMutate } = useSaveLetterImageMutation(letterId)

  const handleSendLetter = () => {
    openModal(<ImageGeneratingModal />)
    saveLetterImageMutate(
      {
        letterId,
      },
      {
        onSuccess: (data) => {
          router.push(`/latte-chat/letters/archive/letter/${letterId}/generate`)
        },
      }
    )
  }

  return (
    <Button
      buttonText="사연 보내기"
      bgColor={bgColor}
      onClick={handleSendLetter}
      type={type}
    />
  )
}
