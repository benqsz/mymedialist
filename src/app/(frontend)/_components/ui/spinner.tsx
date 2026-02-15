import { cn } from '@frontend/_lib/utils'
import { SpinnerIcon } from '@phosphor-icons/react'
import type { ComponentProps } from 'react'

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
