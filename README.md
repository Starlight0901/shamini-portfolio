# Shamini Tharaka Fernando — Portfolio

A personal portfolio for practical software, data, and teaching work. Content lives in data files, not in page layout, so copy and project status can be updated without rewriting the UI.

The site is a static front end. There is no backend or contact form — email is the contact path.

## Stack

- [Vite](https://vite.dev/) 8
- [React](https://react.dev/) 19 and TypeScript
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Lucide](https://lucide.dev/) for icons

## Getting started

```bash
npm install
npm run dev
```

The app is usually at `http://localhost:5173/` (or the next free port Vite prints).

| Script | Purpose |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Typecheck and production build |
| `npm run preview` | Serve the `dist` folder locally |
| `npm run lint` | ESLint |

## Pages

| Path | Page |
| --- | --- |
| `/` | Home — hero, capabilities, featured projects, about preview |
| `/services` | Service categories and items |
| `/projects` | Case studies grouped by status |
| `/digital-products` | Tools and learning resources |
| `/about` | Short story and skill groups |
| `/contact` | Email |

## Editing content

Change copy in `src/data/`. Pages read from these files.

| File | What it controls |
| --- | --- |
| `src/data/site.ts` | Name, tagline, email, live URL, social links |
| `src/data/seo.ts` | Page titles and meta descriptions |
| `src/data/hero.ts` | Home hero |
| `src/data/services.ts` | Capabilities and the services page |
| `src/data/projects.ts` | Projects, products, and case studies |
| `src/data/about.ts` | About preview on the home page |
| `src/data/skills.ts` | Skill groups on `/about` |
| `src/data/cta.ts` | Closing call to action |

### Site and launch details

In `src/data/site.ts`:

1. Set `email` to the address you want shown in the footer and on `/contact`.
2. Set `url` to the live origin with no trailing slash, for example `https://example.com`. Canonical and Open Graph URLs use this value.
3. Keep GitHub and LinkedIn URLs current in `socialLinks`.

Optional social preview: add a `1200×630` image at `public/og-image.png`. `site.ogImage` already points there.

### Projects

Each project in `src/data/projects.ts` has a `status`:

- `completed` — finished work; a demo link may be shown if `demoUrl` is set
- `in-development` — active build, not finished
- `planned` — intended work, not underway
- `concept` — idea still being shaped

Use `kind: 'product'` for digital products. Set `featured: true` to show a card on the home page.

Do not mark planned or concept work as completed. Demo links should only appear when there is something to open. Gold / “personal” colour is for education and teaching, not for software status.

To add a screenshot later, put the file in `public/` and set `image` on the project, for example `image: '/projects/business-platform.png'`.

## Design

Tokens live in `src/index.css` (`:root` and `@theme`). Colours, type scale, spacing, and fonts are defined there.

- Display: Outfit
- Body: Source Sans 3
- Labels: IBM Plex Mono
- Accent violet `#A78BFA`, cyan `#67E8F9` for technical work, gold `#F5D58A` for education and teaching

`src/styles/tokens.ts` mirrors a small set of those values for SVG use. If you change a colour in CSS, update the matching entry there.

## Layout of the code

```
src/
  data/           Content and SEO
  pages/          Route screens
  sections/       Page blocks (hero, CTA, previews)
  components/     Navbar, footer, cards, UI primitives
  styles/         JS token map
public/           Favicon and static assets
```

## Notes

- Motion respects `prefers-reduced-motion`.
- Other routes load on demand; the home page is in the first bundle.
- Replace `https://www.your-domain.com` in `src/data/site.ts` (and the matching comments in `public/robots.txt`) before the site is public.

Deploy `dist` to any static host (Netlify, Cloudflare Pages, GitHub Pages, and similar). For client-side routing, the host must serve `index.html` for unknown paths.
