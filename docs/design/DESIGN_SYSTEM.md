# Design System — rezaghobady.com

> Load this file for any UI, styling, layout, or component work.

---

## Aesthetic Direction

**Mood:** Minimal · Clean · Bold  
**Reference:** [personal-web-neon-ten.vercel.app](https://personal-web-neon-ten.vercel.app/) — editorial single-page structure, strong typography, low visual noise  
**Personality:** Confident without being loud. Intellectual but accessible. European restraint with entrepreneurial energy.

The site should feel like a well-designed book, not a SaaS landing page.

---

## Color Palette

Define these as CSS variables in `src/styles/globals.css` and map them in `tailwind.config.ts`.

```css
:root {
  /* Backgrounds */
  --color-bg:           #F9F8F6;   /* Warm off-white — main bg */
  --color-surface:      #FFFFFF;   /* Pure white — cards, elevated */
  --color-surface-muted:#F1F0EE;   /* Subtle section breaks */

  /* Text */
  --color-text-primary: #111110;   /* Near-black — headlines */
  --color-text-secondary:#4A4A45;  /* Mid-gray — body copy */
  --color-text-muted:   #9A9A94;   /* Light gray — captions, labels */

  /* Accent */
  --color-accent:       #1A1A1A;   /* Deep charcoal — CTAs, borders */
  --color-accent-warm:  #C8A882;   /* Warm sand — hover states, highlights */

  /* Borders */
  --color-border:       #E5E4E0;   /* Hairline borders */
  --color-border-strong:#2A2A28;   /* Strong borders, dividers */
}
```

**Rules:**
- Background is always warm off-white (`--color-bg`), never pure white
- Accent warm (`--color-accent-warm`) is used sparingly — hover states, active indicators, one highlight per section maximum
- No gradients on backgrounds. No drop shadows heavier than `shadow-sm`.
- Dark mode is NOT required for v1.

---

## Typography

```css
/* Import in globals.css */
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;400;500&display=swap');
```

| Role | Font | Weight | Size (desktop) |
|---|---|---|---|
| Display / Hero | Instrument Serif | 400 | 4.5rem–6rem |
| Headings h2 | Instrument Serif | 400 | 2.25rem |
| Headings h3 | DM Sans | 500 | 1.25rem |
| Body | DM Sans | 300–400 | 1rem (1.75 line-height) |
| Labels / Caps | DM Sans | 500 | 0.75rem, letter-spacing 0.1em, uppercase |
| Code | JetBrains Mono | 400 | 0.875rem |

**Rules:**
- Serif for display and editorial headings. Sans-serif for everything functional.
- Line-height on body: always 1.75.
- Max prose width: `65ch`.
- Never center-align body copy. Left-align everything except hero tagline.

---

## Spacing System

Follow Tailwind's default scale. Key values to use consistently:

| Token | Value | Use |
|---|---|---|
| `4` | 1rem | Base unit, paragraph gaps |
| `8` | 2rem | Component padding |
| `12` | 3rem | Section inner padding |
| `20` | 5rem | Section vertical padding (mobile) |
| `32` | 8rem | Section vertical padding (desktop) |
| `48` | 12rem | Hero vertical padding |

**Rule:** Sections always use `py-20 md:py-32`. Never less.

---

## Layout

- **Max content width:** `max-w-3xl` (48rem) for text-heavy content, `max-w-5xl` for cards/grids
- **Side padding:** `px-6 md:px-10`
- **Grid for ventures/cards:** `grid grid-cols-1 md:grid-cols-2 gap-6`
- **Nav:** Fixed top, transparent → blurs on scroll. Height 64px. No megamenu.
- **No full-width hero images.** Typography is the hero.

---

## Component Conventions

### Navigation
```
Logo (text, not image) | Nav links | CTA button
```
- Logo: "Reza Ghobady" in DM Sans 500
- Links: About · Blog · Courses · Contact
- CTA: "Get in touch" — outlined button, becomes filled on hover

### Buttons
```css
/* Primary */
.btn-primary: bg-[var(--color-accent)] text-white px-6 py-3 text-sm font-medium tracking-wide

/* Secondary / Outlined */  
.btn-secondary: border border-[var(--color-accent)] text-[var(--color-accent)] px-6 py-3 text-sm

/* Ghost */
.btn-ghost: text-[var(--color-text-secondary)] underline-offset-4 hover:underline
```
- Border radius: `rounded-none` (square corners — editorial feel)
- No shadows on buttons

### Cards (Ventures, Courses)
- Border: `border border-[var(--color-border)]`
- Padding: `p-8`
- Radius: `rounded-none`
- Hover: border color shifts to `--color-border-strong`, no lift/shadow
- Tag/category: uppercase label above the title

### Blog Post List
- No card containers. Simple list with title, date, and one-line description.
- Dividers between posts: `border-t border-[var(--color-border)]`
- Title in Instrument Serif, date in DM Sans uppercase label style

### Section Headers
```html
<div class="mb-12">
  <p class="label">— Section name</p>
  <h2>Section headline</h2>
</div>
```
The `—` dash before section labels is a consistent visual signature.

---

## Animation

- **Page transitions:** None for v1. Keep it fast and clean.
- **Hover transitions:** `transition-colors duration-200`
- **Scroll reveal:** Optional for v1. If used, use `@keyframes` fade-up, 0.4s, no JS libraries.
- **No parallax. No scroll-jacking.**

---

## Responsive Breakpoints

Use Tailwind defaults:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

Mobile-first always. Design for 375px viewport as the baseline.

---

## What This Site Is NOT

- Not a portfolio with big full-bleed images
- Not dark mode / neon / glassmorphism
- Not a SaaS landing page with feature grids
- Not a blog with sidebar widgets
- Not heavy with illustrations or icons

Keep it literary. Keep it confident. Keep it fast.
