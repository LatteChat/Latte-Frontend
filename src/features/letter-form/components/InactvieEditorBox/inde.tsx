export default function InactiveEditorBox({
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
      <p className="b12 whitespace-pre-line text-center text-gray-6">
        {`카테고리 선택 후,\n여기를 눌러 사연을 작성해보세요`}
      </p>
      {button}
    </div>
  )
}
