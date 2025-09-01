import useSaveLetterImageQuery from '@/features/letter/hooks/useSaveLetterImageQuery'
import ImageGeneratingModal from '@/features/modal/components/ImageGeneratingModal'
import Button from '@/shared/components/Button'
import { useModal } from '@/shared/contexts/ModalContext'
import { useParams, useRouter } from 'next/navigation'

export default function SendLetterButtonContainer() {
  const router = useRouter()
  const params = useParams()
  const letterId = params.id ? Number(params.id) : null

  if (!letterId) return

  const { openModal } = useModal()
  const { mutate: saveLetterImageMutate } = useSaveLetterImageQuery(letterId)

  return (
    <Button
      buttonText="사연 보내기"
      bgColor="bg-secondary-brown-4"
      onClick={() => {
        openModal(<ImageGeneratingModal />)
        saveLetterImageMutate(
          {
            letterId,
          },
          {
            onSuccess: (data) => {
              router.push(
                `/latte-chat/letters/archive/letter/${letterId}/generate`
              )
            },
          }
        )
      }}
    />
  )
}
