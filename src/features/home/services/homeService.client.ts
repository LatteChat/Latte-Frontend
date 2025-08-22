'use client'

import { httpCSR } from '@/shared/apis/http'
import { Category } from '@/shared/types/Type'

type AnswerStatus =
  | 'WRITING'
  | 'SEND'
  | 'WAITING'
  | 'SAVED'
  | 'ANSWERED'
  | 'ADOPTED'
  | 'MATCHED'

export type Letter = {
  letterId: number
  juniorId: number
  answerStatus: AnswerStatus
  title: string
  content: string
  image: string
  category: Category
  view: number
  heart: number
  createAt: string
}

export type Sort = {
  direction: string
  nullHandling: string
  ascending: boolean
  property: string
  ignoreCase: boolean
}

export type Pageable = {
  offset: number
  sort: Sort[]
  paged: boolean
  pageNumber: number
  pageSize: number
  unpaged: boolean
}

export type PageResponse<T> = {
  totalElements: number
  totalPages: number
  size: number
  content: T[]
  number: number
  sort: Sort[]
  numberOfElements: number
  first: boolean
  last: boolean
  pageable: Pageable
  empty: boolean
}

type PostListResponse = PageResponse<Letter>

// 전체 글 조회
export const fetchPostList = async ({
  page,
  filter,
}: {
  page: number
  filter: 'all' | 'view' // all(최신순) , view(조회순)
}): Promise<PostListResponse> => {
  return await httpCSR(`/main/all?page=${page}&filter=${filter}`, {
    method: 'GET',
  })
}

type Barista = {
  image: string
  seniorId: number
  adopt: number
}

type BaristaListResponse = Barista[]

// 이달의 바리스타 조회
export const fetchBaristaList = async (): Promise<BaristaListResponse> => {
  return await httpCSR(`/main/best/senior`, {
    method: 'GET',
  })
}

type PostListByCategoryResponse = PageResponse<Letter>

// 카테고리 별 게시물 조회
export const fetchPostListByCategory = async ({
  page,
  category,
}: {
  page: number
  category: string
}): Promise<PostListByCategoryResponse> => {
  return await httpCSR(`/main/category?page=${page}&category=${category}`, {
    method: 'GET',
  })
}
