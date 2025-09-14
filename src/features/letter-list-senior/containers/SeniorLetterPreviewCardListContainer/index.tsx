'use client'

import NextIcon from '@/shared/assets/icons/next-icon.svg'
import PrevIcon from '@/shared/assets/icons/prev-icon.svg'
import SeniorLetterPreviewCardCarousel from '../SeniorLetterPreviewCardCarousel'
import { useUserInfo } from '@/shared/hooks/useUserInfo'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useGetSeniorLetterListInfiniteQuery } from '../../hooks/useGetSeniorLetterListInfiniteQuery'
import {
  useLetterViewState,
  useLetterViewStateActions,
} from '../../stores/letterViewStateStore'
import { useEffect } from 'react'
import LetterSelectButton from '@/features/letter-select/components/LetterSelectButton'

export default function SeniorLetterPreviewCardListContainer() {
  const pathname = usePathname()
  const { data: userInfo } = useUserInfo()
  const { selectedIndex } = useLetterViewState()
  const { setSelectedIndex } = useLetterViewStateActions()

  const { data, fetchNextPage, hasNextPage } =
    useGetSeniorLetterListInfiniteQuery(
      userInfo?.memberType === 'SENIOR'
        ? { page: 0, seniorId: userInfo.seniorId! }
        : undefined
    )

  const letters = data?.pages.flatMap((page) => page.content) ?? []

  const next = () => {
    if (selectedIndex >= letters.length - 1) return
    const newIndex = selectedIndex + 1
    setSelectedIndex(newIndex)

    if (newIndex >= letters.length - 2 && hasNextPage) {
      fetchNextPage()
    }
  }

  const prev = () => {
    if (selectedIndex <= 0) return
    setSelectedIndex(Math.max(selectedIndex - 1, 0))
  }

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x < -100 && selectedIndex < letters.length - 1) {
      next()
    } else if (info.offset.x > 100 && selectedIndex > 0) {
      prev()
    }
  }

  useEffect(() => {
    if (selectedIndex >= letters.length) {
      setSelectedIndex(Math.max(letters.length - 1, 0))
    }
  }, [selectedIndex, letters.length, setSelectedIndex])

  return (
    <div>
      <div className="flex flex-col items-center">
        <SeniorLetterPreviewCardCarousel
          letters={{ content: letters }}
          index={selectedIndex}
          handleDragEnd={handleDragEnd}
        />

        {letters.length > 0 && (
          <div className="flex flex-col items-center">
            <div className="mt-3 flex items-center justify-center gap-6 py-2">
              <button onClick={prev} disabled={selectedIndex === 0}>
                <PrevIcon color={selectedIndex === 0 ? '#D9D9D9' : '#6E4F36'} />
              </button>
              <h2
                className={` ${
                  letters[selectedIndex]?.letterType === 'BONUS'
                    ? 'bg-latte-gradient-5 bg-clip-text text-transparent'
                    : 'text-black'
                } h3 line-clamp-1 w-[15.3rem] flex-1 text-center`}
              >
                {letters[selectedIndex]?.title ?? ''}
              </h2>
              <button
                onClick={next}
                disabled={selectedIndex === letters.length - 1}
              >
                <NextIcon
                  color={
                    selectedIndex === letters.length - 1 ? '#D9D9D9' : '#6E4F36'
                  }
                />
              </button>
            </div>
            <span
              className={`${
                letters[selectedIndex]?.letterType === 'BONUS'
                  ? 'bg-latte-gradient-5 bg-clip-text text-transparent'
                  : 'text-gray-7'
              } b6`}
            >
              {letters[selectedIndex]?.juniorName ?? ''}
            </span>
          </div>
        )}
      </div>

      {letters.length > 0 && (
        <div className="mt-8 flex flex-col items-center gap-2">
          <div className="flex w-full gap-4">
            <LetterSelectButton
              letterId={letters[selectedIndex]?.letterId}
              type="CAROUSEL"
            />
            <Link
              href={`${pathname}/${letters[selectedIndex]?.letterId}`}
              className="b4 flex-1 rounded-10 bg-gray-3 py-3 text-center text-black"
            >
              사연 보기
            </Link>
          </div>
          <p className="b6 text-gray-6">
            사연은 최대 5개까지 선택이 가능합니다.
          </p>
        </div>
      )}
    </div>
  )
}
