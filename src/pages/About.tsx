import { TechBadge } from '../components/TechBadge'
import { Card } from '../components/ui/Card'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { Heading, Text } from '../components/ui/Typography'
import { skillGroups } from '../data/skills'
import { PageHero } from '../sections/PageHero'

export function About() {
  return (
    <>
      <PageHero
        kicker="About"
        kickerTone="personal"
        title="Technology with a teaching heart."
        description="A short placeholder for your story — professional, approachable, and oriented toward helping people learn as well as build."
      />
      <Section className="pt-0" aria-label="Skills">
        <Container className="grid min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <Card key={group.id} className="space-y-4">
              <div className="space-y-2">
                <Heading as="h2" size="heading">
                  {group.title}
                </Heading>
                <Text className="text-sm">
                  Replace these with your own strengths.
                </Text>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <TechBadge key={item} tone={group.tone}>
                    {item}
                  </TechBadge>
                ))}
              </div>
            </Card>
          ))}
        </Container>
      </Section>
    </>
  )
}
