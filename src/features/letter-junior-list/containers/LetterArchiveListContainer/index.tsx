'use client'

import { useSearchParams } from 'next/navigation'
import { useLetterFilterStore } from '@/features/letter/stores/letterFilterStore'
import { useUserInfo } from '@/shared/hooks/useUserInfo'
import { useState } from 'react'
import LetterStatusFilter from '../../components/LetterStatusFilter'
import LetterArchiveListViewContainer from '../LetterArchiveListViewContainer'
import LetterArchiveListDeleteContainer from '../LetterArchiveListDeleteContainer'
import ArchiveTitle from '../../components/ArchiveTitle'
import ArchiveCategorySelector from '../../components/ArchiveCategorySelector'

export default function JuniorLetterArchiveListContainer() {
  const searchParams = useSearchParams()
  const selectedCategory = searchParams?.get('category') ?? null

  const statusFilter = useLetterFilterStore((state) => state.statusFilter)
  const { data: userInfo } = useUserInfo()

  const [viewState, setViewState] = useState<'VIEW' | 'DELETE'>('VIEW')

  return (
    <div>
      <header className="b2 sticky top-0 z-10">
        <ArchiveTitle viewState={viewState} setViewState={setViewState} />
        <ArchiveCategorySelector selectedCategory={selectedCategory} />
      </header>

      <div className="flex min-h-[calc(100svh-13rem)] flex-col gap-3 bg-white px-5 py-3">
        <div className="flex items-center justify-end">
          <LetterStatusFilter />
        </div>

        {viewState === 'VIEW' ? (
          <LetterArchiveListViewContainer
            juniorId={userInfo?.juniorId!}
            answer={statusFilter}
            category={selectedCategory}
          />
        ) : (
          <LetterArchiveListDeleteContainer
            juniorId={userInfo?.juniorId!}
            answer={statusFilter}
            category={selectedCategory}
          />
        )}
      </div>
    </div>
  )
}
