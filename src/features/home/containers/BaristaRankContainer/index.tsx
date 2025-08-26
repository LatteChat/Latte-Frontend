import UserProfile from '@/shared/components/UserProfile'
import Image from 'next/image'
import { useGetBaristaListQuery } from '../../hooks/useGetBaristaListQuery'

export default function BaristaRankContainer() {
  const { data: baristaList } = useGetBaristaListQuery()

  return (
    <section className="flex items-center gap-4 px-5">
      <div className="relative flex h-[7.4rem] w-[8.7rem] shrink-0 flex-col items-start gap-1 rounded-10 bg-secondary-brown-4 p-4">
        <h1 className="b2 text-secondary-brown-1">이달의 바리스타</h1>
        <span className="b9 text-gray-2">* 채택 수 기준</span>
        <Image
          src="/images/trophy-image.png"
          width={500}
          height={500}
          alt="트로피 이미지"
          className="absolute bottom-0 right-1 aspect-square h-16 w-16"
        />
      </div>

      <div className="flex h-full flex-1 items-end justify-center gap-2">
        <ul className="flex w-full flex-col gap-2">
          {baristaList && baristaList.length > 0
            ? baristaList.map((barista, index) => (
                <li
                  key={barista.seniorId}
                  className="flex items-center gap-2 rounded-10 bg-white px-5 py-1 shadow-border"
                >
                  <span className="h3 w-5 text-black">0{index + 1}</span>
                  <div className="flex aspect-square h-7 w-7 items-center">
                    <UserProfile
                      profile={barista.image ?? '/images/coffee-bean-image.png'}
                    />
                  </div>
                  <span className="b7 text-gray-5">{barista.name}</span>
                </li>
              ))
            : new Array(3).fill(0).map((x, index) => {
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
              })}
        </ul>
      </div>
    </section>
  )
}
