import { cn } from '@frontend/_lib/utils'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  width?: 'default' | 'small'
  variant?: 'default' | 'centered'
  as?: 'div' | 'section' | 'main'
}

function Container({ children, width = 'default', variant, as }: Props) {
  const Comp = as || 'div'

  return (
    <Comp
      className={cn(
        'w-full mx-auto px-4',
        width === 'default' && 'max-w-7xl',
        width === 'small' && 'max-w-sm',
        variant === 'centered' && 'flex-center min-h-screen',
      )}
    >
      {children}
    </Comp>
  )
}

export default Container
