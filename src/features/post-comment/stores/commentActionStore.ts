import { create } from 'zustand'

type SelectedComment = {
  id: number
  nickname: string
  content: string
}

type CommentType = 'COMMENT' | 'REPLY' | 'EDIT'

type CommentActionState = {
  selectedComment: SelectedComment | null
  type: CommentType
}

type CommentActionActions = {
  setSelectedComment: (selectedComment: SelectedComment) => void
  setType: (type: CommentType) => void
  cancelSelectedComment: () => void
  reset: () => void
}

const initialState: CommentActionState = {
  selectedComment: null,
  type: 'COMMENT',
}

export const useCommentActionStore = create<
  CommentActionState & CommentActionActions
>()((set) => ({
  ...initialState,
  setSelectedComment: (selectedComment) => set({ selectedComment }),
  setType: (type) => set({ type }),
  cancelSelectedComment: () => set({ selectedComment: null }),
  reset: () => set({ ...initialState }),
}))

export const useCommentAction = () => ({
  selectedComment: useCommentActionStore((s) => s.selectedComment),
  type: useCommentActionStore((s) => s.type),
})

export const useCommentActionActions = () => ({
  setSelectedComment: useCommentActionStore((s) => s.setSelectedComment),
  setType: useCommentActionStore((s) => s.setType),
  cancelSelectedComment: useCommentActionStore((s) => s.cancelSelectedComment),
  reset: useCommentActionStore((s) => s.reset),
})
