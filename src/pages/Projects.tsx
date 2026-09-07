import { ProjectCaseStudy } from '../components/ProjectCaseStudy'
import { Container } from '../components/ui/Container'
import { Divider } from '../components/ui/Divider'
import { Section } from '../components/ui/Section'
import { Heading, Text } from '../components/ui/Typography'
import { Badge } from '../components/ui/Badge'
import {
  projectStatusGroups,
  projectStatusLabel,
  projectStatusTone,
  visibleProjects,
  projectsPage,
} from '../data/projects'
import { PageHero } from '../sections/PageHero'

export function Projects() {
  const items = visibleProjects.filter((project) => project.kind === 'project')

  return (
    <>
      <PageHero
        kicker={projectsPage.kicker}
        kickerTone="tech"
        title={projectsPage.title}
        description={projectsPage.description}
      />

      <Section className="pt-0" aria-label="Project case studies">
        <Container className="space-y-16 md:space-y-20">
          <ul className="flex flex-wrap gap-2" aria-label="Project status key">
            {(
              ['completed', 'in-development', 'planned', 'concept'] as const
            ).map((status) => (
              <li key={status}>
                <Badge variant={projectStatusTone[status]}>
                  {projectStatusLabel[status]}
                </Badge>
              </li>
            ))}
          </ul>

          {projectStatusGroups.map((group) => {
            const grouped = items.filter(
              (project) => project.status === group.status,
            )

            if (grouped.length === 0) return null

            return (
              <section
                key={group.status}
                className="space-y-10"
                aria-labelledby={`${group.status}-heading`}
              >
                <header className="max-w-2xl space-y-3">
                  <Heading as="h2" size="heading" id={`${group.status}-heading`}>
                    {group.title}
                  </Heading>
                  <Text className="text-[0.95rem]">{group.description}</Text>
                </header>

                <div className="space-y-16 md:space-y-20">
                  {grouped.map((project, index) => (
                    <div key={project.id} className="space-y-16 md:space-y-20">
                      <ProjectCaseStudy project={project} />
                      {index < grouped.length - 1 ? <Divider /> : null}
                    </div>
                  ))}
                </div>
              </section>
            )
          })}
        </Container>
      </Section>
    </>
  )
}
