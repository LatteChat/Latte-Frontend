import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type AnswerCreateState = {
  content: string
}

type AnswerCreateActions = {
  setContent: (content: string) => void
  reset: () => void
}

const initialState: AnswerCreateState = {
  content: '',
}

export const useAnswerCreateStore = create<
  AnswerCreateState & AnswerCreateActions
>()(
  persist(
    (set) => ({
      ...initialState,
      setContent: (content) => set({ content }),
      reset: () => set({ ...initialState }),
    }),
    { name: 'answer-create-storage' }
  )
)

export const useAnswerCreateState = () => ({
  content: useAnswerCreateStore((s) => s.content),
})

export const useAnswerCreateActions = () => ({
  setContent: useAnswerCreateStore((s) => s.setContent),
  reset: useAnswerCreateStore((s) => s.reset),
})
