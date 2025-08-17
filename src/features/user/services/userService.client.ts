'use client'

import { httpCSR } from '@/shared/apis/http'

// 청년층 정보 등록
export const saveJuniorUser = async (
  { memberId }: { memberId: number },
  body: any
) => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/junior/${memberId}/info`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })
}
