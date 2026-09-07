import { Button } from '../components/Button'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { projects, projectsIntro } from '../data/projects'

export function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured)

  return (
    <Section aria-labelledby="featured-projects-heading">
      <Container className="space-y-12 md:space-y-14">
        <SectionHeading
          id="featured-projects-heading"
          kicker={projectsIntro.kicker}
          kickerTone="tech"
          title={projectsIntro.title}
          description={projectsIntro.description}
        />

        <div className="grid min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <Button to="/projects" variant="secondary" className="w-full sm:w-auto">
          All projects
        </Button>
      </Container>
    </Section>
  )
}
