export default function SelectedTag({
  tag,
  setTags,
}: {
  tag: string
  setTags: React.Dispatch<React.SetStateAction<string[]>>
}) {
  const handleRemoveTag = (tagToRemove: string) => {
    setTags((prev) => prev.filter((tag) => tag !== tagToRemove))
  }

  return (
    <span
      key={tag}
      className="b6 relative rounded border border-secondary-brown-2 px-2 py-1"
    >
      <button type="button" onClick={() => handleRemoveTag(tag)}>
        <img
          src="/icons/close-circle-icon.svg"
          className="absolute -right-2 -top-2"
        />
      </button>
      #{tag}
    </span>
  )
}
