import { Fragment } from 'react'

const FOOTER_CONTENT1 = ['로그아웃', '전체보기', 'PC화면', '다음앱', '고객센터']
const FOOTER_CONTENT2 = [
  '서비스 약관',
  '청소년보호정책',
  '라떼챗 이용 약관',
  '개인정보처리방침',
]

function FooterItem({ items }: { items: string[] }) {
  return (
    <div className="flex gap-2">
      {items.map((content, index) => (
        <Fragment key={content}>
          <span>{content}</span>
          {index < items.length - 1 && <hr className="h-3 w-[1px] bg-gray-4" />}
        </Fragment>
      ))}
    </div>
  )
}

export default function MypageFooter() {
  return (
    <footer className="b9 mb-6 mt-10 flex w-full flex-col items-center justify-start gap-4 text-gray-4">
      <FooterItem items={FOOTER_CONTENT1} />
      <FooterItem items={FOOTER_CONTENT2} />
    </footer>
  )
}
