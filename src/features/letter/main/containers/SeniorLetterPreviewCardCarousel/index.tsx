import { AnimatePresence } from 'framer-motion'
import PreviewCard from '../../components/PreviewCard'

export default function SeniorLetterPreviewCardCarousel({
  letters,
  index,
  handleDragEnd,
}: {
  letters: any
  index: number
  handleDragEnd: any
}) {
  return (
    <div className="relative flex w-full items-center justify-center">
      <div className="relative flex aspect-square w-[70%] items-center justify-center">
        <AnimatePresence initial={false}>
          {letters?.content?.map((letter: any, idx: number) => {
            const letterLength = letters.content.length
            const offset = (idx - index + letterLength) % letterLength
            const isCenter = offset === 0

            // 가운데 + 양옆 카드만 보이게
            if (offset > 1 && offset < letterLength - 1) return null

            let x = 0
            let y = 0
            let scale = 1
            let opacity = 1
            let zIndex = 0

            if (offset === 0) {
              // 가운데 카드
              x = 0
              y = 0
              scale = 1
              opacity = 1
              zIndex = 1
            } else if (offset === 1) {
              if (index === letterLength - 1) return null
              // 오른쪽 카드
              x = 95
              y = -30
              scale = 0.6
              opacity = 0.9
              zIndex = 0
            } else if (offset === letterLength - 1) {
              if (index === 0) return null
              // 왼쪽 카드
              x = -95
              y = -30
              scale = 0.6
              opacity = 0.9
              zIndex = 0
            }

            return (
              <PreviewCard
                key={letter.letterId}
                offset={offset}
                handleDragEnd={handleDragEnd}
                animate={{
                  x,
                  y,
                  scale,
                  opacity,
                  zIndex,
                }}
                imageUrl={letter.image}
                title={letter.title}
                isCenter={isCenter}
                letterType={letter.letterType}
              />
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  )
}
