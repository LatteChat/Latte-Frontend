'use client'

import { httpCSR } from '@/shared/apis/http'
import { JuniorInfo, UserInfo } from '../types/User'

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
}): Promise<JuniorInfo> => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/junior/${juniorId}/detail`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
