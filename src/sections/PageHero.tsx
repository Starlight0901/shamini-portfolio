import type { ReactNode } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'

export type PageHeroProps = {
  kicker?: string
  kickerTone?: 'default' | 'accent' | 'tech' | 'personal'
  title: string
  description?: ReactNode
  media?: ReactNode
}

export function PageHero({
  kicker,
  kickerTone,
  title,
  description,
  media,
}: PageHeroProps) {
  return (
    <Section className="pb-10 md:pb-12" aria-labelledby="page-heading">
      <Container
        className={
          media
            ? 'grid min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(14rem,0.7fr)] lg:gap-16'
            : undefined
        }
      >
        <SectionHeading
          as="h1"
          id="page-heading"
          size="display"
          kicker={kicker}
          kickerTone={kickerTone}
          title={title}
          description={description}
        />
        {media}
      </Container>
    </Section>
  )
}
