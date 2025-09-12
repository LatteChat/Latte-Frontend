import { cookies } from 'next/headers'
import { httpSSR } from '@/shared/apis/http'
import { UserInfo } from '../types/User'

export async function getUserServer(): Promise<UserInfo | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get('accessToken')?.value
  if (!token) return null

  return await httpSSR<UserInfo>(`/me`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  })
}
