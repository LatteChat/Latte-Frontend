import { httpSSR } from '@/shared/apis/http'

type AgeType =
  | 'TEENAGER'
  | 'TWENTIES'
  | 'THIRTIES'
  | 'FORTIES'
  | 'FIFTIES'
  | 'SIXTIES'

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
export const fetchPostDetailServer = async ({
  letterId,
  userId,
  memberType,
}: {
  letterId: number
  userId?: number | null
  memberType?: string | null // SENIOR, JUNIOR
}): Promise<PostDetailResponse> => {
  const query = new URLSearchParams({
    ...(userId ? { userId: String(userId) } : {}),
    ...(memberType ? { memberType } : {}),
  })

  return await httpSSR(`/main/${letterId}/detail/all?${query.toString()}`, {
    method: 'GET',
  })
}
