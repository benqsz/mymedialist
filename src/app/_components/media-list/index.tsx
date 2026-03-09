import { limitPerPage } from '@/app/_lib/constants'
import MediaGrid from '@/app/_components/media-list/grid'
import MediaPagination from '@/app/_components/media-list/pagination'
import { searchAnime } from '@/services/jikan/endpoints/anime/search'
import type { Sort } from '@/types/common'
import {
  type AnimeOrderBy,
  type AnimeRating,
  type AnimeStatus,
  type AnimeType,
} from '@/types/jikan/anime'
import { MediaEnum } from '@/types/media'

type Props = {
  page: number
  search: string
  sort: Sort
  animeOrderBy: AnimeOrderBy
  animeType: AnimeType | null
  animeStatus: AnimeStatus | null
  animeRating: AnimeRating | null
}

export default async function MediaList(props: Props) {
  const {
    page,
    search,
    sort,
    animeOrderBy,
    animeType,
    animeStatus,
    animeRating,
  } = props

  const animes = await searchAnime({
    order_by: animeOrderBy,
    limit: limitPerPage.DEFAULT,
    page,
    q: search,
    sort: sort || undefined,
    status: animeStatus || undefined,
    type: animeType || undefined,
    rating: animeRating || undefined,
  })

  return (
    <>
      <MediaGrid
        items={animes.data.map(anime => ({
          id: anime.mal_id,
          title: anime.title,
          image: anime.images.jpg.image_url,
          type: MediaEnum.ANIME,
        }))}
      />
      <MediaPagination
        currentPage={animes.pagination.current_page}
        totalPages={Math.ceil(
          animes.pagination.items.total / animes.pagination.items.per_page,
        )}
        hasNextPage={animes.pagination.has_next_page}
        hasPreviousPage={animes.pagination.current_page > 1}
      />
    </>
  )
}
