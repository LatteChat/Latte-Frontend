import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useModal } from '@/shared/contexts/ModalContext'
import { useRouter } from 'next/navigation'
import { fetchSelectLetter } from '../services/letterSelect.clinet'
import SelectLetterModal from '../components/SelectLetterModal'
import { useToast } from '@/shared/contexts/ToastContext'

export default function useSelectLetterMutation({
  letterId,
}: {
  letterId: number
}) {
  const router = useRouter()
  const queryClient = useQueryClient()
  const { openModal } = useModal()
  const { showToast } = useToast()

  return useMutation({
    mutationFn: ({
      letterId,
      seniorId,
    }: {
      letterId: number
      seniorId: number
    }) => fetchSelectLetter({ letterId, seniorId }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['/senior/letter/list'],
      })
      queryClient.invalidateQueries({
        queryKey: ['/senior/letter/select/count'],
      })

      openModal(<SelectLetterModal />)
      router.replace('/latte-chat/letters')
    },
    onError: (error) => {
      showToast('사연 선택에 실패했습니다. 다시 시도해주세요')
    },
  })
}
