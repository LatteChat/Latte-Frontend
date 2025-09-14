import Button from '@/shared/components/Button'
import { useModal } from '@/shared/contexts/ModalContext'
import { useParams } from 'next/navigation'
import AdoptConfirmModal from '../AdoptConfirmModal'

export default function AdoptAnswerButton() {
  const params = useParams()
  const letterId = params?.id ? Number(params?.id) : null

  if (!letterId) return

  const { openModal } = useModal()

  const handleAdoptLetter = () => {
    openModal(<AdoptConfirmModal letterId={letterId} />)
  }

  return (
    <Button buttonText="채택하기" type="CARD" onClick={handleAdoptLetter} />
  )
}
