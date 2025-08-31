'use client'

import { httpCSR } from '@/shared/apis/http'

type AgeType =
  | 'UNDER_10'
  | 'TEENAGER'
  | 'TWENTIES'
  | 'THIRTIES'
  | 'FORTIES'
  | 'FIFTIES'
  | 'SIXTIES_AND_ABOVE'

interface MemberDetailDto {
  name: string
  image: string
  tag: string[]
  age: AgeType
}

interface CommentDto {
  commentId: number
  juniorDetailDto: MemberDetailDto
  seniorDetailDto: MemberDetailDto
  comment: string
  heart: number
  replyCount: number
  createdAt: string // ISO 날짜 문자열
  isEdit: boolean
  replies: any[]
}

interface SortInfo {
  direction: string
  nullHandling: string
  ascending: boolean
  property: string
  ignoreCase: boolean
}

interface PageableInfo {
  offset: number
  sort: SortInfo[]
  pageSize: number
  pageNumber: number
  paged: boolean
  unpaged: boolean
}

interface CommentListResponse {
  totalPages: number
  totalElements: number
  size: number
  content: CommentDto[]
  number: number
  sort: SortInfo[]
  first: boolean
  last: boolean
  numberOfElements: number
  pageable: PageableInfo
  empty: boolean
}

// 사연 댓글 조회
export const fetchCommentList = async ({
  letterId,
  page,
  sort,
}: {
  letterId: number
  page: number
  sort: string // createdAt | heart
}): Promise<CommentListResponse> => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/main/${letterId}/comments?page=${page}&sort=${sort}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

// 사연 댓글 작성
export const saveComment = async ({
  letterId,
  body,
}: {
  letterId: number
  body: {
    memberType: string
    seniorId?: number | null
    juniorId?: number | null
    parentId: number | null
    comment: string
  }
}) => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/comment/${letterId}/comment`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })
}

// 사연 댓글 삭제
export const deleteComment = async ({ commentId }: { commentId: number }) => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/comment/${commentId}/delete`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

// 사연 댓글 수정
export const updateComment = async ({
  commentId,
  payload,
}: {
  commentId: number
  payload: {
    comment: string
  }
}) => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/comment/${commentId}/modify`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  })
}
