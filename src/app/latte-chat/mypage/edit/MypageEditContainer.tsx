import useGetMyInfoQuery from '@/features/user/hooks/useGetMyInfoQuery'
import useGetTagListQuery from '@/features/user/hooks/useGetTagListQuery'
import useUpdateJuniorUser from '@/features/user/hooks/useUpdateJuniorUser'
import useUpdateSeniorUser from '@/features/user/hooks/useUpdateSeniorUser'
import ProfileUploader from '@/features/user/mypage/container/ProfileUploader'
import { AgeType } from '@/features/user/types/User'
import { useEffect, useState } from 'react'

export default function MypageEditContainer() {
  const { data: userInfo } = useGetMyInfoQuery()

  console.log(userInfo)
  const [selectedTags, setSelectedTags] = useState<string[]>(
    userInfo?.tag ?? []
  )

  useEffect(() => {
    if (!userInfo) return
    setSelectedTags(userInfo.tag ?? [])
    setNickname(userInfo.name ?? '')
    setIntroduce(userInfo.introduce ?? '')
  }, [userInfo])

  const [nickname, setNickname] = useState('')
  const [searchTag, setSearchTag] = useState('')
  const [introduce, setIntroduce] = useState('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const { mutate: updateJuniorUserMutate } = useUpdateJuniorUser()
  const { mutate: updateSeniorUserMutate } = useUpdateSeniorUser()

  const { data: searchedTags } = useGetTagListQuery({ keyword: searchTag })

  console.log(searchedTags)

  const handleChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value)
  }

  const handleChangeTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTag(e.target.value)
  }

  const handleChangeIntroduce = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduce(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const newTag = searchTag.trim()

      if (!newTag) return
      if (selectedTags.includes(newTag)) return
      if (selectedTags.length >= 3)
        return alert('태그는 최대 3개까지 추가할 수 있습니다.')

      setSelectedTags((prev) => [...prev, newTag])
      setSearchTag('')
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setSelectedTags((prev) => prev.filter((tag) => tag !== tagToRemove))
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()

    const formData = new FormData()

    selectedTags.forEach((tag) => formData.append('tag', tag))
    formData.append('introduce', introduce)
    formData.append('name', nickname)

    if (selectedFile) {
      formData.append('image', selectedFile)
    }

    if (userInfo.type === 'SENIOR') {
      if (!userInfo?.seniorId) return

      updateSeniorUserMutate({
        seniorId: userInfo?.seniorId,
        payload: formData,
      })
    } else {
      if (!userInfo?.juniorId) return

      updateJuniorUserMutate({
        juniorId: userInfo?.juniorId,
        payload: formData,
      })
    }
  }

  return (
    <div className="h-full">
      <div className="flex justify-center py-3 shadow-bottom-line">
        <h1 className="b2">프로필 수정</h1>
      </div>

      <form
        onSubmit={handleSave}
        className="relative flex h-full flex-col px-5 py-7"
      >
        <button
          type="submit"
          className="b6 absolute right-5 top-4 rounded-10 bg-secondary-brown-2 px-2 py-1 text-white"
        >
          저장하기
        </button>

        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col items-center gap-1.5">
            <ProfileUploader
              existProfile={userInfo?.image}
              onSelectFile={(file) => setSelectedFile(file)}
              age={userInfo.age}
            />

            <div className="flex w-48 gap-1 border-b border-gray-5">
              <input
                value={nickname}
                onChange={handleChangeNickname}
                maxLength={10}
                className="w-full bg-transparent text-black outline-none"
              />
              <span className="text-gray-5">{nickname.length}/10</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {selectedTags.map((tag) => (
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
            ))}
          </div>
        </div>

        <div className="relative mb-10 mt-4">
          <div className="flex gap-2 rounded-10 bg-gray-1 px-2">
            <input
              placeholder="#검색하거나 직접 태그 추가하기"
              className="b12 flex-1 bg-transparent py-2.5 outline-none placeholder:text-gray-5"
              onChange={handleChangeTag}
              onKeyDown={handleKeyDown}
              value={searchTag}
            />
            <img src="/icons/search-icon.svg" />
          </div>

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
                        if (selectedTags.includes(newTag)) return
                        if (selectedTags.length >= 3) {
                          alert('태그는 최대 3개까지 추가할 수 있습니다.')
                          return
                        }

                        setSelectedTags((prev) => [...prev, newTag])
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

        <div className="flex flex-1 flex-col gap-4">
          <h3>자기소개</h3>
          <textarea
            value={introduce}
            onChange={handleChangeIntroduce}
            className="b1 w-full flex-1 resize-none rounded-10 px-4 py-5 shadow-border outline-none"
          />
        </div>

        {/* ✅ 파일 선택 후 파일명 보여주기 */}
        {selectedFile && (
          <p className="b6 mt-2 text-gray-6">{selectedFile.name}</p>
        )}
      </form>
    </div>
  )
}
