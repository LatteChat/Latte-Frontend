import { useUserInfo } from '@/shared/hooks/useUserInfo'
import useSendAnswerMutation from '../../hooks/useSendAnswerMutation'

export default function AnswerSendButton({
  letterId,
  answerId,
}: {
  letterId: number
  answerId: number
}) {
  const { data: userInfo } = useUserInfo()
  const { mutate: sendAnswerMutate } = useSendAnswerMutation({ letterId })

  return (
    <button
      onClick={() => {
        if (!userInfo?.seniorId) return
        sendAnswerMutate({
          letterId,
          answerId,
        })
      }}
      className="h4 w-full rounded-10 bg-secondary-brown-4 py-4 text-white"
    >
      답변 보내기
    </button>
  )
}
