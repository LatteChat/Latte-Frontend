import { AgeType } from '@/features/user/types/User'
import { httpCSR } from '@/shared/apis/http'
import { AnswerStatus } from '@/shared/types/AnswerStatus'
import { Category } from '@/shared/types/Category'

export type Letter = {
  letterId: number
  juniorId: number
  answerStatus: AnswerStatus
  letterStatus:
    | 'WRITING'
    | 'SENT'
    | 'ANSWERED'
    | 'ADOPTED'
    | 'MATCHED'
    | 'EMPTY'
  title: string
  content: string
  image: string | null
  category: Category
  view: number
  heart: number
  createAt: string
}

export type UserDetail = {
  name: string
  image: string
  tag: string[]
  age: AgeType
}

export type AnswerResponse = {
  seniorDetailDto: UserDetail
  createdAt: string
  content: string
}

export type LetterDetailResponseDto = {
  juniorDetailDto: UserDetail
  createdAt: string
  view: number
  heart: number
  category: Category
  image: string
  title: string
  content: string
  letterStatus: AnswerStatus
  answerResponseDto: AnswerResponse[]
  answerType: string[]
  isOpen: boolean
}

// 청년층 작성한 최신 사연 목록 조회 (원두 형태 5개)
export const fetchRecentJuniorLetterList = async ({
  juniorId,
}: {
  juniorId: number
}): Promise<Letter[]> => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/junior/${juniorId}/coffee`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

// 청년 글 보관함 new 체크
export const fetchLetterArchiveNewState = async ({
  juniorId,
}: {
  juniorId: number
}): Promise<LetterDetailResponseDto> => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/junior/${juniorId}/is-new`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
