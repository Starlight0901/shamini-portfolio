import { memo } from 'react'
import { Briefcase, FolderGit2, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { navLinks, site, socialLinks } from '../data/site'
import { prefetchPage } from '../routes'
import { Container } from './ui/Container'

const socialIcons = {
  Email: Mail,
  GitHub: FolderGit2,
  LinkedIn: Briefcase,
} as const

export const Footer = memo(function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-background/80">
      <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-tech/20" />

      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.2fr)_repeat(2,minmax(0,0.7fr))] lg:gap-16">
        <div className="space-y-3 sm:col-span-2 lg:col-span-1">
          <Link
            to="/"
            aria-label={`${site.name}, home`}
            className="inline-flex min-h-11 items-center gap-2.5 text-foreground no-underline"
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-accent"
            />
            <span className="font-display text-[0.95rem] font-semibold tracking-tight">
              {site.shortName}
            </span>
          </Link>
          <p className="max-w-xs text-sm text-muted">{site.tagline}</p>
        </div>

        <nav aria-label="Footer" className="space-y-4">
          <p className="kicker">Navigate</p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="flex min-h-11 items-center text-sm text-muted no-underline transition-colors duration-200 hover:text-foreground"
                  onMouseEnter={() => prefetchPage(link.to)}
                  onFocus={() => prefetchPage(link.to)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Connect" className="space-y-4">
          <p className="kicker-tech">Connect</p>
          <ul className="space-y-2">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.label]
              const external = link.href.startsWith('http')
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center gap-2 text-sm text-muted no-underline transition-colors duration-200 hover:text-foreground"
                    {...(external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {Icon ? (
                      <Icon
                        size={14}
                        strokeWidth={1.75}
                        className={
                          link.label === 'GitHub' ? 'text-tech' : 'text-accent'
                        }
                        aria-hidden="true"
                      />
                    ) : null}
                    {link.label}
                    {external ? (
                      <span className="sr-only"> (opens in a new tab)</span>
                    ) : null}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </Container>

      <Container className="flex flex-col gap-1 border-t border-border py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <a
          href={`mailto:${site.email}`}
          className="inline-flex min-h-11 max-w-full items-center break-all text-muted no-underline transition-colors duration-200 hover:text-foreground"
        >
          {site.email}
        </a>
      </Container>
    </footer>
  )
})
