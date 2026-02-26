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
import SignUpForm from '@/app/(auth)/sign-up/_components/sign-up-form'

export default function SignUpPage() {
  return (
    <Container width="small" variant="centered" as="main">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Register to MyAnimeList</CardTitle>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
        <CardFooter>
          <Button variant="link" asChild className="mx-auto">
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </CardFooter>
      </Card>
    </Container>
  )
}
