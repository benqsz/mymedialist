import { headers as headersStore } from 'next/headers'

import Container from '@/app/_components/ui/container'
import { Spinner } from '@/app/_components/ui/spinner'
import { auth } from '@/auth'
import { sessionCheck } from '@/auth/utils'

export default async function SignOutPage() {
  await sessionCheck()
  const headers = await headersStore()
  await auth.api.signOut({
    headers,
  })

  return (
    <Container as="main" variant="centered" width="small">
      <Spinner />
    </Container>
  )
}
