import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import type { ComponentProps, ElementType } from 'react'

import { cn } from '@/app/_lib/utils'

const typographyVariants = cva('text-foreground', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl',
      h2: 'scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0',
      h3: 'scroll-m-20 text-xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-lg font-semibold tracking-tight',
      h5: 'scroll-m-20 text-md font-semibold tracking-tight',
      h6: 'scroll-m-20 text-base font-semibold tracking-tight',
      p: 'leading-7 [&:not(:first-child)]:mt-6',
      div: 'text-sm font-medium leading-none',
      span: 'text-sm text-muted-foreground',
    },
  },
})

type Props<E extends ElementType = 'span'> = {
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  asChild?: boolean
} & Omit<ComponentProps<E>, 'ref'> &
  VariantProps<typeof typographyVariants>

function Typography({
  as = 'p',
  asChild,
  variant = as,
  className,
  ...rest
}: Props) {
  const Comp = asChild ? Slot.Root : (as as ElementType)

  return (
    <Comp
      {...rest}
      data-slot={as}
      data-variant={variant}
      className={cn(typographyVariants({ variant, className }))}
    />
  )
}

export { Typography, typographyVariants }
