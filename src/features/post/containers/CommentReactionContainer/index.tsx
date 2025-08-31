import { useParams } from 'next/navigation'
import useLikeCommentQuery from '../../comment/hooks/useLikeCommentQuery'
import CountWithIconButton from '../../components/CountWithIconButton'

export default function CommentReactionContainer({
  commentId,
  likeCount,
  commentCount,
  type,
}: {
  commentId: number
  likeCount: number
  commentCount: number
  type?: string
}) {
  const params = useParams<{ id: string }>()
  const letterId = Number(params.id) ?? null
  const { mutate: likeCommentMutate } = useLikeCommentQuery(letterId)

  const handleClickLikeButton = (e: React.FormEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    likeCommentMutate({
      commentId,
    })
  }

  return (
    <div className="flex gap-2">
      <CountWithIconButton
        iconUrl="/icons/empty-heart-icon.svg"
        iconName="좋아요"
        size="0.875"
        count={likeCount}
        onClick={handleClickLikeButton}
      />
      {type === 'comment' && (
        <CountWithIconButton
          iconUrl="/icons/comment-icon.svg"
          iconName="댓글"
          count={commentCount}
        />
      )}
    </div>
  )
}
