import Image from 'next/image'

export default function UserProfile({ profile }: { profile: string }) {
  return (
    <>
      <Image
        src={profile}
        alt="작성자 프로필 이미지"
        className="absolute bottom-0 left-0 aspect-square w-[90%] rounded-full object-cover"
        width={38}
        height={38}
      />
      <span className="absolute right-0 top-0 inline-block aspect-square w-[35%] rounded-full bg-red-400"></span>
    </>
  )
}
