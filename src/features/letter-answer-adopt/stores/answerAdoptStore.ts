import { create } from 'zustand'

type AnswerAdoptState = {
  selectedAnswer: number
}

type AnswerAdoptActions = {
  setSelectedAnswer: (selectedAnswer: number) => void
  reset: () => void
}

const initialState: AnswerAdoptState = {
  selectedAnswer: 0,
}

export const useAnswerAdoptStore = create<
  AnswerAdoptState & AnswerAdoptActions
>()((set) => ({
  ...initialState,
  setSelectedAnswer: (selectedAnswer) => set({ selectedAnswer }),
  reset: () => set({ ...initialState }),
}))

export const useAnswerAdoptState = () => ({
  selectedAnswer: useAnswerAdoptStore((s) => s.selectedAnswer),
})

export const useAnswerAdoptActions = () => ({
  setSelectedAnswer: useAnswerAdoptStore((s) => s.setSelectedAnswer),
  reset: useAnswerAdoptStore((s) => s.reset),
})
