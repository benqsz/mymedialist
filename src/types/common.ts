export const SortEnum = {
  DESC: 'desc',
  ASC: 'asc',
} as const

export type Sort = typeof SortEnum

export type Pagination = {
  currentPage: number
  totalPages: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}
