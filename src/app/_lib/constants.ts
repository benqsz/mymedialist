export const zIndexes = {
  header: 50,
} as const

export const searchParamKeys = {
  page: 'page',
  query: 'search',
  sort: 'sort',
  animeOrderBy: 'animeOrderBy',
  animeType: 'animeType',
  animeStatus: 'animeStatus',
  animeRating: 'animeRating',
} as const

export const limitPerPage = {
  SMALL: 12,
  DEFAULT: 24,
  BIG: 36,
  MAX: 48,
} as const
