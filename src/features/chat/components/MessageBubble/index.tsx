export default function MessageBubble({
  isMe,
  message,
}: {
  isMe: boolean
  message: string
}) {
  return (
    <div
      className={`w-full whitespace-pre-wrap rounded-[1.25rem] px-4 py-2 text-black ${
        isMe ? 'rounded-tr-none bg-[#D9B46A]' : 'rounded-tl-none bg-neutral-200'
      }`}
    >
      <p className="b12 w-full whitespace-pre-wrap break-words">{message}</p>
    </div>
  )
}
