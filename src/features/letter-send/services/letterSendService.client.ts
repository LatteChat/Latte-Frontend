import { httpCSR } from '@/shared/apis/http'

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
