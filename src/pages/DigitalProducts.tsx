import { ProjectCard } from '../components/ProjectCard'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { Text } from '../components/ui/Typography'
import { digitalProductsPage, visibleProjects } from '../data/projects'
import { PageHero } from '../sections/PageHero'

export function DigitalProducts() {
  const products = visibleProjects.filter((project) => project.kind === 'product')

  return (
    <>
      <PageHero
        kicker="Digital products"
        title={digitalProductsPage.title}
        description={digitalProductsPage.description}
      />
      <Section className="pt-0" aria-label="Digital products">
        <Container>
          {products.length === 0 ? (
            <Text>
              No digital products are listed yet. They will appear here when
              they are ready to share.
            </Text>
          ) : (
            <div className="grid min-w-0 gap-5 sm:grid-cols-2">
              {products.map((project) => (
                <ProjectCard key={project.id} project={project} headingAs="h2" />
              ))}
            </div>
          )}
        </Container>
      </Section>
    </>
  )
}
