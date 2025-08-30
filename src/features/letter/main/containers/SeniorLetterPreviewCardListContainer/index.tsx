'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import NextIcon from '@/shared/assets/icons/next-icon.svg'
import PrevIcon from '@/shared/assets/icons/prev-icon.svg'

type Card = {
  id: number
  title: string
  img: string
}

export default function SeniorLetterPreviewCardListContainer() {
  const [allCards, setAllCards] = useState<Card[]>([])
  const [index, setIndex] = useState(0)
  const [page, setPage] = useState(0)

  const fetchCards = async (pageNum: number) => {
    console.log(pageNum)
    if (allCards.length > 0 && pageNum <= page) return

    const newCards = Array.from({ length: 10 }).map((_, i) => ({
      id: pageNum * 10 + i + 1,
      title: `Slide ${pageNum * 10 + i + 1}`,
      img: '/images/test-image.png',
    }))
    setAllCards((prev) => [...prev, ...newCards])
    setPage(pageNum)
  }

  const next = () => {
    if (index >= allCards.length - 1) return
    const newIndex = index + 1
    setIndex(newIndex)

    if (newIndex >= allCards.length - 2) {
      fetchCards(page + 1)
    }
  }
  const prev = () => {
    if (index <= 0) return
    setIndex(index - 1)
  }

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x < -100 && index < allCards.length - 1) {
      next()
    } else if (info.offset.x > 100 && index > 0) {
      prev()
    }
  }

  useEffect(() => {
    fetchCards(0)
  }, [])

  return (
    <div>
      <div className="flex flex-col items-center">
        {/* 카드 영역 */}
        <div className="relative flex h-[245px] w-full items-center justify-center">
          <AnimatePresence initial={false}>
            {allCards.map((card, i) => {
              const offset = (i - index + allCards.length) % allCards.length
              const isCenter = offset === 0

              // 가운데 + 양옆 카드만 보이게
              if (offset > 1 && offset < allCards.length - 1) return null

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
                if (index === allCards.length - 1) return null
                // 오른쪽 카드
                x = 95
                y = -30
                scale = 0.6
                opacity = 0.9
                zIndex = 0
              } else if (offset === allCards.length - 1) {
                if (index === 0) return null
                // 왼쪽 카드
                x = -95
                y = -30
                scale = 0.6
                opacity = 0.9
                zIndex = 0
              }

              return (
                <motion.div
                  key={card.id}
                  className="absolute flex w-[65%] rounded-2xl bg-white shadow-border"
                  drag={offset === 0 ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={handleDragEnd}
                  initial={{ opacity: 0 }}
                  animate={{ x, y, scale, opacity, zIndex }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                >
                  {/* 이미지 */}
                  <img
                    src={card.img}
                    alt={card.title}
                    className="aspect-square h-full w-full rounded-2xl object-cover"
                  />
                  {/* 옆 카드들은 반투명 오버레이 */}
                  {!isCenter && (
                    <div className="absolute inset-0 rounded-xl bg-black/50"></div>
                  )}
                  {/* 가운데 카드에 타이틀 */}
                  {isCenter && (
                    <div className="b6 absolute -top-3 right-4 rounded-md bg-white px-2 py-1">
                      {card.title}
                    </div>
                  )}
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        <div className="flex flex-col items-center">
          <div className="mt-3 flex items-center justify-center gap-6 py-2">
            <button onClick={prev} disabled={index === 0}>
              <PrevIcon color={index === 0 ? '#D9D9D9' : '#6E4F36'} />
            </button>
            <h2 className="h3 line-clamp-1 w-[15.3rem] flex-1">
              IT 디자이너 취업 시장, 요즘은 어떤가요?
            </h2>
            <button onClick={next} disabled={index === allCards.length - 1}>
              <NextIcon
                color={index === allCards.length - 1 ? '#D9D9D9' : '#6E4F36'}
              />
            </button>
          </div>
          <span className="b6 text-gray-7">나도취업할래</span>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center gap-2">
        <div className="flex w-full gap-4">
          <button className="flex-1 rounded-10 bg-gray-3 py-3 text-black">
            사연 보기
          </button>
          <button className="flex-1 rounded-10 bg-secondary-brown-2 py-3 text-white">
            선택하기 (1/5)
          </button>
        </div>
        <p className="b6 text-gray-6">사연은 최대 5개까지 선택이 가능합니다.</p>
      </div>
    </div>
  )
}
