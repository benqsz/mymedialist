import { SpinnerIcon } from '@phosphor-icons/react/ssr'
import type { ComponentProps } from 'react'

import { cn } from '@/app/_lib/utils'

function Spinner({ className, ...props }: ComponentProps<'svg'>) {
  return (
    <SpinnerIcon
      role="status"
      aria-label="Loading"
      className={cn('size-4 animate-spin', className)}
      {...props}
    />
  )
}

export { Spinner }
