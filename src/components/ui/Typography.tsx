import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4'

const headingSizes = {
  display: 'type-display',
  title: 'type-title',
  heading: 'type-heading',
} as const

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: HeadingLevel
  size?: keyof typeof headingSizes
}

export function Heading({
  as: Component = 'h2',
  size = 'title',
  className,
  ...props
}: HeadingProps) {
  return <Component className={cn(headingSizes[size], className)} {...props} />
}

const textTones = {
  default: 'text-foreground',
  muted: 'text-muted',
  subtle: 'text-subtle',
  accent: 'text-accent',
  tech: 'text-tech',
  personal: 'text-personal',
} as const

export type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  as?: 'p' | 'span' | 'div'
  tone?: keyof typeof textTones
}

export function Text({
  as: Component = 'p',
  tone = 'muted',
  className,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn('type-body', textTones[tone], className)}
      {...props}
    />
  )
}

const labelTones = {
  default: 'type-label',
  accent: 'kicker',
  tech: 'kicker-tech',
  personal: 'kicker-personal',
} as const

export type LabelProps = HTMLAttributes<HTMLParagraphElement> & {
  as?: 'p' | 'span'
  tone?: keyof typeof labelTones
}

export function Label({
  as: Component = 'p',
  tone = 'default',
  className,
  ...props
}: LabelProps) {
  return <Component className={cn(labelTones[tone], className)} {...props} />
}
