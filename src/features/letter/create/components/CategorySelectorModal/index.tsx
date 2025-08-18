import CategoryTag from '@/features/user/onboarding/components/CategoryTag'

const CATEGORIES = [
  '뉴스',
  '쇼핑',
  '반려동물',
  '연예',
  '증권 및 금융',
  '스포츠',
  '취업 및 회사',
  '진로',
  '게임',
  '뷰티 및 패션',
  '독서',
  '여행',
  '영화',
  '애니메이션',
  '음식 및 요리',
  '음악 및 악기',
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
            key={category}
            label={category}
            isSelected={false}
            onClick={() => onSelectCategory(category)}
          />
        ))}
      </div>
    </div>
  )
}
