import { Button } from '../components/Button'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { Heading, Label, Text } from '../components/ui/Typography'
import { homeCta } from '../data/cta'

export function HomeCta() {
  return (
    <Section
      className="relative overflow-hidden border-t border-border bg-background"
      aria-labelledby="home-cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute top-[-20%] left-1/2 h-[min(28rem,70vw)] w-[min(40rem,90vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgb(167_139_250_/_0.12),transparent_70%)]" />
        <CtaConstellation />
      </div>

      <Container className="relative">
        <div className="max-w-2xl space-y-8">
          <Label tone="accent">{homeCta.kicker}</Label>
          <Heading as="h2" size="title" id="home-cta-heading">
            {homeCta.heading}
          </Heading>
          <Text className="max-w-xl">{homeCta.summary}</Text>
          <div className="flex w-full max-w-xl flex-col gap-3 pt-2 sm:flex-row sm:items-center">
            <Button to={homeCta.primary.to} size="lg" className="w-full sm:w-auto">
              {homeCta.primary.label}
            </Button>
            <Button
              to={homeCta.secondary.to}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              {homeCta.secondary.label}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}

function CtaConstellation() {
  return (
    <svg
      className="absolute top-10 right-[8%] hidden h-24 w-32 opacity-80 md:block"
      viewBox="0 0 128 96"
      fill="none"
      focusable="false"
      aria-hidden="true"
    >
      <path
        d="M16 70 L48 22 L92 40 L112 18"
        stroke="var(--accent)"
        strokeOpacity="0.16"
        strokeWidth="1"
      />
      <circle cx="16" cy="70" r="1.4" fill="var(--foreground)" opacity="0.22" />
      <circle cx="48" cy="22" r="1.8" fill="var(--accent)" opacity="0.4" />
      <circle cx="92" cy="40" r="1.3" fill="var(--foreground)" opacity="0.2" />
      <circle cx="112" cy="18" r="1.2" fill="var(--tech)" opacity="0.28" />
    </svg>
  )
}
