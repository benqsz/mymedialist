import { ThemeToggle } from '@frontend/_components/ui/theme-toggle'

import { sessionCheck } from '@/auth/utils'

export default async function HomePage() {
  await sessionCheck()
  return (
    <main>
      home page
      <ThemeToggle />
    </main>
  )
}
