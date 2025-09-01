import { AgeType } from '@/features/user/types/User'
import Image from 'next/image'

const AGE_CLASS_MAPPING: Record<AgeType, string> = {
  UNDER_10: "bg-[url('/images/badge/badge-image-1.png')]",
  TWENTIES: "bg-[url('/images/badge/badge-image-2.png')]",
  THIRTIES: "bg-[url('/images/badge/badge-image-3.png')]",
  FORTIES: "bg-[url('/images/badge/badge-image-4.png')]",
  FIFTIES: "bg-[url('/images/badge/badge-image-5.png')]",
  SIXTIES_AND_ABOVE: "bg-[url('/images/badge/badge-image-6.png')]",
} as const

export default function UserProfile({
  profile = '/images/coffee-bean-image.png',
  age,
}: {
  profile?: string
  age?: AgeType
}) {
  return (
    <div className="relative aspect-square h-full w-full shrink-0 rounded-full">
      <Image
        src={profile}
        alt="작성자 프로필 이미지"
        className="absolute bottom-0 left-0 aspect-square w-[93%] rounded-full bg-primary object-cover"
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
