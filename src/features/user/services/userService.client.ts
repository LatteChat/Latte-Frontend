'use client'

import { httpCSR } from '@/shared/apis/http'
import { UserInfo } from '../types/User'

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

// 중장년층 정보 등록
export const saveSeniorUser = async (
  { memberId }: { memberId: number },
  body: any
) => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/senior/${memberId}/info`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })
}

// 유저 정보 가져오기
export const getUser = async (): Promise<UserInfo> => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR<UserInfo>(`/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

// 청년 상세 조회
export const fetchJuniorUser = async ({
  juniorId,
}: {
  juniorId: number
}): Promise<any> => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/junior/${juniorId}/mypage`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

// 중장년 상세 조회
export const fetchSeniorUser = async ({
  seniorId,
}: {
  seniorId: number
}): Promise<any> => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/senior/${seniorId}/mypage`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
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
