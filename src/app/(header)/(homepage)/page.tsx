import Container from '@/app/_components/ui/container'
import { sessionCheck } from '@/auth/utils'

export default async function HomePage() {
  await sessionCheck()

  return <Container as="main">home page</Container>
}
