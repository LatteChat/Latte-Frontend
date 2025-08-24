import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type StatusFilter = 0 | 1 | 2 | 3 | 4

type LetterFilterState = {
  statusFilter: StatusFilter //(0: 전체, 1: 답변 대기중, 2: 사연 저장, 3: 채택 완료, 4: 답변 완료)
}

type LetterFilterActions = {
  setStatusFilter: (statusFilter: StatusFilter) => void
  reset: () => void
}

const initialState: LetterFilterState = {
  statusFilter: 0,
}

export const useLetterFilterStore = create<
  LetterFilterState & LetterFilterActions
>()(
  persist(
    (set) => ({
      ...initialState,
      setStatusFilter: (statusFilter) => set({ statusFilter }),
      reset: () => set({ ...initialState }),
    }),
    { name: 'letter-filter-storage' }
  )
)

export const useLetterFilterActions = () => ({
  setStatusFilter: useLetterFilterStore((s) => s.setStatusFilter),
  reset: useLetterFilterStore((s) => s.reset),
})
