const NAVIGATION_OPTIONS = [
  {
    icon: '/icons/daum-icon.svg',
    value: 'home',
  },
  {
    icon: '/icons/daum-icon.svg',
    value: 'prev',
  },
  {
    icon: '/icons/daum-icon.svg',
    value: 'next',
  },
  {
    icon: '/icons/daum-icon.svg',
    value: 'search',
  },
  {
    icon: '/icons/daum-icon.svg',
    value: 'what',
  },
  {
    icon: '/icons/daum-icon.svg',
    value: 'more',
  },
]

export default function BottomNavigationBar() {
  return (
    <section className="flex h-20 w-full">
      {NAVIGATION_OPTIONS.map((option) => {
        return (
          <button
            key={option.value}
            className="flex flex-1 items-start justify-center p-4"
          >
            <img src={option.icon} className="aspect-square w-5 min-w-2" />
          </button>
        )
      })}
    </section>
  )
}
