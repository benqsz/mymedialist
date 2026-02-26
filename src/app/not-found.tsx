import Link from 'next/link'

import { Button } from '@/app/_components/ui/button'
import Container from '@/app/_components/ui/container'

export default function NotFoundPage() {
  return (
    <Container variant="centered" as="main">
      <div className="flex flex-col items-center gap-4">
        <h1>404</h1>
        <Button variant="link" asChild>
          <Link href="/">Go to homepage</Link>
        </Button>
      </div>
    </Container>
  )
}
