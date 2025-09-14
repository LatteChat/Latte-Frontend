import { httpCSR } from '@/shared/apis/http'

// 중장년층 답변 작성
export const saveAnswer = async (
  { seniorId, letterId }: { seniorId: number; letterId: number },
  body: {
    content: string
  }
) => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/senior/${seniorId}/${letterId}/answer/save`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })
}

// 답변 수정
export const updateAnswer = async ({
  letterId,
  answerId,
  body,
}: {
  letterId: number
  answerId: number
  body: {
    content: string
  }
}) => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/senior/${letterId}/${answerId}/answer/modify`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })
}
