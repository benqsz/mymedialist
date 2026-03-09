import { jikanApi } from '@/services/jikan/constants'
import type { JikanPaginatedResponse } from '@/types/jikan/common'
import type { Manga, MangaQueryParams } from '@/types/jikan/manga'

export const searchManga = async (params?: MangaQueryParams) => {
  return (await jikanApi
    .url('/manga')
    .query({ ...params })
    .get()
    .json()) as JikanPaginatedResponse<Manga>
}
