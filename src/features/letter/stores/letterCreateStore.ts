import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type LetterCreateState = {
  category: string | null
  answerType: string | null
  title: string
  content: string
  isOpen: boolean
}

type LetterCreateActions = {
  setCategory: (name: string) => void
  setAnswerType: (answerType: string) => void
  setTitle: (title: string) => void
  setContent: (content: string) => void
  setIsOpen: (isOpen: boolean) => void
  reset: () => void
}

const initialState: LetterCreateState = {
  category: null,
  answerType: null,
  title: '',
  content: '',
  isOpen: false,
}

export const useLetterCreateStore = create<
  LetterCreateState & LetterCreateActions
>()(
  persist(
    (set) => ({
      ...initialState,
      setCategory: (category) => set({ category }),
      setAnswerType: (answerType) => set({ answerType }),
      setTitle: (title) => set({ title }),
      setContent: (content) => set({ content }),
      setIsOpen: (isOpen) => set({ isOpen }),
      reset: () => set({ ...initialState }),
    }),
    { name: 'letter-create-storage' }
  )
)

export const useLetterCreateState = () => ({
  category: useLetterCreateStore((s) => s.category),
  answerType: [useLetterCreateStore((s) => s.answerType)],
  title: useLetterCreateStore((s) => s.title),
  content: useLetterCreateStore((s) => s.content),
  isOpen: useLetterCreateStore((s) => s.isOpen),
})

export const useLetterCreateActions = () => ({
  setCategory: useLetterCreateStore((s) => s.setCategory),
  setAnswerType: useLetterCreateStore((s) => s.setAnswerType),
  setTitle: useLetterCreateStore((s) => s.setTitle),
  setContent: useLetterCreateStore((s) => s.setContent),
  setIsOpen: useLetterCreateStore((s) => s.setIsOpen),
  reset: useLetterCreateStore((s) => s.reset),
})
