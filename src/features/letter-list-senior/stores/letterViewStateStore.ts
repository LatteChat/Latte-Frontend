import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ViewState = 'CAROUSEL' | 'LIST'

type ScrollMap = Record<string, number>

type LetterViewStateState = {
  scrollMap: ScrollMap
  selectedIndex: number
  scrollY: number
  viewState: ViewState
}

type LetterViewStateActions = {
  setSelectedIndex: (selectedIndex: number) => void
  setScrollY: (path: string, y: number) => void
  setViewState: (statusState: ViewState) => void
  getScrollY: (path: string) => number
  reset: () => void
}

const initialState: LetterViewStateState = {
  scrollMap: {},
  selectedIndex: 0,
  scrollY: 0,
  viewState: 'CAROUSEL',
}

export const useLetterViewStateStore = create<
  LetterViewStateState & LetterViewStateActions
>()(
  persist(
    (set, get) => ({
      ...initialState,
      setSelectedIndex: (selectedIndex) => set({ selectedIndex }),
      setScrollY: (path, y) =>
        set((state) => ({
          scrollMap: { ...state.scrollMap, [path]: y },
        })),
      getScrollY: (path) => get().scrollMap[path] ?? 0,
      setViewState: (viewState) => set({ viewState }),
      reset: () => set({ ...initialState }),
    }),
    {
      name: 'letter-view-state',
    }
  )
)

export const useLetterViewState = () => ({
  selectedIndex: useLetterViewStateStore((s) => s.selectedIndex),
  scrollY: useLetterViewStateStore((s) => s.scrollY),
  viewState: useLetterViewStateStore((s) => s.viewState),
})

export const useLetterViewStateActions = () => ({
  setViewState: useLetterViewStateStore((s) => s.setViewState),
  setSelectedIndex: useLetterViewStateStore((s) => s.setSelectedIndex),
  setScrollY: useLetterViewStateStore((s) => s.setScrollY),
  getScrollY: useLetterViewStateStore((s) => s.getScrollY),
  reset: useLetterViewStateStore((s) => s.reset),
})
