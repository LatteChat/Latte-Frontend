import { httpSSR } from '@/shared/apis/http'
import { Category } from '@/shared/types/Type'

type AnswerStatus =
  | 'WRITING'
  | 'SEND'
  | 'WAITING'
  | 'SAVED'
  | 'ANSWERED'
  | 'ADOPTED'
  | 'MATCHED'

export type Letter = {
  category: Category
  content: string
  countComments: number
  createAt: string
  heart: number
  image: string
  juniorId: number
  juniorName: string
  letterId: number
  // answerStatus: AnswerStatus
  liked: boolean
  title: string
  view: number
}

export type Sort = {
  direction: string
  nullHandling: string
  ascending: boolean
  property: string
  ignoreCase: boolean
}

export type Pageable = {
  offset: number
  sort: Sort[]
  paged: boolean
  pageNumber: number
  pageSize: number
  unpaged: boolean
}

export type PageResponse<T> = {
  totalElements: number
  totalPages: number
  size: number
  content: T[]
  number: number
  sort: Sort[]
  numberOfElements: number
  first: boolean
  last: boolean
  pageable: Pageable
  empty: boolean
}

type PostListResponse = PageResponse<Letter>

// 전체 글 조회
export const fetchPostListServer = async ({
  page,
  filter,
  category,
  userId,
  memberType,
}: {
  page: number
  filter: 'all' | 'view' // all(최신순) , view(조회순)
  category?: string | null
  userId?: number | null
  memberType?: string | null
}): Promise<PostListResponse> => {
  const query = new URLSearchParams({
    ...(category ? { category } : {}),
    ...(userId ? { userId: String(userId) } : {}),
    ...(memberType ? { memberType } : {}),
    page: String(page),
    filter: String(filter),
  })

  return await httpSSR(`/main/list?${query.toString()}`, {
    method: 'GET',
  })
}
