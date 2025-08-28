export default function VoiceCallEndBubble({ isMe }: { isMe: boolean }) {
  return (
    <div
      className={`flex w-full flex-col gap-2 whitespace-pre-wrap rounded-[1.25rem] px-4 py-2 text-black ${
        isMe
          ? 'items-end rounded-tr-none bg-[#D9B46A]'
          : 'items-start rounded-tl-none bg-neutral-200'
      }`}
    >
      <span className="b9 rounded-10 bg-white px-2 py-1">영상통화</span>
      <p className="b12 w-full whitespace-pre-wrap break-words">12시간 25분</p>
    </div>
  )
}
