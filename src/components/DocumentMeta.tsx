import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { site, socialLinks } from '../data/site'
import {
  absoluteUrl,
  canonicalUrl,
  defaultMeta,
  pageMeta,
} from '../data/seo'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector(`link[rel="${rel}"]`)

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

function upsertJsonLd(id: string, data: Record<string, unknown>) {
  let element = document.getElementById(id) as HTMLScriptElement | null

  if (!element) {
    element = document.createElement('script')
    element.id = id
    element.type = 'application/ld+json'
    document.head.appendChild(element)
  }

  element.textContent = JSON.stringify(data)
}

export function DocumentMeta() {
  const { pathname } = useLocation()
  const meta = pageMeta[pathname] ?? defaultMeta
  const canonical = canonicalUrl(pathname)
  const image = absoluteUrl(site.ogImage)

  useEffect(() => {
    document.title = meta.title

    upsertMeta('name', 'description', meta.description)
    upsertMeta('name', 'author', site.name)
    upsertMeta('name', 'robots', 'index, follow')
    upsertLink('canonical', canonical)

    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:locale', 'en_GB')
    upsertMeta('property', 'og:site_name', site.name)
    upsertMeta('property', 'og:title', meta.title)
    upsertMeta('property', 'og:description', meta.description)
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'og:image', image)
    upsertMeta('property', 'og:image:alt', site.name)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', meta.title)
    upsertMeta('name', 'twitter:description', meta.description)
    upsertMeta('name', 'twitter:image', image)

    const email = socialLinks.find((link) => link.href.startsWith('mailto:'))
    const profiles = socialLinks
      .map((link) => link.href)
      .filter((href) => href.startsWith('http'))

    upsertJsonLd('seo-person', {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: site.name,
      url: site.url,
      description: site.tagline,
      ...(email ? { email: email.href.replace('mailto:', '') } : {}),
      sameAs: profiles,
    })
  }, [canonical, image, meta.description, meta.title])

  return (
    <div className="sr-only" aria-live="polite" aria-atomic="true">
      {meta.title}
    </div>
  )
}
