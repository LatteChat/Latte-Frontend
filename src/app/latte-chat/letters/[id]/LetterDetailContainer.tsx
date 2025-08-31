import JuniorLetterCardContainer from '@/features/letter/detail/containers/JuniorLetterCardContainer'
import LetterCardContainer from '@/features/letter/detail/containers/LetterCardContainer'
import TitleHeader from '@/shared/components/TitleHeader'
import { useParams } from 'next/navigation'

export default function LetterDetailContainer() {
  const params = useParams()
  const letterId = params.id ? Number(params.id) : null
  const isSenior = false

  if (!letterId) {
    console.log('letterId가 존재하지 않습니다')
    return null
  }

  return (
    <div>
      <TitleHeader title="글 보관함" />

      <div className="bg-secondary-brown-1 min-h-[calc(100svh-8rem)] px-5 pb-24 pt-5">
        {isSenior ? (
          <LetterCardContainer />
        ) : (
          <JuniorLetterCardContainer letterId={letterId} />
        )}
      </div>
    </div>
  )
}
