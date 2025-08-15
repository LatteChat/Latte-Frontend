export default function SendLetterModalContainer() {
  return (
    <div className="flex w-full flex-col items-center gap-5 rounded-10 bg-white px-5 py-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="h2">이 사연을 전송할까요?</h1>
        <p className="b6 whitespace-pre-line text-center">{`이제 사연을 보낼 수 있어요.\n보내기 전, 사연을 AI 생성형 이미지로 만들어줄게요.`}</p>
      </div>

      <div className="flex w-full gap-2">
        <button className="b4 flex-1 rounded-10 bg-gray-400 py-3">
          전송하기
        </button>
        <button className="b4 flex-1 rounded-10 bg-gray-400 py-3">
          보관하기
        </button>
      </div>
    </div>
  )
}
