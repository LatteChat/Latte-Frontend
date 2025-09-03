import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type User = {
  id: number | null
  profile: string | null
  nickname: string | null
}

type ChatUserState = {
  senior: User
  junior: User
  receiver: User
}

type ChatUserActions = {
  setSenior: (senior: User) => void
  setJunior: (junior: User) => void
  setReceiver: (receiver: User) => void
  setAll: (payload: Partial<ChatUserState>) => void
  reset: () => void
}

const initialState: ChatUserState = {
  senior: {
    id: null,
    profile: null,
    nickname: null,
  },
  junior: {
    id: null,
    profile: null,
    nickname: null,
  },
  receiver: {
    id: null,
    profile: null,
    nickname: null,
  },
}

export const useChatUserStore = create<ChatUserState & ChatUserActions>()(
  persist(
    (set) => ({
      ...initialState,
      setSenior: (senior) => set({ senior }),
      setJunior: (junior) => set({ junior }),
      setReceiver: (receiver) => set({ receiver }),
      setAll: (payload) => set(payload),
      reset: () => set({ ...initialState }),
    }),
    {
      name: 'chat-user-storage', // localStorage에 저장될 key
    }
  )
)

export const useChatUserState = () => ({
  senior: useChatUserStore((s) => s.senior),
  junior: useChatUserStore((s) => s.junior),
  receiver: useChatUserStore((s) => s.receiver),
})

export const useChatUserActions = () => ({
  setSenior: useChatUserStore((s) => s.setSenior),
  setJunior: useChatUserStore((s) => s.setJunior),
  setReceiver: useChatUserStore((s) => s.setReceiver),
  setAll: useChatUserStore((s) => s.setAll),
  reset: useChatUserStore((s) => s.reset),
})
