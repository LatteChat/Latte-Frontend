export type Sort = {
  empty: boolean
  sorted: boolean
  unsorted: boolean
}

export type Pageable = {
  offset: number
  pageNumber: number
  pageSize: number
  paged: boolean
  unpaged: boolean
  sort: Sort
}

export type PageResponse<T> = {
  content: T[]
  pageable: Pageable
  totalPages: number
  totalElements: number
  last: boolean
  first: boolean
  size: number
  number: number
  numberOfElements: number
  sort: Sort
  empty: boolean
}
