import { site } from './site'

export type PageMeta = {
  title: string
  description: string
}

export const defaultMeta: PageMeta = {
  title: `${site.name} — Software, data, and teaching`,
  description:
    'I design and build practical software, data systems, and learning tools. Clear work for websites, internal systems, and teaching — not spectacle.',
}

export const pageMeta: Record<string, PageMeta> = {
  '/': defaultMeta,
  '/services': {
    title: `Services — ${site.name}`,
    description:
      'Software and systems, data and automation, applied AI, research support, and tutoring. I take on work that should be straightforward to use and explain.',
  },
  '/projects': {
    title: `Projects — ${site.name}`,
    description:
      'Case studies of software and education projects, shown at the stage they are in — including work still being built.',
  },
  '/digital-products': {
    title: `Digital products — ${site.name}`,
    description:
      'Small tools and learning resources. Items appear here when they are ready to share.',
  },
  '/about': {
    title: `About — ${site.name}`,
    description:
      'BSc (Hons) in Artificial Intelligence and Data Science. I build software and data systems, and I care about making technical work understandable.',
  },
  '/contact': {
    title: `Contact — ${site.name}`,
    description: `Write to ${site.name} about software, data, or teaching work. A short note is enough to start.`,
  },
}

export function canonicalUrl(pathname: string) {
  const origin = site.url.replace(/\/$/, '')
  if (pathname === '/') return `${origin}/`
  return `${origin}${pathname}`
}

export function absoluteUrl(path: string) {
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  const origin = site.url.replace(/\/$/, '')
  return `${origin}${path.startsWith('/') ? path : `/${path}`}`
}
