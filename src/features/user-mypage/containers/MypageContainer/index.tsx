import useGetMyInfoQuery from '@/features/user/hooks/useGetMyInfoQuery'
import NavTabBar from '@/shared/components/NavTabBar'
import Topbar from '@/shared/components/Topbar'
import MypageFooter from '../../components/Footer'
import SettingBox from '../../components/SettingBox'
import MenuBox from '../../components/MenuBox'
import UserInfoBox from '../../components/UserInfoBox'
import PremiumBox from '../../components/PremiumBox'

const TOPBAR_ICONS = [
  {
    iconUrl: '/icons/alarm-icon.svg',
    alt: '알람',
    href: '',
  },
  {
    iconUrl: '/icons/search-icon.svg',
    alt: '검색',
    href: '',
  },
]

export default function MypageContainer() {
  const { data: userInfo } = useGetMyInfoQuery()

  return (
    <div>
      <div className="sticky top-0 z-10 flex flex-col gap-4 bg-white">
        <Topbar icons={TOPBAR_ICONS} />
        <NavTabBar />
      </div>

      <div className="h-auto min-h-main w-full bg-white">
        <div className="flex flex-col px-5 pb-5 pt-4">
          <UserInfoBox
            name={userInfo?.name}
            image={userInfo?.image}
            tags={userInfo?.tag}
            age={userInfo?.age}
            type={userInfo?.type}
            adopt={userInfo?.adopt ?? 0}
          />
          <MenuBox />
          <PremiumBox isPremium={false} />
        </div>

        <hr className="mb-5 h-[5px] bg-gray-2" />

        <SettingBox />

        <MypageFooter />
      </div>
    </div>
  )
}
