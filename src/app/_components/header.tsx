import { UserIcon } from '@phosphor-icons/react/ssr'
import Link from 'next/link'

import { zIndexes } from '@/app/_lib/constants'
import { Button } from '@/app/_components/ui/button'
import Container from '@/app/_components/ui/container'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/app/_components/ui/dropdown-menu'
import { getSession } from '@/auth/utils'

export default async function Header() {
  const session = await getSession()

  return (
    <header
      className="sticky top-0 w-full h-16 bg-background/30 backdrop-blur-2xl"
      style={{
        zIndex: zIndexes.header,
      }}
    >
      <Container className="flex items-center h-full justify-between">
        <Link href="/">mymedialist</Link>
        {session ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                asChild
                aria-label="User menu"
                className="rounded-full p-1"
              >
                <UserIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuLabel>{session.user.name}</DropdownMenuLabel>
                <DropdownMenuItem asChild>
                  <Link href="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/sign-out">Logout</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div />
        )}
      </Container>
    </header>
  )
}
