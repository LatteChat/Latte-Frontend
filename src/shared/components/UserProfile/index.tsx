'use client'

import UserProfileModal from '@/features/modal/components/UserProfileModal'
import { AgeType } from '@/features/user/types/User'
import { useModal } from '@/shared/contexts/ModalContext'

export const AGE_CLASS_MAPPING: Record<AgeType, string> = {
  TEENAGER: "bg-[url('/images/badge/badge-image-1.png')]",
  TWENTIES: "bg-[url('/images/badge/badge-image-2.png')]",
  THIRTIES: "bg-[url('/images/badge/badge-image-3.png')]",
  FORTIES: "bg-[url('/images/badge/badge-image-4.png')]",
  FIFTIES: "bg-[url('/images/badge/badge-image-5.png')]",
  SIXTIES: "bg-[url('/images/badge/badge-image-6.png')]",
} as const

export default function UserProfile({
  profile = '/images/coffee-bean-image.png',
  age,
  isView = false,
  juniorId,
  seniorId,
}: {
  profile?: string
  age?: AgeType
  isView?: boolean
  juniorId?: number
  seniorId?: number
}) {
  const { openModal } = useModal()

  return (
    <div
      onClick={() => {
        if (!juniorId && !seniorId) return
        if (!isView) return
        openModal(<UserProfileModal juniorId={juniorId} seniorId={seniorId} />)
      }}
      className="relative aspect-square h-full w-full shrink-0 rounded-full"
    >
      <img
        src={profile}
        alt="작성자 프로필 이미지"
        className={`${isView ? 'cursor-pointer' : ''} absolute bottom-0 left-0 aspect-square w-[93%] rounded-full bg-primary object-cover`}
        width={50}
        height={50}
      />
      {age && (
        <span
          className={`absolute right-0 top-0 inline-block aspect-square w-[40%] rounded-full ${AGE_CLASS_MAPPING[age]} bg-cover bg-center bg-no-repeat`}
        ></span>
      )}
    </div>
  )
}
