import useSaveLetterImageQuery from '@/features/letter/hooks/useSaveLetterImageQuery'
import ImageGeneratingModal from '@/features/modal/components/ImageGeneratingModal'
import Button from '@/shared/components/Button'
import { useModal } from '@/shared/contexts/ModalContext'
import { useQueryClient } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

export default function SendLetterButtonContainer() {
  const params = useParams()
  const letterId = params.id ? Number(params.id) : null
  const queryClient = useQueryClient()

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
              queryClient.invalidateQueries({
                queryKey: ['/junior/letter/detail', letterId],
              })
            },
          }
        )
      }}
    />
  )
}
