import type { ReactNode } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'

export type PageHeroProps = {
  kicker?: string
  kickerTone?: 'default' | 'accent' | 'tech' | 'personal'
  title: string
  description?: ReactNode
}

export function PageHero({
  kicker,
  kickerTone,
  title,
  description,
}: PageHeroProps) {
  return (
    <Section className="pb-10 md:pb-12" aria-labelledby="page-heading">
      <Container>
        <SectionHeading
          as="h1"
          id="page-heading"
          size="display"
          kicker={kicker}
          kickerTone={kickerTone}
          title={title}
          description={description}
        />
      </Container>
    </Section>
  )
}
