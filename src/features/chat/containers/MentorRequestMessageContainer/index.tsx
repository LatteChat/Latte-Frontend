export default function MentorRequestMessageContainer() {
  return (
    <div className="flex flex-col gap-5">
      <p className="b10 flex items-center justify-center rounded-10 bg-white py-2">
        땡땡님이 왕눈이님께 멘토 신청을 했어요!
      </p>
      <div className="flex justify-center gap-5">
        <button className="flex items-center justify-center rounded-10 bg-white px-5 py-2">
          <span className="b10">수락하기</span>
        </button>
        <button className="flex items-center justify-center rounded-10 bg-gray-300 px-5 py-2">
          <span className="b10">거절하기</span>
        </button>
      </div>
    </div>
  )
}
