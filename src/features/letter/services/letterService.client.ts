'use client'

import { AgeType } from '@/features/user/types/User'
import { httpCSR } from '@/shared/apis/http'
import { AnswerStatus } from '@/shared/types/AnswerStatus'
import { Category } from '@/shared/types/Category'
import { PageResponse } from '@/shared/types/Pagination'

// 청년층 사연 작성
export const saveLetter = async (
  { juniorId }: { juniorId: number },
  body: {
    category: string | null
    title: string
    content: string
    isOpen: boolean
  }
) => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/junior/${juniorId}/letter/post`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })
}

// 사연 좋아요
export const savePostLike = async ({
  letterId,
  userId,
  memberType,
}: {
  letterId: number
  userId: number
  memberType: string // SENIOR, JUNIOR
}) => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(
    `/letter/${letterId}/${userId}/heart?memberType=${memberType}`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
}

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
}

// 사연 상세 조회
export const fetchLetterDetail = async ({
  letterId,
}: {
  letterId: number
}): Promise<LetterDetailResponseDto> => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  console.log(letterId)

  return await httpCSR(`/junior/letter/${letterId}/detail`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

// 사연 전송
export const sendLetter = async ({ letterId }: { letterId: number }) => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/junior/${letterId}/send`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
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

// 사연 수정
export const updateLetter = async ({
  letterId,
  body,
}: {
  letterId: number
  body: {
    category: string | null
    title: string
    content: string
    answerType: string[]
    isOpen: boolean
  }
}) => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/junior/${letterId}/modify`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })
}

// 사연 이미지 생성 후 저장
export const saveLetterImage = async ({ letterId }: { letterId: number }) => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/junior/${letterId}/generate/image`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
