import NavTabBar from '@/shared/components/NavTabBar'
import Topbar from '@/shared/components/Topbar'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

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

const MENU_ICONS = [
  {
    iconUrl: '/icons/tag-icon.svg',
    alt: '칭호',
    href: '',
  },
  {
    iconUrl: '/icons/comment-rectangle-icon.svg',
    alt: '내가 쓴 글',
    href: '',
  },
  {
    iconUrl: '/icons/comment-round-icon.svg',
    alt: '내가 쓴 댓글',
    href: '',
  },
  {
    iconUrl: '/icons/coffee-bean-icon.svg',
    alt: '포인트',
    href: '',
  },
  {
    iconUrl: '/icons/present-icon.svg',
    alt: '스토어',
    href: '',
  },
  {
    iconUrl: '/icons/calendar-icon.svg',
    alt: '캘린더',
    href: '',
  },
]

const SETTING_ICONS = [
  {
    iconUrl: '/icons/text-icon.svg',
    alt: '글자 크기',
    href: '',
  },
  {
    iconUrl: '/icons/language-icon.svg',
    alt: '언어 선택',
    href: '',
  },
  {
    iconUrl: '/icons/user-icon.svg',
    alt: '사용자 관리',
    href: '',
  },
  {
    iconUrl: '/icons/darkmode-icon.svg',
    alt: '다크 모드',
    href: '',
  },
  {
    iconUrl: '/icons/setting-fill-icon.svg',
    alt: '설정',
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
  return (
    <div>
      <div className="sticky top-0 z-10 flex flex-col gap-4 bg-white">
        <Topbar icons={TOPBAR_ICONS} />
        <NavTabBar />
      </div>

      <div className="h-auto min-h-main w-full bg-white">
        <div className="flex flex-col px-5 pb-5 pt-4">
          <section className="relative flex flex-col items-center pb-4 pt-2">
            <button className="b6 absolute right-0 top-0 rounded-xl bg-gray-500 px-2 py-1 text-white">
              인증
            </button>
            <div className="relative">
              <Image
                src="/images/test-image.png"
                className="aspect-square h-[5.4rem] w-[5.4rem] rounded-full"
                alt="프로필 이미지"
                width={91}
                height={91}
              />
              <span className="absolute right-0 top-0 aspect-square h-6 w-6 rounded-full bg-red-400"></span>
            </div>
            <span className="b1 mb-3 mt-2">디자인마스터</span>
            <div className="flex gap-2">
              {new Array(3).fill(0).map((_, index) => {
                return (
                  <span
                    key={index}
                    className="b6 rounded border border-black bg-white px-2 py-1"
                  >
                    #10년째 대리
                  </span>
                )
              })}
            </div>
          </section>

          <div className="mb-5 flex w-full flex-col rounded-10 border bg-white p-4 shadow">
            <div className="flex">
              {MENU_ICONS.slice(0, 3).map((menu, index) => {
                return (
                  <Link
                    href={menu.href}
                    key={menu.alt}
                    className="flex flex-1 flex-col items-center justify-center gap-2 border-r border-gray-200 pb-3 pt-1 last:border-none"
                  >
                    <img
                      src={menu.iconUrl}
                      alt={menu.alt}
                      className="aspect-square h-6 w-6"
                    />
                    <span className="text-secondary-brown-4 b4">
                      {menu.alt}
                    </span>
                  </Link>
                )
              })}
            </div>
            <hr className="my-2" />
            <div className="flex">
              {MENU_ICONS.slice(3, 6).map((menu, index) => {
                return (
                  <Link
                    href={menu.href}
                    key={menu.alt}
                    className="flex flex-1 flex-col items-center justify-center gap-2 border-r border-gray-200 pb-1 pt-3 last:border-none"
                  >
                    <img
                      src={menu.iconUrl}
                      alt={menu.alt}
                      className="aspect-square h-6 w-6"
                    />
                    <span className="text-secondary-brown-4 b4">
                      {menu.alt}
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="flex w-full items-center justify-between rounded-10 border-2 border-black bg-gray-100 px-5 pb-4 pt-5">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <span className="h4">라떼챗</span>
                <span className="b9 inline-block rounded-full bg-black px-1 py-[2px] text-white">
                  프리미엄
                </span>
              </div>
              <p className="b10 text-gray-400">
                다음 결제 예정일: 2025년 9월 16일
              </p>
            </div>
            <button className="b10 flex items-center gap-1 rounded-10 bg-gray-200 px-2 py-1">
              변경하기
              <img
                src="/icons/next-arrow-icon.svg"
                className="aspect-square h-3 w-3"
              />
            </button>
          </div>
        </div>

        <hr className="mb-5 h-[5px] bg-gray-300" />

        <section className="flex flex-col gap-5 px-5">
          {SETTING_ICONS.map((setting, index) => {
            return (
              <div key={setting.alt} className="flex items-center space-x-4">
                <img
                  src={setting.iconUrl}
                  className="aspect-square h-6 w-6 shrink-0"
                  alt={setting.alt}
                />
                <span className="b1 flex-1 text-black">{setting.alt}</span>
                <img
                  src="/icons/right-arrow-icon.svg"
                  className="aspect-square h-6 w-6 shrink-0"
                  alt={setting.alt}
                />
              </div>
            )
          })}
        </section>

        <footer className="b9 mb-6 mt-10 flex w-full flex-col items-center justify-start gap-4 text-gray-400">
          <div className="flex gap-2">
            {FOOTER_CONTENT1.map((content, index) => {
              let hasLine = true
              if (index === FOOTER_CONTENT1.length - 1) {
                hasLine = false
              }
              return (
                <Fragment key={content}>
                  <span>{content}</span>
                  {hasLine && <hr className="h-3 w-[1px] bg-gray-400" />}
                </Fragment>
              )
            })}
          </div>
          <div className="flex gap-2">
            {FOOTER_CONTENT2.map((content, index) => {
              let hasLine = true
              if (index === FOOTER_CONTENT1.length - 1) {
                hasLine = false
              }
              return (
                <Fragment key={content}>
                  <span>{content}</span>
                  {hasLine && <hr className="h-3 w-[1px] bg-gray-400" />}
                </Fragment>
              )
            })}
          </div>
        </footer>
      </div>
    </div>
  )
}
