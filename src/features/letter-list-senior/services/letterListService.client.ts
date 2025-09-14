import { httpCSR } from '@/shared/apis/http'

// 중장년 사연 리스트 조회
export const fetchLetterList = async ({
  page,
  seniorId,
}: {
  page: number
  seniorId: number
}): Promise<any> => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/senior/${seniorId}/letter?page=${page}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

// 중장년 글 보관함 new 체크
export const fetchSeniorLetterArchiveNewState = async ({
  seniorId,
}: {
  seniorId: number
}): Promise<any> => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/senior/${seniorId}/is-new`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
