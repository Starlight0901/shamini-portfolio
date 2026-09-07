import { useEffect, useRef, useState } from 'react'
import { Button } from '../components/Button'
import { Portrait } from '../components/Portrait'
import { Container } from '../components/ui/Container'
import { Heading, Text } from '../components/ui/Typography'
import { hero } from '../data/hero'
import { cn } from '../lib/cn'
import './Hero.css'

const nodes = [
  { x: 118, y: 86, r: 1.1, fill: 'var(--foreground)', opacity: 0.16 },
  { x: 168, y: 54, r: 1.2, fill: 'var(--accent)', opacity: 0.22 },
  { x: 72, y: 640, r: 1.1, fill: 'var(--foreground)', opacity: 0.14 },
  { x: 708, y: 92, r: 1.35, fill: 'var(--accent)', opacity: 0.28, pulse: true },
  { x: 766, y: 138, r: 1.15, fill: 'var(--foreground)', opacity: 0.2 },
  { x: 694, y: 168, r: 1.2, fill: 'var(--accent)', opacity: 0.2 },
  { x: 828, y: 108, r: 1.05, fill: 'var(--foreground)', opacity: 0.16 },
  { x: 854, y: 286, r: 1.3, fill: 'var(--tech)', opacity: 0.32, pulse: true },
  { x: 908, y: 334, r: 1.1, fill: 'var(--foreground)', opacity: 0.18 },
  { x: 798, y: 348, r: 1.15, fill: 'var(--tech)', opacity: 0.22 },
  { x: 936, y: 248, r: 1, fill: 'var(--foreground)', opacity: 0.14 },
  { x: 742, y: 508, r: 1.2, fill: 'var(--personal)', opacity: 0.18 },
  { x: 802, y: 468, r: 1.1, fill: 'var(--foreground)', opacity: 0.16, pulse: true },
  { x: 688, y: 558, r: 1.05, fill: 'var(--foreground)', opacity: 0.14 },
  { x: 612, y: 96, r: 1, fill: 'var(--foreground)', opacity: 0.12 },
  { x: 960, y: 520, r: 1.1, fill: 'var(--tech)', opacity: 0.16 },
] as const

const lines = [
  { x1: 708, y1: 92, x2: 766, y2: 138, stroke: 'var(--accent)', opacity: 0.16 },
  { x1: 766, y1: 138, x2: 694, y2: 168, stroke: 'var(--accent)', opacity: 0.12 },
  { x1: 766, y1: 138, x2: 828, y2: 108, stroke: 'var(--accent)', opacity: 0.1 },
  { x1: 766, y1: 138, x2: 854, y2: 286, stroke: 'var(--accent)', opacity: 0.1 },
  { x1: 854, y1: 286, x2: 908, y2: 334, stroke: 'var(--tech)', opacity: 0.16 },
  { x1: 854, y1: 286, x2: 798, y2: 348, stroke: 'var(--tech)', opacity: 0.14 },
  { x1: 798, y1: 348, x2: 742, y2: 508, stroke: 'var(--foreground)', opacity: 0.08 },
  { x1: 742, y1: 508, x2: 802, y2: 468, stroke: 'var(--personal)', opacity: 0.12 },
  { x1: 742, y1: 508, x2: 688, y2: 558, stroke: 'var(--foreground)', opacity: 0.1 },
  { x1: 118, y1: 86, x2: 168, y2: 54, stroke: 'var(--accent)', opacity: 0.1 },
] as const

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-background"
      aria-labelledby="hero-heading"
    >
      <HeroAtmosphere />

      <Container className="relative z-10 flex min-h-0 flex-col justify-center py-16 sm:py-20 md:min-h-[calc(100svh-4.25rem)] md:py-24 lg:py-28">
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)] lg:gap-16 xl:gap-20">
          <div className="hero-copy min-w-0">
            <p className="font-display text-[1.05rem] font-semibold tracking-tight text-foreground">
              {hero.identity}
            </p>

            <Heading as="h1" size="title" id="hero-heading" className="mt-4 max-w-xl">
              {hero.heading}
            </Heading>

            <Text className="mt-5 max-w-lg">{hero.summary}</Text>

            <div className="mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center xl:flex-nowrap">
              <Button to={hero.primaryCta.to} size="lg" className="w-full sm:w-auto">
                {hero.primaryCta.label}
              </Button>
              <Button
                to={hero.secondaryCta.to}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                {hero.secondaryCta.label}
              </Button>
              <Button
                to={hero.tertiaryCta.to}
                variant="ghost"
                size="lg"
                className="w-full border border-border hover:border-accent-border sm:w-auto"
              >
                {hero.tertiaryCta.label}
              </Button>
            </div>
          </div>

          <Portrait
            priority
            className="hero-portrait mx-auto w-full max-w-[16.5rem] sm:max-w-[18rem] lg:ml-auto lg:mr-0 lg:max-w-[19.5rem]"
          />
        </div>
      </Container>
    </section>
  )
}

function HeroAtmosphere() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(true)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting)
      },
      { rootMargin: '20% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        'hero-atmosphere pointer-events-none absolute inset-0 z-0',
        !active && 'hero-atmosphere-paused',
      )}
      aria-hidden="true"
    >
      <div className="hero-glow hero-glow-violet" />
      <div className="hero-glow hero-glow-cyan" />

      <svg
        className="hero-constellation h-full w-full"
        viewBox="0 0 1000 700"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        focusable="false"
        aria-hidden="true"
      >
        {lines.map((line) => (
          <line
            key={`${line.x1}-${line.y1}-${line.x2}-${line.y2}`}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke={line.stroke}
            strokeOpacity={line.opacity}
            strokeWidth="1"
          />
        ))}
        {nodes.map((node, index) => (
          <circle
            key={`${node.x}-${node.y}`}
            className={
              'pulse' in node && node.pulse
                ? index % 2 === 0
                  ? 'hero-twinkle'
                  : 'hero-twinkle hero-twinkle-delay'
                : undefined
            }
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill={node.fill}
            opacity={node.opacity}
          />
        ))}
      </svg>
    </div>
  )
}
