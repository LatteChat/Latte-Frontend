import { useUserInfo } from '@/shared/hooks/useUserInfo'
import useLikePostQuery from './useLikePostQuery'
import { useRouter } from 'next/navigation'

export default function useLikePost({ letterId }: { letterId: number }) {
  const router = useRouter()
  const { data: user } = useUserInfo()
  const { mutate: likePostMutate } = useLikePostQuery({
    letterId,
  })

  const handleClickLikeButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()

    if (!user) {
      router.push('/login')
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
