import { Button } from '../components/Button'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { Text } from '../components/ui/Typography'
import { site } from '../data/site'
import { PageHero } from '../sections/PageHero'

export function Contact() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Start a conversation."
        description="This page is ready for a real contact flow later. For now it simply points to email — no backend is attached."
      />
      <Section className="pt-0" aria-label="Email">
        <Container className="max-w-xl space-y-6">
          <Text>
            The cleanest way to reach me right now is email. Replace this
            address in the site data when you are ready.
          </Text>
          <Button
            href={`mailto:${site.email}`}
            className="w-full max-w-full break-all sm:w-auto sm:break-normal"
          >
            {site.email}
          </Button>
        </Container>
      </Section>
    </>
  )
}
