import { ServiceCard } from '../components/ServiceCard'
import { SectionHeading } from '../components/SectionHeading'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { services, servicesIntro } from '../data/services'

export function WhatIDo() {
  return (
    <Section aria-labelledby="what-i-do-heading">
      <Container className="space-y-12 md:space-y-14">
        <SectionHeading
          id="what-i-do-heading"
          kicker={servicesIntro.kicker}
          title={servicesIntro.title}
          description={servicesIntro.description}
        />

        <div className="grid min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
