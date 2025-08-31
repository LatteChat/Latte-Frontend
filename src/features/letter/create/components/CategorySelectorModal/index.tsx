import CategoryTag from '@/features/user/onboarding/components/CategoryTag'

const CATEGORIES = [
  { label: '뉴스', value: 'NEWS' },
  { label: '쇼핑', value: 'SHOPPING' },
  { label: '반려동물', value: 'PET' },
  { label: '연예', value: 'ENTERTAINMENT' },
  { label: '증권 및 금융', value: 'FINANCE' },
  { label: '스포츠', value: 'SPORTS' },
  { label: '취업 및 회사', value: 'JOB' },
  { label: '진로', value: 'CAREER' },
  { label: '게임', value: 'GAME' },
  { label: '뷰티 및 패션', value: 'BEAUTY_FASHION' },
  { label: '독서', value: 'BOOK' },
  { label: '여행', value: 'TRAVEL' },
  { label: '영화', value: 'MOVIE' },
  { label: '애니메이션', value: 'ANIMATION' },
  { label: '음식 및 요리', value: 'FOOD' },
  { label: '음악 및 악기', value: 'MUSIC' },
]

export default function CategorySelectorModal({
  onClose,
  onSelectCategory,
}: {
  onClose: () => void
  onSelectCategory: (category: string) => void
}) {
  return (
    <div className="flex w-full flex-col items-start gap-5 rounded-xl bg-white p-6 shadow-lg">
      <button onClick={onClose} className="inline-block">
        <img
          src="/icons/close-icon.svg"
          alt="닫기 아이콘"
          className="aspect-square h-6 w-6"
        />
      </button>

      <h1 className="h2 whitespace-pre-line">
        {`oo님,\n오늘의 주제는 무엇인가요?`}
      </h1>

      <div className="flex flex-wrap gap-3">
        {CATEGORIES.map((category) => (
          <CategoryTag
            key={category.value}
            label={category.label}
            isSelected={false}
            onClick={() => onSelectCategory(category.value)}
          />
        ))}
      </div>
    </div>
  )
}
