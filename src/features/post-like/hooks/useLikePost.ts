import { useUserInfo } from '@/shared/hooks/useUserInfo'
import useLikePostQuery from './useLikePostQuery'

export default function useLikePost({ letterId }: { letterId: number }) {
  const { data: user } = useUserInfo()
  const { mutate: likePostMutate } = useLikePostQuery({
    letterId,
  })

  const handleClickLikeButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()

    if (!user) {
      console.warn('로그인이 필요합니다')
      return
    }

    const userId = user.memberType === 'JUNIOR' ? user.juniorId : user.seniorId

    if (!userId) return
    if (!letterId) return

    likePostMutate({
      letterId,
      userId,
      memberType: user.memberType,
    })
  }

  return { onLike: handleClickLikeButton }
}
