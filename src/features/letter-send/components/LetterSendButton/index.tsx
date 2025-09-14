import { useParams } from 'next/navigation'
import useSendLetterMutation from '../../hooks/useSendLetterMutation'
import Button from '@/shared/components/Button'

export default function LetterSendButton() {
  const params = useParams()
  const letterId = params?.id ? Number(params?.id) : null

  if (!letterId) return

  const { mutate: sendLetterMutate } = useSendLetterMutation()

  const handleSendLetter = () => {
    sendLetterMutate({
      letterId: letterId!,
    })
  }

  return (
    <Button type="CARD_SMALL" onClick={handleSendLetter} buttonText="보내기" />
  )
}
