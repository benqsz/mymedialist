import {
  createLoader,
  parseAsInteger,
  parseAsString,
  parseAsStringEnum,
} from 'nuqs/server'
import { Suspense } from 'react'

import { limitPerPage, searchParamKeys } from '@/app/_lib/constants'
import MediaList from '@/app/_components/media-list'
import MediaFilters from '@/app/_components/media-list/filters'
import MediaSearch from '@/app/_components/media-list/search'
import MediaListSkeleton from '@/app/_components/media-list/skeleton'
import Container from '@/app/_components/ui/container'
import { sessionCheck } from '@/auth/utils'
import { SortEnum, type Sort } from '@/types/common'
import {
  AnimeOrderByEnum,
  AnimeRatingEnum,
  AnimeStatusEnum,
  AnimeTypeEnum,
  type AnimeOrderBy,
  type AnimeRating,
  type AnimeStatus,
  type AnimeType,
} from '@/types/jikan/anime'

const listParams = createLoader({
  [searchParamKeys.page]: parseAsInteger.withDefault(1),
  [searchParamKeys.query]: parseAsString.withDefault(''),
  [searchParamKeys.sort]: parseAsStringEnum<Sort>(
    Object.values(SortEnum),
  ).withDefault(SortEnum.ASC),
  [searchParamKeys.animeOrderBy]: parseAsStringEnum<AnimeOrderBy>(
    Object.values(AnimeOrderByEnum),
  ).withDefault(AnimeOrderByEnum.POPULARITY),
  [searchParamKeys.animeType]: parseAsStringEnum<AnimeType>(
    Object.values(AnimeTypeEnum),
  ),
  [searchParamKeys.animeStatus]: parseAsStringEnum<AnimeStatus>(
    Object.values(AnimeStatusEnum),
  ),
  [searchParamKeys.animeRating]: parseAsStringEnum<AnimeRating>(
    Object.values(AnimeRatingEnum),
  ),
})

export default async function HomePage({ searchParams }: PageProps<'/'>) {
  await sessionCheck()
  const {
    page,
    search,
    sort,
    animeOrderBy,
    animeType,
    animeStatus,
    animeRating,
  } = await listParams(searchParams)

  return (
    <Container as="main" className="flex flex-col gap-4 my-4">
      <div className="w-full flex gap-4">
        <MediaSearch />
        <MediaFilters />
      </div>
      <Suspense
        fallback={<MediaListSkeleton length={limitPerPage.DEFAULT} />}
        key={
          page +
          search +
          sort +
          animeType +
          animeStatus +
          animeOrderBy +
          animeRating
        }
      >
        <MediaList
          page={page}
          search={search}
          sort={sort}
          animeOrderBy={animeOrderBy}
          animeType={animeType}
          animeStatus={animeStatus}
          animeRating={animeRating}
        />
      </Suspense>
    </Container>
  )
}
