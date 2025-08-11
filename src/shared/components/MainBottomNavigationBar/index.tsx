const NAVIGATION_OPTIONS = [
  {
    icon: '/icons/home-icon.svg',
    value: 'home',
    name: '홈',
  },
  {
    icon: '/icons/content-icon.svg',
    value: 'content',
    name: '콘텐츠',
  },
  {
    icon: '/icons/community-icon.svg',
    value: 'community',
    name: '커뮤니티',
  },
  {
    icon: '/icons/shopping-icon.svg',
    value: 'shopping',
    name: '쇼핑',
  },
  {
    icon: '/icons/loop-icon.svg',
    value: 'loop',
    name: '루프',
  },
]

export default function MainBottomNavigationBar() {
  return (
    <nav className="h-[5.2rem] w-full">
      <ul className="flex h-full w-full">
        {NAVIGATION_OPTIONS.map((option) => {
          return (
            <li
              key={option.value}
              className="flex flex-1 flex-col items-center justify-start gap-2 bg-white py-2"
            >
              <button>
                <img
                  src={option.icon}
                  className="aspect-square w-6 min-w-2"
                  alt={option.name + ' 아이콘'}
                />
                <span className="whitespace-nowrap text-xs">{option.name}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
