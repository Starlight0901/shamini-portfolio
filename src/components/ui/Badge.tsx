import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

const variants = {
  accent: 'bg-accent-soft text-accent border-accent-border',
  tech: 'bg-tech-soft text-tech border-tech-border',
  personal: 'bg-personal-soft text-personal border-personal-border',
  muted: 'bg-surface text-muted border-border',
} as const

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: keyof typeof variants
}

export function Badge({
  className,
  variant = 'accent',
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex max-w-full items-center rounded-sm border px-2 py-0.5 font-mono text-[0.68rem] font-medium tracking-[0.08em] uppercase',
        variants[variant],
        className,
      )}
      {...props}
    />
  )
}
