import { useModal } from '@/shared/contexts/ModalContext'
import useSaveLetterImageMutation from '../../hooks/useSaveLetterImageMutation'
import ImageGeneratingModal from '@/features/modal/components/ImageGeneratingModal'
import { useQueryClient } from '@tanstack/react-query'

export default function LetterImageRetryButton({
  letterId,
}: {
  letterId: number
}) {
  const queryClient = useQueryClient()

  const { openModal } = useModal()
  const { mutate: saveLetterImageMutate } = useSaveLetterImageMutation(letterId)

  const handleSendLetter = () => {
    openModal(<ImageGeneratingModal />)
    saveLetterImageMutate(
      {
        letterId,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ['/junior/letter/detail', letterId],
          })
          queryClient.invalidateQueries({
            queryKey: ['/junior/coffee'],
          })
        },
      }
    )
  }

  return (
    <button
      onClick={handleSendLetter}
      className="b4 flex w-full items-center justify-center gap-2 rounded-full bg-secondary-brown-1 py-2 shadow-border"
    >
      <img src="/icons/picture-icon.svg" />
      이미지 다시 생성하기
    </button>
  )
}
