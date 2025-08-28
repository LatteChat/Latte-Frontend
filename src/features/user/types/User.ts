export type MemberType = 'SENIOR' | 'JUNIOR'

export type UserInfo = {
  memberType: MemberType
  juniorId?: number | null
  seniorId?: number | null
}

export type AgeType =
  | 'UNDER_10'
  | 'TEENAGER'
  | 'TWENTIES'
  | 'THIRTIES'
  | 'FORTIES'
  | 'FIFTIES'
  | 'SIXTIES_AND_ABOVE'

export type JuniorInfo = {
  name: string
  image: string
  tag: string[]
  age: AgeType
}
