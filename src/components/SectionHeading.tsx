import type { ReactNode } from 'react'
import { cn } from '../lib/cn'
import { Heading, Label, Text } from './ui/Typography'

type KickerTone = 'default' | 'accent' | 'tech' | 'personal'

export type SectionHeadingProps = {
  kicker?: string
  kickerTone?: KickerTone
  title: string
  description?: ReactNode
  as?: 'h1' | 'h2'
  size?: 'display' | 'title' | 'heading'
  className?: string
  id?: string
}

export function SectionHeading({
  kicker,
  kickerTone = 'accent',
  title,
  description,
  as = 'h2',
  size = 'title',
  className,
  id,
}: SectionHeadingProps) {
  return (
    <header className={cn('max-w-2xl space-y-4', className)}>
      {kicker ? <Label tone={kickerTone}>{kicker}</Label> : null}
      <Heading as={as} size={size} id={id}>
        {title}
      </Heading>
      {description ? <Text>{description}</Text> : null}
    </header>
  )
}
