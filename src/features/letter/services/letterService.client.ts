'use client'

import { httpCSR } from '@/shared/apis/http'

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
