import SettingItem from '../SettingItem'

const SETTING_ICONS = [
  {
    id: 'word-size',
    iconUrl: '/icons/text-icon.svg',
    title: '글자 크기',
    href: '',
  },
  {
    id: 'language-select',
    iconUrl: '/icons/language-icon.svg',
    title: '언어 선택',
    href: '',
  },
  {
    id: 'user-manage',
    iconUrl: '/icons/user-icon.svg',
    title: '사용자 관리',
    href: '',
  },
  {
    id: 'dark-mode',
    iconUrl: '/icons/darkmode-icon.svg',
    title: '다크 모드',
    href: '',
  },
  {
    id: 'setting',
    iconUrl: '/icons/setting-fill-icon.svg',
    title: '설정',
    href: '',
  },
]

export default function SettingBox() {
  return (
    <section className="flex flex-col gap-5 px-5">
      {SETTING_ICONS.map((setting) => {
        return (
          <SettingItem
            key={setting.id}
            title={setting.title}
            iconUrl={setting.iconUrl}
          />
        )
      })}
    </section>
  )
}
