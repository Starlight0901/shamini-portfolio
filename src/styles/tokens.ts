/**
 * Design tokens — keep in sync with `src/index.css` `@theme` / `:root`.
 * CSS remains the runtime source of truth; this map is for JS/SVG usage.
 */
export const tokens = {
  color: {
    background: '#0B0F14',
    surface: '#111820',
    card: '#151E28',
    foreground: '#F3F4F6',
    muted: '#A7B0BD',
    accent: '#A78BFA',
    tech: '#67E8F9',
    personal: '#F5D58A',
  },
  radius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
  },
  font: {
    display: '"Outfit", ui-sans-serif, system-ui, sans-serif',
    sans: '"Source Sans 3", ui-sans-serif, system-ui, sans-serif',
    mono: '"IBM Plex Mono", ui-monospace, monospace',
  },
} as const
