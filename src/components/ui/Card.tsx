import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

const tones = {
  default: 'surface-card',
  panel: 'surface-panel',
  glow: 'surface-card glow-accent',
} as const

export type CardProps = HTMLAttributes<HTMLElement> & {
  as?: 'article' | 'div' | 'section'
  tone?: keyof typeof tones
}

export function Card({
  as: Component = 'div',
  tone = 'default',
  className,
  ...props
}: CardProps) {
  return (
    <Component
      className={cn(tones[tone], 'p-5 sm:p-6 lg:p-8', className)}
      {...props}
    />
  )
}
