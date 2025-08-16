import LetterCard from '@/features/letter/archive/components/LetterCard'
import TitleHeader from '@/shared/components/TitleHeader'

export default function LetterDetailContainer() {
  return (
    <div>
      <TitleHeader title="글 보관함" />

      <div className="min-h-[calc(100svh-8rem)] bg-gray-100 px-5 pb-24 pt-5">
        <LetterCard title="사연글" />
      </div>
    </div>
  )
}
