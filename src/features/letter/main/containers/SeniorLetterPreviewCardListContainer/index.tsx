'use client'

import { useState, useEffect } from 'react'
import NextIcon from '@/shared/assets/icons/next-icon.svg'
import PrevIcon from '@/shared/assets/icons/prev-icon.svg'
import SeniorLetterPreviewCardCarousel from '../SeniorLetterPreviewCardCarousel'
import { useUserInfo } from '@/shared/hooks/useUserInfo'
import { useGetLetterListQuery } from '@/features/letter/hooks/useGetLetterListQuery'
import useGetSeniorSelectedLetterCountQuery from '@/features/letter/hooks/useGetSeniorSelectedLetterCountQuery'

export default function SeniorLetterPreviewCardListContainer() {
  const { data: userInfo } = useUserInfo()
  const { data: letters } = useGetLetterListQuery(
    userInfo?.memberType === 'SENIOR'
      ? {
          page: 0,
          seniorId: userInfo.seniorId!,
        }
      : undefined
  )
  const { data: selectedLetterCount } = useGetSeniorSelectedLetterCountQuery(
    userInfo
      ? {
          seniorId: userInfo.seniorId!,
        }
      : undefined
  )

  const [index, setIndex] = useState(0)
  const [page, setPage] = useState(0)

  const fetchCards = async (pageNum: number) => {
    if ((letters?.content?.length ?? 0) > 0 && pageNum <= page) return

    // const newCards = Array.from({ length: 10 }).map((_, i) => ({
    //   id: pageNum * 10 + i + 1,
    //   title: `Slide ${pageNum * 10 + i + 1}`,
    //   img: '/images/test-image.png',
    // }))
    // setAllCards((prev) => [...prev, ...newCards])
    // setPage(pageNum)
  }

  const next = () => {
    if (index >= letters.content.length - 1) return
    const newIndex = index + 1
    setIndex(newIndex)

    if (newIndex >= letters.content.length - 2) {
      fetchCards(page + 1)
    }
  }
  const prev = () => {
    if (index <= 0) return
    setIndex(index - 1)
  }

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x < -100 && index < letters.content.length - 1) {
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
        <SeniorLetterPreviewCardCarousel
          letters={letters}
          index={index}
          handleDragEnd={handleDragEnd}
        />

        <div className="flex flex-col items-center">
          <div className="mt-3 flex items-center justify-center gap-6 py-2">
            <button onClick={prev} disabled={index === 0}>
              <PrevIcon color={index === 0 ? '#D9D9D9' : '#6E4F36'} />
            </button>
            <h2
              className={` ${letters?.content[index]?.letterType === 'BONUS' ? 'bg-latte-gradient-4 bg-clip-text text-transparent' : 'text-black'} h3 line-clamp-1 w-[15.3rem] flex-1 text-center`}
            >
              {letters?.content[index]?.title}
            </h2>
            <button
              onClick={next}
              disabled={index === (letters?.content?.length ?? 1) - 1}
            >
              <NextIcon
                color={
                  index === (letters?.content?.length ?? 1) - 1
                    ? '#D9D9D9'
                    : '#6E4F36'
                }
              />
            </button>
          </div>
          <span
            className={`${letters?.content[index]?.letterType === 'BONUS' ? 'bg-latte-gradient-4 bg-clip-text text-transparent' : 'text-gray-7'} b6`}
          >
            {letters?.content[index]?.juniorName}
          </span>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-2">
        <div className="flex w-full gap-4">
          <button className="flex-1 rounded-10 bg-gray-3 py-3 text-black">
            사연 보기
          </button>
          <button className="flex-1 rounded-10 bg-secondary-brown-2 py-3 text-white">
            {`선택하기 (${selectedLetterCount}/5)`}
          </button>
        </div>
        <p className="b6 text-gray-6">사연은 최대 5개까지 선택이 가능합니다.</p>
      </div>
    </div>
  )
}
