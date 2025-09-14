import useGetMyInfoQuery from '@/features/user/hooks/useGetMyInfoQuery'
import MenuItem from '../MenuItem'
import { useMemo } from 'react'

type Menu = {
  id: string
  iconUrl: string
  title: string
  href: string
}

export default function MenuBox() {
  const { data: userInfo } = useGetMyInfoQuery()

  const MENU_ICONS: Menu[][] = useMemo(() => {
    const baseMenus: Menu[] = [
      {
        id: 'profile-edit',
        iconUrl: '/icons/edit-icon.svg',
        title: '프로필 수정',
        href: '/latte-chat/mypage/edit',
      },
      {
        id: 'my-write',
        iconUrl: '/icons/comment-rectangle-icon.svg',
        title: userInfo?.type === 'SENIOR' ? '내가 쓴 답변' : '내가 쓴 사연',
        href: '',
      },
      {
        id: 'my-comment',
        iconUrl: '/icons/comment-round-icon.svg',
        title: '내가 쓴 댓글',
        href: '',
      },
      {
        id: 'point',
        iconUrl: '/icons/coffee-bean-icon.svg',
        title: '포인트',
        href: '',
      },
      {
        id: 'store',
        iconUrl: '/icons/present-icon.svg',
        title: '스토어',
        href: '/latte-chat/store',
      },
      {
        id: 'bookmark',
        iconUrl: '/icons/bookmark-icon.svg',
        title: '스크랩',
        href: '',
      },
    ]

    return [baseMenus.slice(0, 3), baseMenus.slice(3, 6)]
  }, [userInfo?.type])

  return (
    <div className="mb-5 flex w-full flex-col rounded-10 border bg-white p-4 shadow">
      {MENU_ICONS.map((group, idx) => (
        <div key={idx} className="flex flex-col">
          <div className="flex">
            {group.map((menu) => (
              <MenuItem
                key={menu.id}
                href={menu.href}
                iconUrl={menu.iconUrl}
                title={menu.title}
                padding={idx === 0 ? 'pb-3 pt-1' : 'pb-1 pt-3'}
              />
            ))}
          </div>
          {idx === 0 && <hr className="my-2" />}
        </div>
      ))}
    </div>
  )
}
