import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type AgeType =
  | 'UNDER_10'
  | 'TEENAGER'
  | 'TWENTIES'
  | 'THIRTIES'
  | 'FORTIES'
  | 'FIFTIES'
  | 'SIXTIES_AND_ABOVE'

export type MemberType = 'SENIOR' | 'JUNIOR'

type SignupState = {
  name: string
  age: AgeType | null
  memberType: MemberType | null
  categoryList: string[]
  pushAllowed: boolean
}

type SignupActions = {
  setName: (name: string) => void
  setAge: (age: AgeType) => void
  setMemberType: (memberType: MemberType) => void
  setCategoryList: (category: string) => void
  setPushAllowed: (pushAllowed: boolean) => void
  reset: () => void
}

const initialState: SignupState = {
  name: '',
  age: null,
  memberType: null,
  categoryList: [],
  pushAllowed: false,
}

export const useSignupStore = create<SignupState & SignupActions>()(
  persist(
    (set) => ({
      ...initialState,
      setName: (name) => set({ name }),
      setAge: (age) => set({ age }),
      setMemberType: (memberType) => set({ memberType }),
      setCategoryList: (category) =>
        set((state) => ({
          categoryList: state.categoryList.includes(category)
            ? state.categoryList.filter((c) => c !== category)
            : [...state.categoryList, category],
        })),
      setPushAllowed: (pushAllowed) => set({ pushAllowed }),
      reset: () => set({ ...initialState }),
    }),
    { name: 'signup-storage' }
  )
)

export const useSignupState = () => ({
  name: useSignupStore((s) => s.name),
  age: useSignupStore((s) => s.age),
  memberType: useSignupStore((s) => s.memberType),
  categoryList: useSignupStore((s) => s.categoryList),
  pushAllowed: useSignupStore((s) => s.pushAllowed),
})

export const useSignupActions = () => ({
  setName: useSignupStore((s) => s.setName),
  setAge: useSignupStore((s) => s.setAge),
  setMemberType: useSignupStore((s) => s.setMemberType),
  setCategoryList: useSignupStore((s) => s.setCategoryList),
  setPushAllowed: useSignupStore((s) => s.setPushAllowed),
  reset: useSignupStore((s) => s.reset),
})
