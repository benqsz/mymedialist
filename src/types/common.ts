export const SortEnum = {
  DESC: 'desc',
  ASC: 'asc',
} as const

export type Sort = typeof SortEnum
