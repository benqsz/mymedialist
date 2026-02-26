'use client'

import { MoonIcon, SunIcon } from '@phosphor-icons/react/ssr'
import { useTheme } from 'next-themes'

import { Button } from '@/app/_components/ui/button'

export default function ThemeToggle() {
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
