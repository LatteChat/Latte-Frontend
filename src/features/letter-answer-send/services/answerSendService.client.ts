import { httpCSR } from '@/shared/apis/http'
import { AnswerStatus } from '@/shared/types/AnswerStatus'
import { Category } from '@/shared/types/Category'
import { PageResponse } from '@/shared/types/Pagination'

export type Letter = {
  letterId: number
  juniorId: number
  answerStatus: AnswerStatus
  title: string
  content: string
  image: string | null
  category: Category
  view: number
  heart: number
  createAt: string
}

export type FilterdLetter = Letter & {
  juniorName: string
  liked: boolean
}

export type FilteredSeniorLetterListResponse = PageResponse<FilterdLetter>

// 중장년층 답변 전송
export const sendAnswer = async ({
  letterId,
  answerId,
}: {
  letterId: number
  answerId: number
}) => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(`/senior/${letterId}/${answerId}/answer/transmit`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
