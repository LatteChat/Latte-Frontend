import { httpCSR } from '@/shared/apis/http'
import { AnswerStatus } from '@/shared/types/AnswerStatus'
import { Category } from '@/shared/types/Category'
import { PageResponse } from '@/shared/types/Pagination'

export type Letter = {
  letterId: number
  juniorId: number
  answerStatus: AnswerStatus
  title: string
  content: string
  image: string | null
  category: Category
  view: number
  heart: number
  createAt: string
}

export type FilterdLetter = Letter & {
  juniorName: string
  liked: boolean
}

// 중장년 사연 리스트 조회
export const fetchLetterList = async ({
  page,
  seniorId,
}: {
  page: number
  seniorId: number
}): Promise<any> => {
  console.log(seniorId)
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/senior/${seniorId}/letter?page=${page}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export type FilteredSeniorLetterListResponse = PageResponse<FilterdLetter>

// 중장년층 필터링 별 사연 조회 (카테고리, 사연 상태)
export const fetchFilteredSeniorLetterList = async ({
  seniorId,
  category,
  answer,
  page,
}: {
  seniorId: number
  category: string | null
  answer: 0 | 1 | 2 | 3 | 4 // (0: 전체, 1: 답변 대기중, 2: 사연 저장, 3: 채택 완료, 4: 답변 완료)
  page: number
}): Promise<any> => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  const query = new URLSearchParams({
    ...(category ? { category } : {}),
    answer: String(answer),
    page: String(page),
  })

  return await httpCSR(`/senior/${seniorId}/category?${query.toString()}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

// 중장년층 답변 작성
export const saveAnswer = async (
  { seniorId, letterId }: { seniorId: number; letterId: number },
  body: {
    content: string
  }
) => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/senior/${seniorId}/${letterId}/answer/save`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })
}

// 중장년층 답변 전송
export const sendAnswer = async ({
  letterId,
  answerId,
}: {
  letterId: number
  answerId: number
}) => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/senior/${letterId}/${answerId}/answer/transmit`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

// 중장년층 선택한 사연 개수 조회
export const fetchSelectedLetterCount = async ({
  seniorId,
}: {
  seniorId: number
}): Promise<number> => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/senior/${seniorId}/count`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

// 중장년층 사연 선택
export const fetchSelectLetter = async ({
  seniorId,
  letterId,
}: {
  seniorId: number
  letterId: number
}): Promise<number> => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/senior/${seniorId}/${letterId}/pick`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
