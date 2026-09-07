import { ServiceCard } from '../components/ServiceCard'
import { SectionHeading } from '../components/SectionHeading'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { Text } from '../components/ui/Typography'
import { services, servicesIntro } from '../data/services'

export function WhatIDo() {
  return (
    <Section aria-labelledby="what-i-do-heading">
      <Container className="space-y-12 md:space-y-14">
        <SectionHeading
          id="what-i-do-heading"
          title={servicesIntro.title}
          description={
            <>
              <span className="block text-foreground">
                {servicesIntro.subtitle}
              </span>
              <Text as="span" className="mt-3 block">
                {servicesIntro.description}
              </Text>
            </>
          }
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
