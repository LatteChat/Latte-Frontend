import Image from 'next/image'

export default function VoiceCallRequestBubble() {
  return (
    <div className="overflow-hidden rounded-[1.25rem] bg-white">
      <Image
        src="/images/welcome-image.png"
        alt="영상통화 이미지"
        width={182}
        height={244}
      />
      <div className="flex flex-col items-center px-4 pb-5 pt-2">
        <p className="b10 mb-3">영상통화를 요청했습니다.</p>
        <button className="b6 w-full rounded-10 bg-gray-200 py-2">
          참여하기
        </button>
      </div>
    </div>
  )
}
