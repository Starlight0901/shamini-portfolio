import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../lib/cn'

const variants = {
  primary: 'bg-accent text-on-accent hover:bg-accent-hover',
  secondary:
    'bg-transparent text-foreground border border-border-strong hover:border-accent-border hover:bg-accent-soft',
  ghost: 'bg-transparent text-muted hover:text-foreground hover:bg-surface',
  tech: 'bg-tech-soft text-tech border border-tech-border hover:bg-tech hover:text-on-tech',
} as const

const sizes = {
  sm: 'h-11 px-4 text-sm',
  md: 'h-11 px-5 text-[0.9375rem]',
  lg: 'h-12 px-5 text-[0.95rem] sm:px-6 sm:text-base',
} as const

type ButtonBase = {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  children?: ReactNode
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonBase & {
    to?: string
    href?: string
  }

function isExternalHref(href: string) {
  return href.startsWith('http://') || href.startsWith('https://')
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  type = 'button',
  to,
  href,
  children,
  id,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-md text-center font-medium whitespace-normal no-underline transition-[color,background-color,border-color,transform] duration-200 ease-out hover:-translate-y-px active:translate-y-0 disabled:pointer-events-none disabled:opacity-40 disabled:hover:translate-y-0',
    variants[variant],
    sizes[size],
    className,
  )

  const accessible = {
    id,
    'aria-label': props['aria-label'],
    'aria-labelledby': props['aria-labelledby'],
    'aria-describedby': props['aria-describedby'],
  }

  if (to) {
    return (
      <Link to={to} className={classes} {...accessible}>
        {children}
      </Link>
    )
  }

  if (href) {
    const external = isExternalHref(href)
    return (
      <a
        href={href}
        className={classes}
        {...accessible}
        {...(external
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        {children}
        {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
      </a>
    )
  }

  return (
    <button type={type} className={classes} id={id} {...props}>
      {children}
    </button>
  )
}
