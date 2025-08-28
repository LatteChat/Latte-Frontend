'use client'

import { httpCSR } from '@/shared/apis/http'

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
