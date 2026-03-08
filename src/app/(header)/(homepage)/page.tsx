import MediaList from '@/app/_components/media-list'
import Container from '@/app/_components/ui/container'
import { sessionCheck } from '@/auth/utils'
import { searchAnime } from '@/services/jikan/endpoints/anime/search'
import { AnimeOrderByEnum, AnimeStatusEnum } from '@/types/jikan/anime'
import { MediaEnum } from '@/types/media'

export default async function HomePage({ searchParams }: PageProps<'/'>) {
  await sessionCheck()
  const params = await searchParams
  const animes = await searchAnime({
    order_by: AnimeOrderByEnum.POPULARITY,
    status: AnimeStatusEnum.AIRING,
    limit: 24,
    page: Number(params.page) || 1,
  })

  return (
    <Container as="main">
      <MediaList
        items={animes.data.map(anime => ({
          id: anime.mal_id,
          title: anime.title,
          image: anime.images.jpg.image_url,
          type: MediaEnum.ANIME,
        }))}
        pagination={{
          currentPage: animes.pagination.current_page,
          totalPages: animes.pagination.items.total,
          hasNextPage: animes.pagination.has_next_page,
          hasPreviousPage: animes.pagination.current_page > 1,
        }}
      />
    </Container>
  )
}
