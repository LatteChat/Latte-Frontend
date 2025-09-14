import { httpCSR } from '@/shared/apis/http'

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
