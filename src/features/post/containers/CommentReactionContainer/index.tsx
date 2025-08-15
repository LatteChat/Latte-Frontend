import CountWithIconButton from '../../components/CountWithIconButton'

export default function CommentReactionContainer({
  likeCount,
  commentCount,
  type,
  commentAction: { setIsOpen },
}: {
  likeCount: number
  commentCount: number
  type?: string
  commentAction: {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  }
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
          onClick={() => {
            setIsOpen(true)
          }}
        />
      )}
    </div>
  )
}
