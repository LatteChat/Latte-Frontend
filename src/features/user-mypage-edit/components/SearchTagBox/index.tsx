import { useState } from 'react'
import SearchInput from '../../components/SearchInput'
import useGetTagListQuery from '@/features/user-mypage-edit/hooks/useGetTagListQuery'

export default function SearchTagBox({
  tags,
  setTags,
}: {
  tags: string[]
  setTags: React.Dispatch<React.SetStateAction<string[]>>
}) {
  const [searchTag, setSearchTag] = useState('')
  const { data: searchedTags } = useGetTagListQuery({ keyword: searchTag })

  return (
    <div className="relative mb-10 mt-4">
      <SearchInput tags={tags} setTags={setTags} />

      {searchedTags?.length > 0 && (
        <ul className="absolute top-12 w-full rounded-10 border bg-white">
          {searchedTags?.map((searchedTag: string) => {
            return (
              <li className="text-gray-8 flex items-center justify-between border-b border-gray-2 px-5 py-3 last:border-none">
                <span className="b6">#{searchedTag}</span>
                <button
                  type="button"
                  onClick={() => {
                    const newTag = searchedTag.trim()

                    if (!newTag) return
                    if (searchedTags.includes(newTag)) return
                    if (searchedTags.length >= 3) {
                      alert('태그는 최대 3개까지 추가할 수 있습니다.')
                      return
                    }

                    setTags((prev) => [...prev, newTag])
                    setSearchTag('')
                  }}
                >
                  <img src="/icons/add-icon.svg" />
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
