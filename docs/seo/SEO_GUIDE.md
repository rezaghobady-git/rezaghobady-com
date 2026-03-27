# SEO Guide — rezaghobady.com

> Load this file when creating pages, adding metadata, working on sitemaps, or any SEO-related task.

---

## Meta Strategy

**Primary keyword target:** "Reza Ghobady" (personal brand)  
**Secondary targets:** "AI automation Paris", "KaavOps", "Iranian art gallery Paris", "Simine Paris"

The SEO goal for v1 is simple: **own the first page for "Reza Ghobady"** and make the site indexable and shareable correctly.

---

## Next.js Metadata Setup

Use Next.js App Router's `metadata` export. Never use raw `<head>` tags.

### Root Layout Metadata (`src/app/layout.tsx`)

```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://rezaghobady.com'),
  title: {
    default: 'Reza Ghobady',
    template: '%s — Reza Ghobady',
  },
  description: 'Paris-based entrepreneur. Founder of KaavOps (AI automation) and Simine Paris (contemporary art). Building systems that work without you.',
  keywords: ['Reza Ghobady', 'KaavOps', 'Simine Paris', 'AI automation', 'entrepreneur Paris'],
  authors: [{ name: 'Reza Ghobady', url: 'https://rezaghobady.com' }],
  creator: 'Reza Ghobady',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rezaghobady.com',
    siteName: 'Reza Ghobady',
    title: 'Reza Ghobady',
    description: 'Paris-based entrepreneur. Founder of KaavOps and Simine Paris.',
    images: [
      {
        url: '/og-image.jpg',      // 1200x630px, place in /public
        width: 1200,
        height: 630,
        alt: 'Reza Ghobady',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reza Ghobady',
    description: 'Paris-based entrepreneur. Founder of KaavOps and Simine Paris.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
```

---

## Per-Page Metadata

Each page exports its own `metadata` object. Examples:

```typescript
// src/app/about/page.tsx
export const metadata: Metadata = {
  title: 'About',
  description: 'Reza Ghobady — entrepreneur, founder, builder. Based in Paris.',
}

// src/app/blog/page.tsx
export const metadata: Metadata = {
  title: 'Blog',
  description: 'Writing on AI, automation, art, and building things that work.',
}

// src/app/courses/page.tsx
export const metadata: Metadata = {
  title: 'Courses',
  description: 'Courses and digital products on AI automation and building systems.',
}
```

### Blog Post Dynamic Metadata

```typescript
// src/app/blog/[slug]/page.tsx
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Reza Ghobady'],
    },
  }
}
```

---

## Sitemap

Use Next.js built-in sitemap generation:

```typescript
// src/app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://rezaghobady.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://rezaghobady.com/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://rezaghobady.com/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://rezaghobady.com/courses', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://rezaghobady.com/contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    // Blog posts generated dynamically — add in the actual implementation
  ]
}
```

---

## robots.txt

```typescript
// src/app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://rezaghobady.com/sitemap.xml',
  }
}
```

---

## Structured Data (JSON-LD)

Add to the root layout for personal brand schema:

```typescript
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Reza Ghobady',
  url: 'https://rezaghobady.com',
  jobTitle: 'Entrepreneur',
  worksFor: [
    { '@type': 'Organization', name: 'KaavOps', url: 'https://kaavops.com' },
    { '@type': 'Organization', name: 'Simine Paris' },
  ],
  address: { '@type': 'PostalAddress', addressLocality: 'Paris', addressCountry: 'FR' },
}
```

Inject via `<script type="application/ld+json">` in the layout.

---

## SEO Rules

1. **Every page must have a unique `<title>` and `<meta description>`** — no defaults carried over
2. **OG image** (`/public/og-image.jpg`) must exist before deploy — 1200×630px, under 200KB
3. **No noindex pages** in v1 — everything should be crawlable
4. **Canonical URLs** are handled automatically by Next.js `metadataBase`
5. **Image alt text** — every `<Image>` component must have a meaningful `alt` prop
6. **Heading hierarchy** — one `<h1>` per page, never skip levels
7. **Blog post URLs** — slugs are lowercase, hyphenated, no special characters (e.g., `/blog/building-ai-automation-systems`)
