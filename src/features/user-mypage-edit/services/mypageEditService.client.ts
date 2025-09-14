import { httpCSR } from '@/shared/apis/http'

// 청년 정보 수정
export const updateJuniorUser = async ({
  juniorId,
  payload,
}: {
  juniorId: number
  payload: FormData
}): Promise<any> => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/junior/${juniorId}/mypage/detail`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: payload,
  })
}

// 중장년 정보 수정
export const updateSeniorUser = async ({
  seniorId,
  payload,
}: {
  seniorId: number
  payload: FormData
}): Promise<any> => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/senior/${seniorId}/mypage/detail`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: payload,
  })
}

// 청년 태그 검색
export const fetchJuniorTagList = async ({
  keyword,
}: {
  keyword: string
}): Promise<any> => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/junior/tags/search?keyword=${keyword}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
