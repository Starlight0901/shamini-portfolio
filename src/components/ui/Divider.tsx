import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

export type DividerProps = HTMLAttributes<HTMLDivElement> & {
  decorative?: boolean
}

export function Divider({
  className,
  decorative = true,
  ...props
}: DividerProps) {
  return (
    <div
      role={decorative ? 'none' : 'separator'}
      aria-hidden={decorative ? true : undefined}
      className={cn('hairline', className)}
      {...props}
    />
  )
}
