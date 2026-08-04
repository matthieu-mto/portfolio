# Portfolio — Matthieu Gregoris Toussaint

Vue 3 + Vite. One page, built to match the
[Claude Design](https://claude.ai/design/p/0f517d69-808c-4d3c-ad37-23ff26384701?file=Portfolio.dc.html)
`Portfolio.dc.html` mockup, plus responsive behaviour the mockup did not cover.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview
```

## Where things live

| Path | Role |
| --- | --- |
| `src/content/profile.js` | All the copy: name, role, summary, links, skills. Edit here. |
| `src/assets/modernist.css` | The Modernist design system (tokens + component classes), exported from Claude Design. Re-export it rather than hand-tuning. |
| `src/assets/app.css` | Page globals: the ink call-to-action, the `.container` measure. |
| `src/components/` | `SiteNav`, `HeroSection`, `SkillsSection` — each owns its own scoped layout. |

Design tokens (`--color-*`, `--space-*`, `--font-*`) and the `.btn` / `.tag` /
`.nav` / `.hr` classes come from the design system; components only add layout.

## Responsive

The mockup is fluid down to about 760px on its own (every size is a `clamp()`).
Below that the hero stacks to one column and the portrait caps at 360px; below
480px the page gutter drops from 24px to 16px. Nothing else changes.
