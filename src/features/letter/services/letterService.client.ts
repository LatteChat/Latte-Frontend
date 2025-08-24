'use client'

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

type Letter = {
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

export type FilteredJuniorLetterListResponse = PageResponse<FilterdLetter>

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
}): Promise<FilteredJuniorLetterListResponse> => {
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
