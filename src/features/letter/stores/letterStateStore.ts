import { create } from 'zustand'

type StatusState = 'BONUS' | 'NORMAL'

type LetterStateState = {
  statusState: StatusState
}

type LetterStateActions = {
  setStatusState: (statusState: StatusState) => void
  reset: () => void
}

const initialState: LetterStateState = {
  statusState: 'NORMAL',
}

export const useLetterStateStore = create<
  LetterStateState & LetterStateActions
>()((set) => ({
  ...initialState,
  setStatusState: (statusState) => set({ statusState }),
  reset: () => set({ ...initialState }),
}))

export const useLetterStateActions = () => ({
  setStatusState: useLetterStateStore((s) => s.setStatusState),
  reset: useLetterStateStore((s) => s.reset),
})
