import UserProfile from '@/shared/components/UserProfile'

export default function BaristaItem({
  rank,
  profile,
  nickname,
}: {
  rank: number
  profile: string
  nickname: string
}) {
  return (
    <li className="flex items-center gap-2 rounded-10 bg-white px-5 py-1 shadow-border">
      <span className="h3 w-5 text-black">0{rank}</span>
      <div className="flex aspect-square h-7 w-7 items-center">
        <UserProfile profile={profile ?? '/images/coffee-bean-image.png'} />
      </div>
      <span className="b7 text-gray-5">{nickname}</span>
    </li>
  )
}
