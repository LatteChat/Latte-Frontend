import { useLetterCreateStore } from '@/features/letter/stores/letterCreateStore'
import CategoryTag from '@/features/user/onboarding/components/CategoryTag'
import { useModal } from '@/shared/contexts/ModalContext'
import { Category } from '@/shared/types/Category'
import AnswerTypeSelectorModal from '../AnswerTypeSelectorModal'

const CATEGORIES: { label: string; value: Category }[] = [
  { label: '취업 및 회사', value: 'CAREER' },
  { label: '진로', value: 'EDUCATION' },
  { label: '뉴스', value: 'NEWS' },
  { label: '쇼핑', value: 'SHOPPING' },
  { label: '반려동물', value: 'PETS' },
  { label: '연예', value: 'ENTERTAINMENT' },
  { label: '증권 및 금융', value: 'FINANCE' },
  { label: '스포츠', value: 'SPORTS' },
  { label: '게임', value: 'GAME' },
  { label: '뷰티 및 패션', value: 'BEAUTY_FASHION' },
  { label: '독서', value: 'BOOKS' },
  { label: '여행', value: 'TRAVEL' },
  { label: '영화', value: 'MOVIE' },
  { label: '애니메이션', value: 'ANIMATION' },
  { label: '음식 및 요리', value: 'FOOD' },
  { label: '음악 및 악기', value: 'MUSIC' },
]

export default function CategorySelectorModal() {
  const { closeModal, openModal } = useModal()
  const selectedCategory = useLetterCreateStore((state) => state.category)
  const setCategory = useLetterCreateStore((state) => state.setCategory)

  return (
    <div className="flex w-full flex-col items-start gap-5 rounded-xl bg-white p-6 shadow-lg">
      <button onClick={closeModal} className="inline-block">
        <img
          src="/icons/close-icon.svg"
          alt="닫기 아이콘"
          className="aspect-square h-6 w-6"
        />
      </button>
      <div className="flex flex-col gap-5">
        <span className="h2">1/2</span>
        <h1 className="h2 whitespace-pre-line">{`오늘의 주제는 무엇인가요?`}</h1>
      </div>

      <div className="flex flex-wrap gap-3">
        {CATEGORIES.map((category) => (
          <CategoryTag
            key={category.value}
            label={category.label}
            isSelected={selectedCategory === category.value}
            onClick={() => {
              openModal(<AnswerTypeSelectorModal />)
              setCategory(category.value)
            }}
          />
        ))}
      </div>
    </div>
  )
}
