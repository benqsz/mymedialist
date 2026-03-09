import { createLoader, parseAsInteger, parseAsString } from 'nuqs/server'
import { Suspense } from 'react'

import { limitPerPage, searchParamKeys } from '@/app/_lib/constants'
import MediaList from '@/app/_components/media-list'
import MediaSearch from '@/app/_components/media-list/search'
import MediaListSkeleton from '@/app/_components/media-list/skeleton'
import Container from '@/app/_components/ui/container'
import { sessionCheck } from '@/auth/utils'

const listParams = createLoader({
  [searchParamKeys.page]: parseAsInteger.withDefault(1),
  [searchParamKeys.query]: parseAsString.withDefault(''),
})

export default async function HomePage({ searchParams }: PageProps<'/'>) {
  await sessionCheck()
  const { page, search } = await listParams(searchParams)

  return (
    <Container as="main" className="flex flex-col gap-4 my-4">
      <MediaSearch />
      <Suspense
        fallback={<MediaListSkeleton length={limitPerPage.DEFAULT} />}
        key={page + search}
      >
        <MediaList page={page} search={search} />
      </Suspense>
    </Container>
  )
}
