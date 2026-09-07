import { lazy } from 'react'

export const ServicesPage = lazy(() =>
  import('./pages/Services').then((module) => ({ default: module.Services })),
)

export const ProjectsPage = lazy(() =>
  import('./pages/Projects').then((module) => ({ default: module.Projects })),
)

export const AboutPage = lazy(() =>
  import('./pages/About').then((module) => ({ default: module.About })),
)

export const DigitalProductsPage = lazy(() =>
  import('./pages/DigitalProducts').then((module) => ({
    default: module.DigitalProducts,
  })),
)

export const ContactPage = lazy(() =>
  import('./pages/Contact').then((module) => ({ default: module.Contact })),
)

const pageLoaders: Record<string, () => Promise<unknown>> = {
  '/services': () => import('./pages/Services'),
  '/projects': () => import('./pages/Projects'),
  '/about': () => import('./pages/About'),
  '/digital-products': () => import('./pages/DigitalProducts'),
  '/contact': () => import('./pages/Contact'),
}

export function prefetchPage(to: string) {
  const load = pageLoaders[to]
  if (load) void load()
}
