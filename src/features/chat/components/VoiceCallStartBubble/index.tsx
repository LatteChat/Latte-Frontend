export default function VoiceCallStartBubble({ isMe }: { isMe: boolean }) {
  return (
    <div
      className={`flex w-full flex-col gap-2 whitespace-pre-wrap rounded-[1.25rem] px-4 py-2 text-black ${
        isMe
          ? 'items-end rounded-tr-none bg-primary'
          : 'bg-gray1 items-start rounded-tl-none'
      }`}
    >
      <span className="b9 rounded-10 bg-white px-2 py-1">영상통화</span>
      <p className="b12 w-full whitespace-pre-wrap break-words">
        통화를 시작합니다
      </p>
    </div>
  )
}
