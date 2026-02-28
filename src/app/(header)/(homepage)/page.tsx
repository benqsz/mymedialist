import MediaGrid from '@/app/_components/media-list/media-grid'
import Container from '@/app/_components/ui/container'
import { sessionCheck } from '@/auth/utils'
import { searchAnime } from '@/services/jikan/endpoints/anime/search'
import { AnimeOrderByEnum, AnimeStatusEnum } from '@/types/jikan/anime'
import { MediaEnum } from '@/types/media'

export default async function HomePage() {
  await sessionCheck()
  const animes = await searchAnime({
    order_by: AnimeOrderByEnum.POPULARITY,
    status: AnimeStatusEnum.AIRING,
    limit: 24,
  })

  return (
    <Container as="main">
      <MediaGrid
        items={animes.data.map(anime => ({
          id: anime.mal_id,
          title: anime.title,
          image: anime.images.jpg.image_url,
          type: MediaEnum.ANIME,
        }))}
      />
    </Container>
  )
}
