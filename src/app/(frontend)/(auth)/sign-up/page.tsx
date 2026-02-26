import { Button } from '@frontend/_components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle, } from '@frontend/_components/ui/card'
import Container from '@frontend/_components/ui/container'
import SignUpForm from '@frontend/(auth)/sign-up/_components/sign-up-form'
import Link from 'next/link'

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
