import { useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchSelectLetter } from '../services/letterService.senior.client'
import { useModal } from '@/shared/contexts/ModalContext'
import SelectLetterModal from '@/features/modal/components/SelectLetterModal'
import { useRouter } from 'next/navigation'

export default function useSelectLetterQuery({
  letterId,
}: {
  letterId: number
}) {
  const router = useRouter()
  const queryClient = useQueryClient()
  const { openModal } = useModal()

  return useMutation({
    mutationFn: ({
      letterId,
      seniorId,
    }: {
      letterId: number
      seniorId: number
    }) => fetchSelectLetter({ letterId, seniorId }),
    onSuccess: (data) => {
      console.log('사연 선택 성공:', data)

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
      console.error('사연 선택 실패:', error)
    },
  })
}
