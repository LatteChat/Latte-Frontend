import { httpCSR } from '@/shared/apis/http'

// 중장년층 사연 선택
export const fetchSelectLetter = async ({
  seniorId,
  letterId,
}: {
  seniorId: number
  letterId: number
}): Promise<number> => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/senior/${seniorId}/${letterId}/pick`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
