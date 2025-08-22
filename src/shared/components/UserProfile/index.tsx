import Image from 'next/image'

export default function UserProfile({
  profile = '/images/coffee-bean-image.png',
}: {
  profile: string
}) {
  return (
    <div className="relative aspect-square h-full w-full shrink-0 rounded-full">
      <Image
        src={profile}
        alt="작성자 프로필 이미지"
        className="bg-primary absolute bottom-0 left-0 aspect-square w-[93%] rounded-full object-cover"
        width={50}
        height={50}
      />
      <span className="absolute right-0 top-0 inline-block aspect-square w-[40%] rounded-full bg-[url('/images/badge/badge-image-1.png')] bg-cover bg-center bg-no-repeat"></span>
    </div>
  )
}
