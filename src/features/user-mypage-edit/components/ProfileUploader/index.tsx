import { useRef, useState, useEffect } from 'react'
import UserProfile, { AGE_CLASS_MAPPING } from '@/shared/components/UserProfile'
import { AgeType } from '@/features/user/types/User'

export default function ProfileUploader({
  existProfile,
  setProfileImage,
  age,
}: {
  existProfile: string
  setProfileImage: React.Dispatch<React.SetStateAction<File | null>>
  age: AgeType
}) {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleClickProfile = () => {
    fileInputRef.current?.click()
  }

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setProfileImage(file)

      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  useEffect(() => {
    if (existProfile) setPreviewUrl(existProfile)
  }, [existProfile])

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl)
    }
  }, [previewUrl])

  return (
    <div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChangeFile}
      />

      <div
        className="relative aspect-square h-20 w-20 cursor-pointer"
        onClick={handleClickProfile}
      >
        <span
          className={`absolute right-0 top-0 z-20 inline-block aspect-square w-[40%] rounded-full ${
            AGE_CLASS_MAPPING[age]
          } bg-cover bg-center bg-no-repeat`}
        ></span>
        <div className="absolute bottom-0 left-0 z-10 flex aspect-square w-[93%] items-center justify-center rounded-full bg-black/50">
          <img src="/icons/profile-focus-icon.svg" />
        </div>

        <UserProfile profile={previewUrl ?? '/images/coffee-bean-image.png'} />
      </div>
    </div>
  )
}
