# CLAUDE.md — rezaghobady.com Personal Website

> This is the master instruction file for Claude Code. Read this first, then load the relevant sub-documents listed below before writing any code.

---

## Project Identity

**Owner:** Reza Ghobady  
**Domain:** rezaghobady.com  
**Purpose:** Personal brand site covering entrepreneurship, ventures (KaavOps, Simine Paris), experiments, courses, and digital products.  
**Stack:** Next.js (App Router) + Tailwind CSS + TypeScript  
**Deployment:** Hostinger VPS via GitHub (see `/docs/deployment/DEPLOYMENT.md`)

---

## Sub-Documents — Load These Before Acting

| Concern | File | Load When |
|---|---|---|
| Design system | `docs/design/DESIGN_SYSTEM.md` | Any UI/styling work |
| Content & copy | `docs/content/CONTENT_GUIDE.md` | Writing or editing any text |
| SEO | `docs/seo/SEO_GUIDE.md` | Pages, metadata, sitemap |
| Deployment | `docs/deployment/DEPLOYMENT.md` | Build, CI/CD, hosting |
| Git workflow | `docs/workflow/GIT_WORKFLOW.md` | Commits, branches, PRs |

---

## Repo Structure

```
rezaghobady-website/
├── CLAUDE.md                  ← You are here
├── README.md                  ← Human-readable project overview
├── .claude/
│   └── settings.json          ← Claude Code permissions
├── docs/
│   ├── design/
│   │   └── DESIGN_SYSTEM.md
│   ├── content/
│   │   └── CONTENT_GUIDE.md
│   ├── seo/
│   │   └── SEO_GUIDE.md
│   ├── deployment/
│   │   └── DEPLOYMENT.md
│   └── workflow/
│       └── GIT_WORKFLOW.md
├── src/
│   ├── app/                   ← Next.js App Router pages
│   │   ├── page.tsx           ← Home
│   │   ├── about/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx       ← Blog index
│   │   │   └── [slug]/page.tsx
│   │   ├── courses/page.tsx
│   │   └── contact/page.tsx
│   ├── components/
│   │   ├── ui/                ← Reusable primitives
│   │   ├── layout/            ← Nav, Footer, etc.
│   │   └── sections/          ← Page sections
│   ├── content/
│   │   └── blog/              ← MDX blog posts
│   ├── lib/                   ← Utils, helpers
│   └── styles/
│       └── globals.css        ← Tailwind base + CSS variables
├── public/                    ← Static assets
├── scripts/                   ← Dev utilities
├── .env.example
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Core Principles

1. **Mobile-first always.** Every component is designed for mobile, then enhanced for desktop.
2. **No lorem ipsum.** Use real placeholder content from `docs/content/CONTENT_GUIDE.md`.
3. **Accessibility baseline.** Semantic HTML, ARIA labels, keyboard navigation, contrast ratios.
4. **Performance budget.** Target Lighthouse score ≥ 90 on all metrics.
5. **One source of truth.** Design tokens live in `tailwind.config.ts` and `globals.css`. Never hardcode colors or spacing.
6. **TypeScript strict mode.** No `any` types. All props typed.
7. **Never break the build.** Run `npm run build` before every commit.

---

## Pages Overview

| Route | Purpose |
|---|---|
| `/` | Hero, ventures, recent writing, CTA |
| `/about` | Full bio, story, philosophy, skills |
| `/blog` | MDX-powered writing index + individual posts |
| `/courses` | Course listings and digital products |
| `/contact` | Simple contact form + social links |

---

## What Claude Code Should NOT Do

- Do not install libraries not listed in the approved stack without asking first.
- Do not modify `CLAUDE.md` or any `docs/` instruction file unless explicitly told to.
- Do not commit directly to `main`. Always use a feature branch (see `GIT_WORKFLOW.md`).
- Do not add placeholder images from external URLs in production code.
- Do not write inline styles. Use Tailwind classes or CSS variables only.
