import Comment, { reply } from '../Comment'

export default function ReplyList({
  replies,
  commentAction: { isOpen, setIsOpen },
}: {
  replies: any[]
  commentAction: {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  }
}) {
  const handleClickMoreButton = () => {
    setIsOpen(false)
  }

  return (
    <section className="flex flex-col gap-4 pt-4">
      <div className="flex flex-col gap-4">
        {isOpen &&
          replies.map((reply) => {
            const nickname = reply.juniorDetailDto
              ? reply.juniorDetailDto.name
              : reply.seniorDetailDto.name
            const profile = reply.juniorDetailDto
              ? reply.juniorDetailDto.image
              : reply.seniorDetailDto.image
            const age = reply.juniorDetailDto
              ? reply.juniorDetailDto.age
              : reply.seniorDetailDto.age

            return (
              <Comment
                key={reply.commentId}
                user={{
                  nickname,
                  profile,
                  age,
                }}
                comment={{
                  createdAt: reply.createdAt,
                  content: reply.comment,
                  likeCount: reply.heart,
                  commentCount: reply.replyCount,
                  isEdit: reply.isEdit,
                  replies: reply.replies,
                }}
                type="reply"
              />
            )
          })}
      </div>

      {isOpen && (
        <button
          className="ml-10 flex items-center"
          onClick={handleClickMoreButton}
        >
          <img
            src="/icons/up-arrow-icon.svg"
            className="aspect-square h-4 w-4"
            alt="답글 접기 아이콘"
          />
          <span className="b9 text-gray-4">답글 접기</span>
        </button>
      )}
    </section>
  )
}
