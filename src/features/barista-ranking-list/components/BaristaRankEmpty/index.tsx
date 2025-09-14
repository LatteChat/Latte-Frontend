import UserProfile from '@/shared/components/UserProfile'

export default function BaristaRankEmpty() {
  return new Array(3).fill(0).map((_, index) => {
    return (
      <li
        key={index}
        className="flex items-center gap-2 rounded-10 bg-white px-5 py-1 shadow-border"
      >
        <span className="h3 w-5 text-black">0{index + 1}</span>
        <div className="flex aspect-square h-7 w-7 items-center">
          <UserProfile profile="/images/coffee-bean-image.png" />
        </div>
        <span className="b7 text-gray-5">바리스타가 없습니다</span>
      </li>
    )
  })
}
