import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Status = 'WAITING' | 'ACTIVE' | 'INACTIVE'

type ChatStatusState = {
  status: Status | null
}

type ChatStatusActions = {
  setStatus: (status: Status | null) => void
  reset: () => void
}

const initialState: ChatStatusState = {
  status: null,
}

export const useChatStatusStore = create<ChatStatusState & ChatStatusActions>()(
  persist(
    (set) => ({
      ...initialState,
      setStatus: (status) => set({ status }),
      reset: () => set({ ...initialState }),
    }),
    {
      name: 'chat-status-storage',
    }
  )
)

export const useChatStatusState = () => ({
  status: useChatStatusStore((s) => s.status),
})

export const useChatStatusActions = () => ({
  setStatus: useChatStatusStore((s) => s.setStatus),
  reset: useChatStatusStore((s) => s.reset),
})
