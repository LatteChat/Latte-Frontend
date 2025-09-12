import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type StatusFilter = 'view' | 'all'

type PostFilterState = {
  statusFilter: StatusFilter
}

type PostFilterActions = {
  setStatusFilter: (statusFilter: StatusFilter) => void
  reset: () => void
}

const initialState: PostFilterState = {
  statusFilter: 'all',
}

export const usePostFilterStore = create<PostFilterState & PostFilterActions>()(
  persist(
    (set) => ({
      ...initialState,
      setStatusFilter: (statusFilter) => set({ statusFilter }),
      reset: () => set({ ...initialState }),
    }),
    { name: 'post-filter-storage' }
  )
)

export const usePostFilterActions = () => ({
  setStatusFilter: usePostFilterStore((s) => s.setStatusFilter),
  reset: usePostFilterStore((s) => s.reset),
})
