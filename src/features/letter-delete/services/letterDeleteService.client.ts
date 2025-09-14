'use client'

import { httpCSR } from '@/shared/apis/http'

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
