import { withoutEducationContent } from '../config/features'

export const site = {
  name: 'Shamini Fernando',
  shortName: 'Shamini Fernando',
  tagline: 'Practical software, data, and careful craft.',
  email: 'hello@example.com',
  /** Replace with the live site origin, with no trailing slash. */
  url: 'https://www.your-domain.com',
  /** Optional 1200×630 image in /public. Leave as-is until you add the file. */
  ogImage: '/og-image.png',
}

export type NavLink = {
  label: string
  to: string
  educationContent?: boolean
}

export const navLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Digital Products', to: '/digital-products' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const visibleNavLinks = withoutEducationContent(navLinks)

export const socialLinks = [
  { label: 'Email', href: 'mailto:shamifdo2003@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/Starlight0901' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/w-shamini-tharaka-fernando-2103a8242' },
] as const
