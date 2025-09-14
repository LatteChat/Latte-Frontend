import { httpCSR } from '@/shared/apis/http'

// 중장년 사연 상세 조회
export const fetchSeniorLetterDetail = async ({
  letterId,
  seniorId,
}: {
  letterId: number
  seniorId: number
}): Promise<any> => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/senior/${letterId}/${seniorId}/detail`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
