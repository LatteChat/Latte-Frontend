import PostFilterTag from '../../components/PostFilterTag'
import { CATEGORIES, Category } from '@/shared/types/Type'

export default function PostFilterContainer({
  selected,
  setSelected,
}: {
  selected: Category | null
  setSelected: React.Dispatch<React.SetStateAction<Category | null>>
}) {
  return (
    <div className="scrollbar-hide flex gap-2 overflow-auto px-5 pb-3.5 pt-4">
      {CATEGORIES.map((filter) => {
        return (
          <PostFilterTag
            key={filter.value}
            label={filter.label}
            value={filter.value}
            selected={selected}
            onClick={() => setSelected(filter.value)}
          />
        )
      })}
    </div>
  )
}
