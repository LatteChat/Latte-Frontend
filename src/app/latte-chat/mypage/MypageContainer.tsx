import { Fragment } from 'react'
import useGetMyInfoQuery from '@/features/user/hooks/useGetMyInfoQuery'
import UserInfoBox from '@/features/user/mypage/components/UserInfoBox'
import NavTabBar from '@/shared/components/NavTabBar'
import Topbar from '@/shared/components/Topbar'
import Link from 'next/link'
import RightArrowIcon from '@/shared/assets/icons/right-arrow-icon.svg'

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

const SETTING_ICONS = [
  {
    iconUrl: '/icons/text-icon.svg',
    title: '글자 크기',
    href: '',
  },
  {
    iconUrl: '/icons/language-icon.svg',
    title: '언어 선택',
    href: '',
  },
  {
    iconUrl: '/icons/user-icon.svg',
    title: '사용자 관리',
    href: '',
  },
  {
    iconUrl: '/icons/darkmode-icon.svg',
    title: '다크 모드',
    href: '',
  },
  {
    iconUrl: '/icons/setting-fill-icon.svg',
    title: '설정',
    href: '',
  },
]

const FOOTER_CONTENT1 = ['로그아웃', '전체보기', 'PC화면', '다음앱', '고객센터']
const FOOTER_CONTENT2 = [
  '서비스 약관',
  '청소년보호정책',
  '라떼챗 이용 약관',
  '개인정보처리방침',
]

export default function MypageContainer() {
  const { data: userInfo } = useGetMyInfoQuery()
  console.log(userInfo)

  const MENU_ICONS = [
    {
      iconUrl: '/icons/edit-icon.svg',
      title: '프로필 수정',
      href: '/latte-chat/mypage/edit',
    },
    {
      iconUrl: '/icons/comment-rectangle-icon.svg',
      title: userInfo?.type === 'SENIOR' ? '내가 쓴 답변' : '내가 쓴 사연',
      href: '',
    },
    {
      iconUrl: '/icons/comment-round-icon.svg',
      title: '내가 쓴 댓글',
      href: '',
    },
    {
      iconUrl: '/icons/coffee-bean-icon.svg',
      title: '포인트',
      href: '',
    },
    {
      iconUrl: '/icons/present-icon.svg',
      title: '스토어',
      href: '/latte-chat/store',
    },
    {
      iconUrl: '/icons/bookmark-icon.svg',
      title: '스크랩',
      href: '',
    },
  ]

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

          <div className="mb-5 flex w-full flex-col rounded-10 border bg-white p-4 shadow">
            <div className="flex">
              {MENU_ICONS.slice(0, 3).map((menu, index) => {
                return (
                  <Link
                    href={menu.href}
                    key={menu.title}
                    className="flex flex-1 flex-col items-center justify-center gap-2 border-r border-gray-2 pb-3 pt-1 last:border-none"
                  >
                    <img
                      src={menu.iconUrl}
                      alt={menu.title}
                      className="aspect-square h-6 w-6"
                    />
                    <span className="b4 text-black">{menu.title}</span>
                  </Link>
                )
              })}
            </div>
            <hr className="my-2" />
            <div className="flex">
              {MENU_ICONS.slice(3, 6).map((menu) => {
                return (
                  <Link
                    href={menu.href}
                    key={menu.title}
                    className="flex flex-1 flex-col items-center justify-center gap-2 border-r border-gray-2 pb-1 pt-3 last:border-none"
                  >
                    <img
                      src={menu.iconUrl}
                      alt={menu.title}
                      className="aspect-square h-6 w-6"
                    />
                    <span className="b4 text-black">{menu.title}</span>
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="rounded-10 bg-latte-gradient-3 p-0.5">
            <div className="flex w-full items-center justify-between rounded-lg bg-latte-gradient-4 px-5 pb-4 pt-5">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <span className="h4 text-secondary-brown-4">라떼챗</span>
                  <span className="b9 inline-block rounded-full bg-black px-1 py-[2px] text-white">
                    프리미엄
                  </span>
                </div>
                <p className="b10 text-gray-5">
                  다음 결제 예정일: 2025년 9월 16일
                </p>
              </div>
              <button className="b10 flex items-center gap-1 rounded-10 bg-gray-2 px-2 py-1 text-black">
                변경하기
                <img
                  src="/icons/next-arrow-icon.svg"
                  className="aspect-square h-3 w-3"
                />
              </button>
            </div>
          </div>
        </div>

        <hr className="mb-5 h-[5px] bg-gray-2" />

        <section className="flex flex-col gap-5 px-5">
          {SETTING_ICONS.map((setting, index) => {
            return (
              <div key={setting.title} className="flex items-center space-x-4">
                <img
                  src={setting.iconUrl}
                  className="aspect-square h-6 w-6 shrink-0"
                  alt={setting.title}
                />
                <span className="b1 flex-1 text-black">{setting.title}</span>

                <RightArrowIcon
                  className="aspect-square h-6 w-6 shrink-0"
                  color="#000000"
                />
              </div>
            )
          })}
        </section>

        <footer className="b9 mb-6 mt-10 flex w-full flex-col items-center justify-start gap-4 text-gray-4">
          <div className="flex gap-2">
            {FOOTER_CONTENT1.map((content, index) => {
              let hasLine = true
              if (index === FOOTER_CONTENT1.length - 1) {
                hasLine = false
              }
              return (
                <Fragment key={content}>
                  <span>{content}</span>
                  {hasLine && <hr className="h-3 w-[1px] bg-gray-4" />}
                </Fragment>
              )
            })}
          </div>
          <div className="flex gap-2">
            {FOOTER_CONTENT2.map((content, index) => {
              let hasLine = true
              if (index === FOOTER_CONTENT2.length - 1) {
                hasLine = false
              }
              return (
                <Fragment key={content}>
                  <span>{content}</span>
                  {hasLine && <hr className="h-3 w-[1px] bg-gray-4" />}
                </Fragment>
              )
            })}
          </div>
        </footer>
      </div>
    </div>
  )
}
