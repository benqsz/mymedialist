import type { ReactNode } from 'react'

import { cn } from '@/app/_lib/utils'

type Props = {
  children: ReactNode
  width?: 'default' | 'small'
  variant?: 'default' | 'centered'
  as?: 'div' | 'section' | 'main'
  className?: string
}

function Container(props: Props) {
  const { children, width = 'default', variant, as, className } = props
  const Comp = as || 'div'

  return (
    <Comp
      className={cn(
        'w-full mx-auto px-4',
        width === 'default' && 'max-w-7xl',
        width === 'small' && 'max-w-sm',
        variant === 'centered' && 'flex-center min-h-screen',
        className,
      )}
    >
      {children}
    </Comp>
  )
}

export default Container
