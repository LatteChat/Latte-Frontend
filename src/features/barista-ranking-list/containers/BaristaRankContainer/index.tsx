import Image from 'next/image'
import BaristaItem from '../../components/BaristaItem'
import BaristaRankEmpty from '../../components/BaristaRankEmpty'

export default function BaristaRankContainer({
  initialBaristas,
}: {
  initialBaristas: any
}) {
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
          {initialBaristas && initialBaristas.length > 0 ? (
            initialBaristas.map((barista: any, index: any) => (
              <BaristaItem
                key={barista.seniorId}
                nickname={barista.name}
                profile={barista.image}
                rank={index + 1}
              />
            ))
          ) : (
            <BaristaRankEmpty />
          )}
        </ul>
      </div>
    </section>
  )
}
