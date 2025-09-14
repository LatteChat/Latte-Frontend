export default function InactiveAnswerEditBox({
  setIsEditorFocus,
  button,
}: {
  setIsEditorFocus: React.Dispatch<React.SetStateAction<boolean>>
  button: React.ReactNode
}) {
  return (
    <div
      className="flex h-full w-full flex-1 justify-center pt-5"
      onClick={() => setIsEditorFocus(true)}
    >
      <p className="b1 text-gray-5">사연에 대한 답변을 작성해보세요.</p>
      {button}
    </div>
  )
}
