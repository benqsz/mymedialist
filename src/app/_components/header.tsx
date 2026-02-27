import { UserIcon } from '@phosphor-icons/react/ssr'
import Link from 'next/link'

import { Button } from '@/app/_components/ui/button'
import Container from '@/app/_components/ui/container'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/app/_components/ui/dropdown-menu'

export default async function Header() {
  return (
    <header className="sticky top-0 w-full h-16">
      <Container className="flex items-center h-full justify-between">
        <Link href="/">mymedialist</Link>
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
              <DropdownMenuItem>
                <Link href="/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </Container>
    </header>
  )
}
