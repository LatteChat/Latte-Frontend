import { httpCSR } from '@/shared/apis/http'

// 사연 작성
export const saveLetter = async (
  { juniorId }: { juniorId: number },
  body: {
    category: string | null
    title: string
    content: string
    isOpen: boolean
  }
) => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/junior/${juniorId}/letter/post`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })
}
