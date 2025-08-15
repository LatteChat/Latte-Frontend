import { Subscription } from '../../types/Subscription'

export default function SubsriptionCard({
  subscription: { title, explanations, period, price },
  isSelect,
  onClick,
}: {
  subscription: Subscription
  isSelect: boolean
  onClick: () => void
}) {
  return (
    <section
      className={`${isSelect ? 'border-gray-300' : 'border-transparent'} flex h-full min-h-[9.3rem] w-full flex-col justify-between gap-3 rounded-[1.25rem] border-[3px] bg-white p-5`}
      onClick={() => onClick()}
    >
      <div className="flex gap-10">
        <h3 className="h4">{title}</h3>
        <ul className="b10 flex flex-col gap-3">
          {explanations.map((explanation) => {
            return (
              <li key={explanation} className="flex items-center gap-1">
                <img
                  src="/icons/check-icon.svg"
                  className="aspect-square h-[0.875rem] w-[0.875rem]"
                />
                {explanation}
              </li>
            )
          })}
        </ul>
      </div>

      <span className="b1 flex items-center gap-1">
        {period}
        <span className="h2 whitespace-nowrap">{`${price.toLocaleString('ko-KR')}원`}</span>
      </span>
    </section>
  )
}
