import { Button } from '@frontend/_components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@frontend/_components/ui/card'
import Container from '@frontend/_components/ui/container'
import SignInForm from '@frontend/(auth)/sign-in/_components/sign-in-form'
import Link from 'next/link'

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
