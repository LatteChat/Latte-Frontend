'use client'

import { useEffect, useState } from 'react'
import IntroduceTextarea from '../../components/IntroduceTextarea'
import useGetMyInfoQuery from '@/features/user/hooks/useGetMyInfoQuery'
import NicknameInput from '../../components/NicknameInput'
import SelectedTag from '../../components/SelectedTag'
import SearchTagBox from '../../components/SearchTagBox'
import useUpdateJuniorUserMutation from '@/features/user-mypage-edit/hooks/useUpdateJuniorUserMutation'
import useUpdateSeniorUserMutation from '@/features/user-mypage-edit/hooks/useUpdateSeniorUserMutation'
import ProfileUploader from '../../components/ProfileUploader'

export default function MypageEditContainer() {
  const { data: userInfo } = useGetMyInfoQuery()
  const { mutate: updateJuniorUserMutate } = useUpdateJuniorUserMutation()
  const { mutate: updateSeniorUserMutate } = useUpdateSeniorUserMutation()

  const [nickname, setNickname] = useState('')
  const [introduce, setIntroduce] = useState('')
  const [tags, setTags] = useState<string[]>([])
  const [profileImage, setProfileImage] = useState<File | null>(null)

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()

    const formData = new FormData()

    tags.forEach((tag) => formData.append('tag', tag))
    formData.append('introduce', introduce)
    formData.append('name', nickname)
    if (profileImage) {
      formData.append('image', profileImage)
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

  useEffect(() => {
    if (!userInfo) return
    setTags(userInfo.tag ?? [])
    setNickname(userInfo.name ?? '')
    setIntroduce(userInfo.introduce ?? '')
  }, [userInfo])

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
              setProfileImage={setProfileImage}
              age={userInfo?.age}
            />
            <NicknameInput nickname={nickname} setNickname={setNickname} />
          </div>

          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <SelectedTag key={tag} tag={tag} setTags={setTags} />
            ))}
          </div>
        </div>

        <SearchTagBox tags={tags} setTags={setTags} />

        <IntroduceTextarea introduce={introduce} setIntroduce={setIntroduce} />
      </form>
    </div>
  )
}
