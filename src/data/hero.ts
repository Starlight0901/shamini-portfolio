import { site } from './site'

export const hero = {
  identity: site.name,
  heading: 'I build software that solves real problems.',
  summary:
    'From websites and business systems to automation, data, and AI — I focus on building practical solutions that people can actually use.',
  primaryCta: {
    label: 'View My Work',
    to: '/projects',
  },
  secondaryCta: {
    label: "Let's Work Together",
    to: '/contact',
  },
  tertiaryCta: {
    label: 'More about me',
    to: '/about',
  },
  indicators: [
    { label: 'Web applications', tone: 'tech' },
    { label: 'Technical systems', tone: 'tech' },
    { label: 'Teaching', tone: 'personal', educationContent: true },
    { label: 'Digital products', tone: 'accent' },
  ],
} as const
