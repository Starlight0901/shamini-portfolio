import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'
import { StarField } from './StarField'

export type AmbientBackgroundProps = HTMLAttributes<HTMLDivElement> & {
  stars?: boolean
}

export function AmbientBackground({
  className,
  stars = true,
  children,
  ...props
}: AmbientBackgroundProps) {
  return (
    <div
      className={cn('relative min-h-svh', className)}
      {...props}
    >
      {stars ? <StarField /> : null}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
