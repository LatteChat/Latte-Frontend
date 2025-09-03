import { httpCSR } from '@/shared/apis/http'

type AgeType =
  | 'UNDER_10'
  | 'TWENTIES'
  | 'THIRTIES'
  | 'FORTIES'
  | 'FIFTIES'
  | 'SIXTIES_AND_ABOVE'

type CategoryType = 'NEWS' | 'OTHER' // 실제 도메인에 맞게 확장

type AnswerStatus =
  | 'WRITING'
  | 'SEND'
  | 'WAITING'
  | 'SAVED'
  | 'ANSWERED'
  | 'ADOPTED'
  | 'MATCHED'
  | 'EMPTY'

interface MemberDetailDto {
  name: string
  image: string
  tag: string[]
  age: AgeType
}

interface AnswerResponseDto {
  seniorDetailDto: MemberDetailDto & { seniorId: number }
  createdAt: string
  content: string
}

interface CommentResponseDto {
  commentId: number
  juniorDetailDto: MemberDetailDto & { juniorId: number }
  seniorDetailDto: MemberDetailDto & { seniorId: number }
  comment: string
  heart: number
  replyCount: number
  createdAt: string
  isEdit: boolean
}

interface PostDetailResponse {
  juniorDetailDto: MemberDetailDto & { juniorId: number }
  createdAt: string
  view: number
  heart: number
  category: CategoryType
  image: string
  title: string
  content: string
  totalComments: number
  answerStatus: AnswerStatus
  answerResponseDto: AnswerResponseDto
  commentResponseDto: CommentResponseDto[]
  liked: boolean
}

// 게시글 상세 조회
export const fetchPostDetail = async ({
  letterId,
  userId,
  memberType,
}: {
  letterId: number
  userId: number
  memberType: string // SENIOR, JUNIOR
}): Promise<PostDetailResponse> => {
  const token = localStorage.getItem('accessToken')
  if (!token) throw new Error('토큰이 없습니다.')

  return await httpCSR(
    `/main/${letterId}/${userId}/detail/all?memberType=${memberType}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
}
