import useGetUserQuery from '@/features/user/hooks/useGetUserInfoQuery'
import UserProfile from '@/shared/components/UserProfile'
import { useModal } from '@/shared/contexts/ModalContext'

export default function UserProfileModal({
  juniorId,
  seniorId,
}: {
  juniorId?: number
  seniorId?: number
}) {
  const { data: userInfo, error } = useGetUserQuery({
    userId: juniorId ? juniorId : seniorId,
    memberType: juniorId ? 'JUNIOR' : 'SENIOR',
  })

  const { closeModal } = useModal()

  return (
    <section className="flex w-full flex-col gap-3 rounded-10 border border-primary bg-secondary-brown-1 p-5 shadow-border">
      <button onClick={closeModal}>
        <img src="/icons/close-icon.svg" className="aspect-square h-6 w-6" />
      </button>

      <div className="flex flex-col gap-2.5">
        <div>
          <div className="flex items-center gap-1.5">
            <div className="relative flex h-10 w-10">
              <UserProfile
                profile={userInfo?.image ?? '/images/coffee-bean-image.png'}
                age={userInfo?.age}
                isView={true}
              />
            </div>

            <div className="flex w-full flex-col gap-1">
              <div className="flex flex-wrap justify-between">
                <span className="b7 text-black">{userInfo?.name}</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {userInfo?.tag?.map((tag: string) => {
                  return (
                    <span
                      key={tag}
                      className="b9 flex items-center justify-center whitespace-nowrap rounded border border-secondary-brown-2 bg-white px-2 text-black"
                    >
                      {`#${tag}`}
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {userInfo?.adopt && (
          <span className="b9 flex gap-1.5">
            채택 수<span>{userInfo?.adopt}</span>
          </span>
        )}

        <p className="b9 text-gray-6">{userInfo?.introduce}</p>
      </div>
    </section>
  )
}
