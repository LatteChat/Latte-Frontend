export default function ArchiveTitle({
  viewState,
  setViewState,
}: {
  viewState: 'VIEW' | 'DELETE'
  setViewState: React.Dispatch<React.SetStateAction<'VIEW' | 'DELETE'>>
}) {
  return (
    <div className="relative flex h-12 items-center justify-center bg-white">
      <h1>글 보관함</h1>
      {viewState === 'DELETE' ? (
        <button
          onClick={() => setViewState('VIEW')}
          className="b5 absolute right-5 flex items-center justify-center"
        >
          삭제 취소
        </button>
      ) : (
        <button
          onClick={() => setViewState('DELETE')}
          className="absolute right-5 flex items-center justify-center"
        >
          <img src="/icons/trash-icon.svg" />
        </button>
      )}
    </div>
  )
}
