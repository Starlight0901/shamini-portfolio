import { useEffect, useId, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { site, visibleNavLinks } from '../data/site'
import { cn } from '../lib/cn'
import { prefetchPage } from '../routes'
import { Container } from './ui/Container'

export type NavbarLink = {
  label: string
  to: string
}

export type NavbarProps = {
  brand?: string
  links?: readonly NavbarLink[]
}

export function Navbar({ brand = site.name, links = visibleNavLinks }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [compact, setCompact] = useState(false)
  const location = useLocation()
  const menuId = useId()
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Escape') return
      setOpen(false)
      toggleRef.current?.focus()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    let frame = 0

    function onScroll() {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        setCompact((current) => {
          const next = window.scrollY > 12
          return current === next ? current : next
        })
        frame = 0
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-200',
        compact
          ? 'border-border bg-background/95 shadow-[0_1px_0_0_rgb(167_139_250_/_0.14)] sm:bg-background/92 sm:backdrop-blur-[6px] sm:supports-[backdrop-filter]:bg-background/72'
          : 'border-border bg-background/95 sm:bg-background/85 sm:backdrop-blur-[6px] sm:supports-[backdrop-filter]:bg-background/55',
      )}
    >
      <Container className="flex h-14 min-w-0 items-center justify-between gap-3 sm:h-[4.25rem] sm:gap-6">
        <NavLink
          to="/"
          end
          onClick={() => setOpen(false)}
          aria-label={`${site.name}, home`}
          className="group flex min-h-11 min-w-0 items-center gap-2.5 text-foreground no-underline"
        >
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent transition-colors duration-200 group-hover:bg-accent-hover"
          />
          <span className="font-display truncate text-[0.95rem] font-semibold tracking-tight">
            {brand}
          </span>
        </NavLink>

        <nav className="hidden min-w-0 items-center lg:flex" aria-label="Primary">
          {links.map((link) => (
            <NavItem key={link.to} to={link.to} label={link.label} />
          ))}
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-muted transition-colors duration-200 hover:bg-surface hover:text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X size={18} strokeWidth={1.75} aria-hidden="true" />
          ) : (
            <Menu size={18} strokeWidth={1.75} aria-hidden="true" />
          )}
        </button>
      </Container>

      <div
        id={menuId}
        className={cn(
          'grid overflow-hidden bg-background/90 transition-[grid-template-rows] duration-200 ease-out lg:hidden',
          open ? 'grid-rows-[1fr] border-t border-border' : 'grid-rows-[0fr]',
        )}
        aria-hidden={!open}
        inert={!open || undefined}
      >
        <div className="min-h-0 overflow-hidden">
          <Container className="py-3">
            <nav aria-label="Primary" className="flex flex-col gap-1">
              {links.map((link) => (
                <NavItem
                  key={link.to}
                  to={link.to}
                  label={link.label}
                  variant="mobile"
                  onNavigate={() => setOpen(false)}
                />
              ))}
            </nav>
          </Container>
        </div>
      </div>
    </header>
  )
}

type NavItemProps = {
  to: string
  label: string
  variant?: 'desktop' | 'mobile'
  onNavigate?: () => void
}

function NavItem({ to, label, variant = 'desktop', onNavigate }: NavItemProps) {
  const isHome = to === '/'

  if (variant === 'mobile') {
    return (
      <NavLink
        to={to}
        end={isHome}
        onClick={onNavigate}
        className={({ isActive }) =>
          cn(
            'flex min-h-11 items-center rounded-md px-3 text-sm no-underline transition-colors duration-200',
            isActive
              ? 'bg-accent-soft text-foreground shadow-[inset_2px_0_0_0_var(--accent)]'
              : 'text-muted hover:bg-surface hover:text-foreground',
          )
        }
        onMouseEnter={() => prefetchPage(to)}
        onFocus={() => prefetchPage(to)}
      >
        {label}
      </NavLink>
    )
  }

  return (
    <NavLink
      to={to}
      end={isHome}
      className={({ isActive }) =>
        cn(
          'group relative flex h-14 shrink-0 items-center whitespace-nowrap px-2.5 text-[0.8125rem] no-underline transition-colors duration-200 xl:h-[4.25rem] xl:px-3 xl:text-sm',
          isActive ? 'text-foreground' : 'text-muted hover:text-foreground',
        )
      }
      onMouseEnter={() => prefetchPage(to)}
      onFocus={() => prefetchPage(to)}
    >
      {({ isActive }) => (
        <>
          {label}
          <span
            aria-hidden="true"
            className={cn(
              'absolute inset-x-3 bottom-0 h-px origin-center bg-accent transition-transform duration-200 ease-out',
              isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 group-hover:opacity-40',
            )}
          />
        </>
      )}
    </NavLink>
  )
}
