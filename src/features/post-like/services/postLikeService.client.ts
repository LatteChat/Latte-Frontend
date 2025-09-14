import { httpCSR } from '@/shared/apis/http'

// 사연 좋아요
export const savePostLike = async ({
  letterId,
  userId,
  memberType,
}: {
  letterId: number
  userId: number
  memberType: string // SENIOR, JUNIOR
}) => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(
    `/letter/${letterId}/${userId}/heart?memberType=${memberType}`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
}
