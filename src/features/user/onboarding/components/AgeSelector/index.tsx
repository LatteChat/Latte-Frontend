import { useSignupStore } from '@/features/user/stores/signupStore'
import { AgeType, MemberType } from '@/features/user/types/User'
import Image from 'next/image'

export default function AgeSelector({
  imgUrl,
  role,
  info,
  ages,
}: {
  imgUrl: string
  role: { label: string; value: MemberType }
  info: string
  ages: { label: string; value: AgeType }[]
}) {
  const selectedAge = useSignupStore((state) => state.age)
  const setAge = useSignupStore((state) => state.setAge)
  const setMemberType = useSignupStore((state) => state.setMemberType)

  const handleSelectAge = (age: AgeType) => {
    setAge(age)
    setMemberType(role.value)
  }

  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-center gap-5">
        <div className="bg-gray-1 flex w-full shrink-0 items-center gap-4 rounded-10 p-3">
          <Image
            src={imgUrl}
            width={66}
            height={66}
            className="aspect-square h-[4.125rem]"
            alt="역할 이미지"
          />
          <div className="flex flex-col gap-1">
            <span className="h4">{role.label}</span>
            <p className="b4 whitespace-pre-line break-keep">{info}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        {ages.map((age, index) => {
          return (
            <button
              key={index}
              className={`${selectedAge === age.value ? 'border-secondary-brown-2 bg-secondary-brown-1 text-black' : 'text-gray-5 shadow-select-button border-transparent bg-white'} flex flex-1 items-center justify-center rounded-[0.625rem] border-2 py-[0.875rem]`}
              onClick={() => handleSelectAge(age.value)}
            >
              <span className="b1">{age.label}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
