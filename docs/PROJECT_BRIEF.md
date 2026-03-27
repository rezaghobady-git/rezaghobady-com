# Project Brief — rezaghobady.com

> This is the onboarding document for Claude Code. Read this alongside `CLAUDE.md` before writing any code.

---

## What We're Building

A personal website for Reza Ghobady at `rezaghobady.com`.

A clean, editorial, minimal personal brand site that communicates who Reza is, showcases his ventures (KaavOps and Simine Paris), hosts his writing, and eventually lists courses and digital products.

The reference site is [personal-web-neon-ten.vercel.app](https://personal-web-neon-ten.vercel.app/) — note the editorial feel, strong typography, single-page structure on desktop, and "feed" approach to content.

---

## Tech Decisions

| Decision | Choice | Reason |
|---|---|---|
| Framework | Next.js 15 (App Router) | SSR + SSG, great DX, Vercel-compatible, future-proof |
| Styling | Tailwind CSS v4 | Utility-first, design tokens as CSS variables |
| Language | TypeScript (strict) | Type safety, better DX |
| Content | MDX | Blog posts as markdown files with React components |
| Deployment | Hostinger VPS via GitHub Actions | Existing hosting plan |
| Package manager | npm | Default, no special preference |

---

## Phase 1 Scope (v1 Launch)

Build these pages in this order:

1. **Home** — Hero + Ventures + Recent Blog + CTA
2. **Navigation** — Fixed top nav (all pages)
3. **About** — Bio + story
4. **Blog** — Index + individual post template
5. **Contact** — Simple form or email link
6. **Courses** — Coming soon placeholder

**Not in v1:**
- Authentication
- CMS (Contentful, Sanity, etc.) — MDX files only
- Newsletter integration
- Analytics
- Dark mode
- Multilingual (French)

---

## First Session Checklist

When starting fresh, Claude Code should:

```bash
# 1. Initialize Next.js project
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# 2. Install additional dependencies
npm install @next/mdx @mdx-js/loader @mdx-js/react
npm install clsx tailwind-merge

# 3. Set up the folder structure from CLAUDE.md
# 4. Configure tailwind.config.ts with design tokens from DESIGN_SYSTEM.md
# 5. Set up globals.css with CSS variables
# 6. Create the layout.tsx with nav + footer
# 7. Build the Home page
```

---

## Key Files to Create First

| File | Purpose |
|---|---|
| `tailwind.config.ts` | Design tokens — colors, fonts, spacing |
| `src/styles/globals.css` | CSS variables + Tailwind base |
| `src/app/layout.tsx` | Root layout + metadata |
| `src/components/layout/Nav.tsx` | Navigation |
| `src/components/layout/Footer.tsx` | Footer |
| `src/app/page.tsx` | Home page |
| `.env.example` | Environment variable template |
| `.gitignore` | Standard Next.js ignores |

---

## Questions to Resolve Before Building

These items need Reza's input before Claude Code can implement them:

- [ ] **Profile photo:** Will there be a photo on the about page? If yes, provide the image file.
- [ ] **Contact form:** Email-only (mailto link) or a real form? If form, which email service? (Resend recommended)
- [ ] **Social links:** LinkedIn URL, GitHub URL, Twitter/X handle if any
- [ ] **Blog posts:** Do you have existing posts to import? If yes, share them as text files.
- [ ] **KaavOps description:** Any specific copy for the ventures section beyond what's in CONTENT_GUIDE.md?
- [ ] **Analytics:** Google Analytics or none for v1?

---

## Success Criteria for v1

The site is ready to launch when:

- [ ] All 5 pages exist and are responsive (mobile + desktop)
- [ ] Lighthouse scores: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95
- [ ] Build passes with zero errors and zero TypeScript errors
- [ ] Sitemap and robots.txt are generated
- [ ] Domain resolves correctly at rezaghobady.com
- [ ] SSL certificate is active
- [ ] GitHub Actions deploys on push to `main`
