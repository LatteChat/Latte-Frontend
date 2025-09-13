import { useModal } from '@/shared/contexts/ModalContext'
import { useLetterCreateState } from '@/features/letter-create/store/letterCreateStore'
import { CATEGORIES_MAP } from '@/shared/types/Category'
import RightArrowIcon from '@/shared/assets/icons/right-arrow-icon.svg'
import CategorySelectorModal from '../CategorySelectorModal'

export default function OptionSelectBox() {
  const { openModal } = useModal()
  const { category } = useLetterCreateState()

  return (
    <div className="mb-4 flex w-full justify-center">
      <button
        onClick={() => openModal(<CategorySelectorModal />)}
        type="button"
        className="h4 flex items-center gap-3 rounded-10 bg-white px-3 py-2 text-black shadow-border"
      >
        {category ? '오늘의 주제는' : '카테고리 선택'}
        {category && (
          <span className="b4 inline-block rounded-10 bg-secondary-brown-2 px-4 py-[0.375rem] text-secondary-brown-1">
            {CATEGORIES_MAP[category]}
          </span>
        )}
        <RightArrowIcon className="h-6 w-6" color="#000000" />
      </button>
    </div>
  )
}
