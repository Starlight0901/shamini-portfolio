import { Badge } from './ui/Badge'
import { cn } from '../lib/cn'

const tones = {
  tech: 'tech',
  accent: 'accent',
  personal: 'personal',
  muted: 'muted',
} as const

export type TechBadgeProps = {
  children: string
  tone?: keyof typeof tones
  className?: string
}

export function TechBadge({
  children,
  tone = 'tech',
  className,
}: TechBadgeProps) {
  return (
    <Badge variant={tones[tone]} className={cn('normal-case tracking-[0.04em]', className)}>
      {children}
    </Badge>
  )
}
