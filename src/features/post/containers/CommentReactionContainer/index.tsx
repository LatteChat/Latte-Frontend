import CountWithIconButton from '../../components/CountWithIconButton'

export default function CommentReactionContainer({
  likeCount,
  commentCount,
  type,
}: {
  likeCount: number
  commentCount: number
  type?: string
}) {
  return (
    <div className="flex gap-2">
      <CountWithIconButton
        iconUrl="/icons/empty-heart-icon.svg"
        iconName="좋아요"
        size="0.875"
        count={likeCount}
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
