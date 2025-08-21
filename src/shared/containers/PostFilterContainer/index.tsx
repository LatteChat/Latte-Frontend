import PostFilterTag from '../../components/PostFilterTag'

const FILTERS = ['추천', '인기글', '여행', '영화', '어쩌구저쩌구', '룰루랄라']

export default function PostFilterContainer() {
  return (
    <div className="scrollbar-hide flex gap-2 overflow-auto px-5 pb-3.5 pt-4">
      {FILTERS.map((filter) => {
        return <PostFilterTag key={filter} label={filter} />
      })}
    </div>
  )
}
