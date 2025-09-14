import HeartIcon from '@/shared/assets/icons/heart-icon.svg'
import useLikePost from '../../hooks/useLikePost'

export default function PostLikeHeartContainer({
  letterId,
  initialLike = false,
}: {
  letterId: number
  initialLike?: boolean
}) {
  const { onLike } = useLikePost({
    letterId,
  })

  return (
    <button>
      <HeartIcon
        onClick={onLike}
        color={initialLike ? '#ED1C24' : '#D9D9D9'}
        className="h-6 w-6"
      />
    </button>
  )
}
