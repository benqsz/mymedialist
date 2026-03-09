import { createLoader, parseAsInteger } from 'nuqs/server'
import { Suspense } from 'react'

import MediaList from '@/app/_components/media-list'
import Container from '@/app/_components/ui/container'
import { sessionCheck } from '@/auth/utils'

const listParams = createLoader({
  page: parseAsInteger.withDefault(1),
})

export default async function HomePage({ searchParams }: PageProps<'/'>) {
  await sessionCheck()
  const { page } = await listParams(searchParams)

  return (
    <Container as="main">
      <Suspense fallback={<div>Loading...</div>} key={page}>
        <MediaList page={page} />
      </Suspense>
    </Container>
  )
}
