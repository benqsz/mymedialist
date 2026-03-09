import MediaGrid from '@/app/_components/media-list/grid'
import MediaPagination from '@/app/_components/media-list/pagination'
import { searchAnime } from '@/services/jikan/endpoints/anime/search'
import { AnimeOrderByEnum, AnimeStatusEnum } from '@/types/jikan/anime'
import { MediaEnum } from '@/types/media'

type Props = {
  page: number
}

export default async function MediaList({ page }: Props) {
  const animes = await searchAnime({
    order_by: AnimeOrderByEnum.POPULARITY,
    status: AnimeStatusEnum.AIRING,
    limit: 24,
    page,
  })

  return (
    <div className="flex flex-col gap-4 my-4">
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
        totalPages={animes.pagination.items.total}
        hasNextPage={animes.pagination.has_next_page}
        hasPreviousPage={animes.pagination.current_page > 1}
      />
    </div>
  )
}
