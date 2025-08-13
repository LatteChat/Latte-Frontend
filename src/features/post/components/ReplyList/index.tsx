import Comment, { reply } from '../Comment'

export default function ReplyList({
  replies,
  commentAction: { isOpen, setIsOpen },
}: {
  replies: reply[]
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
      <div>
        {isOpen &&
          replies.map((reply) => (
            <Comment key={reply.id} comment={reply} type="reply" />
          ))}
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
          <span className="b9 text-gray-500">접기</span>
        </button>
      )}
    </section>
  )
}
