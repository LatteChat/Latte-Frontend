import { useRef, useState, useEffect } from 'react'
import UserProfile from '@/shared/components/UserProfile'
import { AgeType } from '@/features/user/types/User'

const AGE_CLASS_MAPPING: Record<AgeType, string> = {
  UNDER_10: "bg-[url('/images/badge/badge-image-1.png')]",
  TWENTIES: "bg-[url('/images/badge/badge-image-2.png')]",
  THIRTIES: "bg-[url('/images/badge/badge-image-3.png')]",
  FORTIES: "bg-[url('/images/badge/badge-image-4.png')]",
  FIFTIES: "bg-[url('/images/badge/badge-image-5.png')]",
  SIXTIES_AND_ABOVE: "bg-[url('/images/badge/badge-image-6.png')]",
} as const

export default function ProfileUploader({
  existProfile,
  onSelectFile,
  age,
}: {
  existProfile: string
  onSelectFile: (file: File) => void
  age: AgeType
}) {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  useEffect(() => {
    if (existProfile) setPreviewUrl(existProfile)
  }, [existProfile])

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      onSelectFile(file)

      // 미리보기 URL 생성
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  // 컴포넌트 unmount 시 blob url 해제
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
        onChange={handleChange}
      />

      <div
        className="relative aspect-square h-20 w-20 cursor-pointer"
        onClick={handleClick}
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
