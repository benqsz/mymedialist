import Link from 'next/link'

import { Button } from '@/app/_components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/_components/ui/card'
import Container from '@/app/_components/ui/container'
import SignInForm from '@/app/(auth)/sign-in/_components/sign-in-form'

export default function SignInPage() {
  return (
    <Container width="small" variant="centered" as="main">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Login to MyAnimeList</CardTitle>
        </CardHeader>
        <CardContent>
          <SignInForm />
        </CardContent>
        <CardFooter>
          <Button variant="link" asChild className="mx-auto">
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </CardFooter>
      </Card>
    </Container>
  )
}
