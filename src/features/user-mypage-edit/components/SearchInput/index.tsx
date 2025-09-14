import { useState } from 'react'

export default function SearchInput({
  tags,
  setTags,
}: {
  tags: string[]
  setTags: React.Dispatch<React.SetStateAction<string[]>>
}) {
  const [searchTag, setSearchTag] = useState('')

  const handleChangeTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTag(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const newTag = searchTag.trim()

      if (!newTag) return
      if (tags.includes(newTag)) return
      if (tags.length >= 3)
        return alert('태그는 최대 3개까지 추가할 수 있습니다.')

      setTags((prev) => [...prev, newTag])
      setSearchTag('')
    }
  }

  return (
    <div className="flex items-center gap-2 rounded-10 bg-gray-1 px-2">
      <input
        placeholder="#검색하거나 직접 태그 추가하기"
        className="b12 flex-1 bg-transparent py-2.5 outline-none placeholder:text-gray-5"
        onChange={handleChangeTag}
        onKeyDown={handleKeyDown}
        value={searchTag}
      />
      <button
        type="button"
        className="b12 rounded bg-secondary-brown-2 px-1 py-0.5 text-white"
        onClick={() => {
          const newTag = searchTag.trim()

          if (!newTag) return
          if (tags.includes(newTag)) return
          if (tags.length >= 3)
            return alert('태그는 최대 3개까지 추가할 수 있습니다.')

          setTags((prev) => [...prev, newTag])
          setSearchTag('')
        }}
      >
        추가
      </button>
    </div>
  )
}
