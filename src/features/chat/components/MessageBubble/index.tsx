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
        isMe ? 'rounded-tr-none bg-primary' : 'rounded-tl-none bg-gray-1'
      }`}
    >
      <p className="b12 w-full whitespace-pre-wrap break-words">{message}</p>
    </div>
  )
}
