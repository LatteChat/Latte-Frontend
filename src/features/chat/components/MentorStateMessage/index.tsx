import Image from 'next/image'

const NOTICE_MESSAGE = {
  accept: `멘토 멘티가 성사되었어요.\n가벼운 인사로 시작해보세요!`,
  reject: `아쉽지만,\n멘토 멘티가 되지 못했어요`,
}

export default function MentorStateMessage({
  state = 'reject',
}: {
  state: 'accept' | 'reject'
}) {
  return (
    <div className={`flex flex-col ${state === 'reject' ? 'gap-5' : 'gap-0'}`}>
      <div className={`flex flex-col gap-5`}>
        <Image
          src="/images/test-image.png"
          width={46}
          height={46}
          className="aspect-square h-12 w-12 rounded-full"
          alt="멘토 거절 아이콘"
        />

        <p className="b11 whitespace-pre-line">{NOTICE_MESSAGE[state]}</p>
      </div>
      {state === 'reject' && (
        <div className="b10 flex items-center justify-center rounded-10 bg-white py-2">
          채팅이 종료되었습니다.
        </div>
      )}
    </div>
  )
}
