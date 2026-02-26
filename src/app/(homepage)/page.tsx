import Container from '@/app/_components/ui/container'
import ThemeToggle from '@/app/(homepage)/_components/theme-toggle'
import { sessionCheck } from '@/auth/utils'

export default async function HomePage() {
  await sessionCheck()

  return (
    <Container as="main">
      home page
      <ThemeToggle />
    </Container>
  )
}
