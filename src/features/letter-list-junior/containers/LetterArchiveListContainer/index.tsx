'use client'

import { useSearchParams } from 'next/navigation'
import { useUserInfo } from '@/shared/hooks/useUserInfo'
import { useState } from 'react'
import LetterArchiveListViewContainer from '../LetterArchiveListViewContainer'
import ArchiveTitle from '../../components/ArchiveTitle'
import ArchiveCategorySelector from '../../components/ArchiveCategorySelector'
import { useLetterFilterStore } from '../../stores/letterFilterStore'
import LetterArchiveListDeleteViewContainer from '../LetterArchiveListDeleteViewContainer'

export default function JuniorLetterArchiveListContainer() {
  const searchParams = useSearchParams()
  const selectedCategory = searchParams?.get('category') ?? null

  const statusFilter = useLetterFilterStore((state) => state.statusFilter)
  const { data: userInfo } = useUserInfo()

  const [viewState, setViewState] = useState<'VIEW' | 'DELETE'>('VIEW')

  return (
    <div>
      <header className="b2 sticky top-0 z-10">
        <ArchiveTitle />
        <ArchiveCategorySelector selectedCategory={selectedCategory} />
      </header>

      <div className="flex min-h-[calc(100svh-13rem)] w-full flex-1 flex-col justify-between gap-3 bg-white px-5 py-3">
        {viewState === 'VIEW' ? (
          <LetterArchiveListViewContainer
            juniorId={userInfo?.juniorId!}
            answer={statusFilter}
            category={selectedCategory}
            setViewState={setViewState}
          />
        ) : (
          <LetterArchiveListDeleteViewContainer
            juniorId={userInfo?.juniorId!}
            answer={statusFilter}
            category={selectedCategory}
            setViewState={setViewState}
          />
        )}
      </div>
    </div>
  )
}
