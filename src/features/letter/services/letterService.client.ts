'use client'

import { AgeType } from '@/features/user/types/User'
import { httpCSR } from '@/shared/apis/http'
import { AnswerStatus } from '@/shared/types/AnswerStatus'
import { Category } from '@/shared/types/Category'
import { PageResponse } from '@/shared/types/Pagination'

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

// 청년층 필터링 별 사연 조회 (카테고리, 사연 상태)
export const fetchFilteredJuniorLetterList = async ({
  juniorId,
  category,
  answer,
  page,
}: {
  juniorId: number
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

  return await httpCSR(`/junior/${juniorId}/category?${query.toString()}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

// 청년 사연 상세 조회
export const fetchJuniorLetterDetail = async ({
  letterId,
}: {
  letterId: number
}): Promise<LetterDetailResponseDto> => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/junior/${letterId}/detail`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

// 답변 채택
export const updateAdoptedAnswer = async ({
  letterId,
  answerId,
}: {
  letterId: number
  answerId: number
}) => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/letter/${letterId}/${answerId}/adopt`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

// 사연 삭제
export const deleteLetter = async ({ letterId }: { letterId: number }) => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  console.log(letterId)

  return await httpCSR(`/junior/${letterId}/delete`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
