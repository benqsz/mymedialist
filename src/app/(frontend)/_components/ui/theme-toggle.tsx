'use client'

import { Button } from '@frontend/_components/ui/button'
import { MoonIcon, SunIcon } from '@phosphor-icons/react/ssr'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const otherTheme = theme === 'light' ? 'dark' : 'light'

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(otherTheme)}
      aria-label={`Toggle theme to ${otherTheme}`}
    >
      <SunIcon className="hidden dark:block" />
      <MoonIcon className="dark:hidden block" />
    </Button>
  )
}
