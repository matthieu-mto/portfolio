# Portfolio — Matthieu Gregoris Toussaint

Single-page portfolio, English only, fully prerendered.
Live design source: the **Modernist** design system (flat, Archivo throughout,
zero corner radius, 2px rules, black-and-white photography, one red accent).

## Stack

| | |
| --- | --- |
| Framework | Nuxt 4 (Vue 3, `<script setup>`, TypeScript) |
| Output | Static — `nuxt generate` prerenders everything to `.output/public` |
| Styling | Plain CSS: design-system tokens + scoped component styles. No CSS framework. |
| Fonts | Archivo, self-hosted in `public/fonts` |
| Icons | Lucide, inlined as paths in `app/components/AppIcon.vue` |
| Dependencies | `nuxt`, `vue`, `vue-router` — nothing else at runtime |

## Commands

```bash
npm install
npm run dev        # dev server on :3000
npm run generate   # static build into .output/public
npm run preview    # serve the generated build
npm run typecheck  # vue-tsc
```

Deploy `.output/public` to any static host.

## Where things live

```
app/
  data/profile.ts      ← all page copy: roles, skills, education, contact
  components/          ← one component per page section
  assets/css/
    design-system.css  ← Modernist tokens + component classes (ported)
    app.css            ← site layer: brief overrides, layout shell, utilities
  pages/index.vue      ← the page + its SEO metadata
  error.vue            ← 404 / error page
shared/site.ts         ← canonical origin, used by the page and by robots/sitemap
server/routes/         ← robots.txt and sitemap.xml, prerendered at build
public/                ← fonts, favicon, apple-touch-icon, og-image
```

**To change content, edit `app/data/profile.ts`.** Every section renders from it;
no template edits needed for a new role, skill or link.

## Design system

`app/assets/css/design-system.css` is a port of `styles.css` from the Claude
Design project (`_ds/modernist-…/`). It deviates from upstream in exactly two
ways, both noted at the top of the file:

1. Archivo is self-hosted rather than `@import`ed from the Google Fonts CDN.
2. The form (`.field`/`.input`/`.radio`/`.seg`) and `.dialog` layers are dropped —
   this site has no forms and no modals.

If the design system is retuned upstream, re-port that file rather than patching
tokens by hand. The brief's own overrides (ink-coloured links and primary button)
live in `app.css`, not in the ported file.

## Things to set before going live

- **Domain** — `shared/site.ts` currently says `https://matthieu-toussaint.com`.
  It feeds the canonical URL, the OG tags, `robots.txt` and `sitemap.xml`.
- **CV download** — not wired up. The CV PDF from the design brief could not be
  retrieved in full (the API caps file reads at 256 KiB), so no download link was
  added. To add one: drop the PDF at `public/cv.pdf` and add a `.btn-secondary`
  next to the LinkedIn button in `app/components/HeroSection.vue`.
- **Analytics** — the old Universal Analytics property (`UA-162795664-1`) was
  dropped; UA stopped collecting data in 2023. Add a GA4 property or a
  privacy-friendly alternative if you want traffic numbers.

## Notes

- `npm audit` reports high-severity advisories, all reaching the tree through
  build tooling only (`brace-expansion` → `minimatch`/`glob`, `archiver` →
  `nitropack`). Nothing ships in the static output; fixing them today requires
  downgrading Nuxt.
