import { jikanApi } from '@/services/jikan/constants'
import type { Anime, AnimeQueryParams } from '@/types/jikan/anime'
import type { JikanPaginatedResponse } from '@/types/jikan/common'

export const searchAnime = async (params?: AnimeQueryParams) => {
  return (await jikanApi
    .url('/anime')
    .query({ ...params })
    .get()
    .json()) as JikanPaginatedResponse<Anime>
}
