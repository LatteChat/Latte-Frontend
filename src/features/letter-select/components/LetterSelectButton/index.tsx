import useGetSelectedLetterCountQuery from '@/features/letter-list-senior/hooks/useGetSelectedLetterCountQuery'
import { useUserInfo } from '@/shared/hooks/useUserInfo'
import useSelectLetterMutation from '../../hooks/useSelectLetterMutation'
import { useToast } from '@/shared/contexts/ToastContext'

const CAROUSEL_STYLE = 'b4 py-3 rounded-10'
const LIST_STYLE = 'b4 rounded-10 py-2'
const CARD_STYLE = 'h4 py-3.5 rounded-10'

export default function LetterSelectButton({
  letterId,
  type,
}: {
  letterId: number
  type: 'CAROUSEL' | 'LIST' | 'CARD'
}) {
  if (!letterId) return

  const { data: userInfo } = useUserInfo()
  const { data: selectedLetterCount } = useGetSelectedLetterCountQuery(
    userInfo ? { seniorId: userInfo.seniorId! } : undefined
  )
  const { mutate: selectLetterMutate } = useSelectLetterMutation({
    letterId,
  })
  const { showToast } = useToast()

  const handleSelectLetter = () => {
    if ((selectedLetterCount ?? 5) >= 5) {
      showToast('사연은 5개까지 선택할 수 있습니다')
      return
    }
    selectLetterMutate({
      letterId,
      seniorId: userInfo?.seniorId!,
    })
  }

  const style = () => {
    switch (type) {
      case 'CAROUSEL':
        return CAROUSEL_STYLE
      case 'LIST':
        return LIST_STYLE
      case 'CARD':
      default:
        return CARD_STYLE
    }
  }

  return (
    <button
      onClick={handleSelectLetter}
      className={`${style()} w-full flex-1 bg-secondary-brown-2 text-white`}
    >
      {`선택하기 (${selectedLetterCount}/5)`}
    </button>
  )
}
