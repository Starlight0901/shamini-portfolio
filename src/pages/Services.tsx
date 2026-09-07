import { ServiceCategoryBlock } from '../components/ServiceCategoryBlock'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { serviceCategories, servicesPage } from '../data/services'
import { PageHero } from '../sections/PageHero'
import { HomeCta } from '../sections/HomeCta'

export function Services() {
  return (
    <>
      <PageHero
        kicker={servicesPage.kicker}
        title={servicesPage.title}
        description={servicesPage.description}
      />

      <Section className="pt-0" aria-label="Service categories">
        <Container className="space-y-20 md:space-y-24">
          {serviceCategories.map((category) => (
            <ServiceCategoryBlock key={category.id} category={category} />
          ))}
        </Container>
      </Section>

      <HomeCta />
    </>
  )
}
