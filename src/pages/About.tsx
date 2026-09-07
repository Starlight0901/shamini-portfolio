import { ArrowUpRight, Briefcase, GraduationCap, Newspaper } from 'lucide-react'
import { Button } from '../components/Button'
import { Portrait } from '../components/Portrait'
import { SectionHeading } from '../components/SectionHeading'
import { TechBadge } from '../components/TechBadge'
import { Card } from '../components/ui/Card'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { Heading, Label, Text } from '../components/ui/Typography'
import { aboutPage } from '../data/about'
import { visibleSkillGroups } from '../data/skills'
import { cn } from '../lib/cn'

export function About() {
  return (
    <>
      <Section className="pb-10 md:pb-12" aria-labelledby="page-heading">
        <Container className="grid min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(14rem,0.7fr)] lg:gap-16">
          <div className="min-w-0 space-y-6">
            <SectionHeading
              as="h1"
              id="page-heading"
              size="display"
              kicker={aboutPage.kicker}
              kickerTone={aboutPage.kickerTone}
              title={aboutPage.title}
            />
            <div className="max-w-2xl space-y-4">
              {aboutPage.paragraphs.map((paragraph) => (
                <Text key={paragraph}>{paragraph}</Text>
              ))}
            </div>
          </div>

          <Portrait className="mx-auto w-full max-w-[15.5rem] sm:max-w-[16.5rem] lg:ml-auto lg:mr-0 lg:max-w-[17.5rem]" />
        </Container>
      </Section>

      <ExperienceSection />
      <EducationSection />
      <PublicationSection />
      <SkillsSection />
    </>
  )
}

function ExperienceSection() {
  const { experience } = aboutPage

  return (
    <Section className="pt-0" aria-labelledby="experience-heading">
      <Container className="space-y-8 md:space-y-10">
        <SectionHeading
          id="experience-heading"
          kicker={experience.kicker}
          kickerTone="tech"
          title={experience.title}
          description={experience.description}
        />

        <ol className="relative space-y-4">
          {experience.items.map((item, index) => (
            <li key={item.id} className="relative pl-8 sm:pl-10">
              {index < experience.items.length - 1 ? (
                <span
                  className="absolute top-7 left-[0.4375rem] h-[calc(100%+1rem)] w-px bg-border sm:left-[0.5625rem]"
                  aria-hidden="true"
                />
              ) : null}
              <span
                className="absolute top-6 left-0 flex h-4 w-4 items-center justify-center rounded-full border border-accent-border bg-accent-soft sm:h-[1.125rem] sm:w-[1.125rem]"
                aria-hidden="true"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>

              <Card className="space-y-3 border-t-accent-border">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent-soft text-accent">
                    <Briefcase size={16} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  {item.period ? (
                    <Label as="span" tone="tech">
                      {item.period}
                    </Label>
                  ) : null}
                </div>
                <Heading as="h3" size="heading">
                  {item.role}
                </Heading>
                <Text className="text-[0.95rem]">{item.organisation}</Text>
              </Card>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}

function EducationSection() {
  const { education } = aboutPage

  return (
    <Section aria-labelledby="education-heading">
      <Container className="space-y-8 md:space-y-10">
        <SectionHeading
          id="education-heading"
          kicker={education.kicker}
          kickerTone="personal"
          title={education.title}
        />

        <Card className="max-w-2xl space-y-4 border-t-personal-border">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-personal-soft text-personal">
              <GraduationCap size={16} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <Label as="span" tone="personal">
              Degree
            </Label>
          </div>
          <Heading as="h3" size="heading">
            {education.award}
          </Heading>
          <Text className="text-[0.95rem]">{education.institution}</Text>
          <p className="text-sm font-medium text-personal">{education.detail}</p>
        </Card>
      </Container>
    </Section>
  )
}

function PublicationSection() {
  const { publication } = aboutPage

  return (
    <Section aria-labelledby="publication-heading">
      <Container className="space-y-8 md:space-y-10">
        <SectionHeading
          id="publication-heading"
          kicker={publication.kicker}
          kickerTone="tech"
          title={publication.title}
        />

        <Card className="flex max-w-2xl min-w-0 flex-col gap-5 border-t-tech-border sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0 space-y-3">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-tech-soft text-tech">
                <Newspaper size={16} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <Label as="span" tone="tech">
                {publication.venue}
              </Label>
            </div>
            <Heading as="h3" size="heading">
              {publication.name}
            </Heading>
          </div>

          <Button
            href={publication.href}
            variant="secondary"
            className="w-full shrink-0 sm:w-auto"
          >
            {publication.cta}
            <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </Button>
        </Card>
      </Container>
    </Section>
  )
}

function SkillsSection() {
  const { skills } = aboutPage

  return (
    <Section aria-labelledby="skills-heading">
      <Container className="space-y-8 md:space-y-10">
        <SectionHeading
          id="skills-heading"
          kicker={skills.kicker}
          title={skills.title}
          description={skills.description}
        />

        <div className="grid min-w-0 gap-5 sm:grid-cols-2">
          {visibleSkillGroups.map((group) => (
            <Card
              key={group.id}
              className={cn(
                'min-w-0 space-y-4',
                group.tone === 'personal'
                  ? 'border-t-personal-border'
                  : group.tone === 'accent'
                    ? 'border-t-accent-border'
                    : group.tone === 'muted'
                      ? 'border-t-border'
                      : 'border-t-tech-border',
              )}
            >
              <Heading as="h3" size="heading">
                {group.title}
              </Heading>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <TechBadge tone={group.tone}>{item}</TechBadge>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
