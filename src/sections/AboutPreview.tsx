import { GraduationCap } from 'lucide-react'
import { Button } from '../components/Button'
import { SectionHeading } from '../components/SectionHeading'
import { TechBadge } from '../components/TechBadge'
import { Card } from '../components/ui/Card'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { Heading, Label, Text } from '../components/ui/Typography'
import { aboutPreview } from '../data/about'

export function AboutPreview() {
  return (
    <Section aria-labelledby="about-preview-heading">
      <Container className="grid min-w-0 items-start gap-8 md:gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
        <div className="space-y-8">
          <SectionHeading
            id="about-preview-heading"
            kicker={aboutPreview.kicker}
            kickerTone="personal"
            title={aboutPreview.title}
            description={aboutPreview.introduction}
          />

          <div className="space-y-3">
            <Label tone="tech">{aboutPreview.interests.label}</Label>
            <ul className="flex flex-wrap gap-2">
              {aboutPreview.interests.items.map((item) => (
                <li key={item}>
                  <TechBadge>{item}</TechBadge>
                </li>
              ))}
            </ul>
          </div>

          <Button to={aboutPreview.cta.to} variant="secondary" className="w-full sm:w-auto">
            {aboutPreview.cta.label}
          </Button>
        </div>

        <aside className="space-y-6" aria-label="Education and teaching">
          <Card className="space-y-4 border-t-personal-border">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-personal-soft text-personal">
                <GraduationCap size={16} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <Label as="span" tone="personal">
                {aboutPreview.education.label}
              </Label>
            </div>
            <Heading as="h3" size="heading">
              {aboutPreview.education.title}
            </Heading>
            <Text className="text-[0.95rem]">{aboutPreview.education.detail}</Text>
          </Card>

          <Text className="max-w-md text-[0.95rem]">
            <span className="font-medium text-personal">Teaching. </span>
            {aboutPreview.teaching}
          </Text>
        </aside>
      </Container>
    </Section>
  )
}
