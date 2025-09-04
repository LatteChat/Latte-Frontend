export type MemberType = 'SENIOR' | 'JUNIOR'

export type UserInfo = {
  memberType: MemberType
  juniorId?: number | null
  seniorId?: number | null
}

export type AgeType =
  | 'TEENAGER'
  | 'TWENTIES'
  | 'THIRTIES'
  | 'FORTIES'
  | 'FIFTIES'
  | 'SIXTIES'

export type MemberInfo = {
  name: string
  image: string
  tag: string[]
  age: AgeType
}
