# Deployment Guide — rezaghobady.com

> Load this file for any deployment, hosting, CI/CD, or domain configuration work.

---

## Hosting Setup

**Provider:** Vercel (Hobby plan)
**Domain:** rezaghobady.com (DNS managed via Hostinger)
**Strategy:** Push to `main` → Vercel detects the push → builds and deploys automatically
**Node version:** 20.x LTS (Vercel default)

---

## Deployment Architecture

```
git push origin main
    ↓ Vercel GitHub integration detects push
Vercel build servers
    ↓ npm ci → npm run build
Vercel Edge Network
    ↓ serves globally
rezaghobady.com
```

No workflow file needed. Vercel handles everything via its GitHub App.

---

## First-Time Setup (One-Time)

### 1. Connect repo to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New → Project**
3. Import `rezaghobady-com` from GitHub
4. Framework preset will auto-detect as **Next.js** — leave all defaults
5. Add environment variable: `NEXT_PUBLIC_SITE_URL` = `https://rezaghobady.com`
6. Click **Deploy**

First deploy takes ~2 minutes. Every subsequent push to `main` deploys automatically.

### 2. Add custom domain

In Vercel project → **Settings → Domains**:

1. Add `rezaghobady.com`
2. Add `www.rezaghobady.com`
3. Vercel will show you the DNS records to add

### 3. Update DNS in Hostinger

In Hostinger hPanel → **Domains → DNS Zone**, update or add:

| Type | Name | Value |
|---|---|---|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

DNS propagation takes 1–48 hours. SSL is provisioned automatically by Vercel once DNS resolves.

---

## Environment Variables

Copy `.env.example` to `.env.local` for local development. **Never commit `.env.local`.**

```bash
# .env.example
NEXT_PUBLIC_SITE_URL=https://rezaghobady.com

# Add future vars here:
# RESEND_API_KEY=           ← For contact form email
# NEXT_PUBLIC_GA_ID=        ← For Google Analytics (optional)
```

To add variables to production, go to Vercel project → **Settings → Environment Variables**.

---

## Branch Behaviour on Vercel

| Branch | What Vercel does |
|---|---|
| `main` | Production deploy → rezaghobady.com |
| `dev` | Preview deploy → random-hash.vercel.app |
| Any `feat/*` | Preview deploy → random-hash.vercel.app |

Preview deploys are useful for reviewing changes before merging to `main`. Each one gets a unique URL you can share.

---

## Pre-Deploy Checklist

Claude Code must run through this before every merge to `main`:

- [ ] `npm run build` passes with no errors
- [ ] `npm run lint` passes
- [ ] `.env.local` is not committed (check `.gitignore`)
- [ ] All pages have metadata defined
- [ ] No hardcoded `localhost` URLs in the codebase

---

## Rollbacks

If a deploy breaks something, roll back instantly in Vercel dashboard:

**Project → Deployments → find previous deploy → ··· → Promote to Production**

---

## Future: Adding Resend (Contact Form)

When ready to activate the contact form email:

1. Sign up at [resend.com](https://resend.com) — free tier is 3,000 emails/month
2. Get your API key
3. In Vercel: **Settings → Environment Variables** → add `RESEND_API_KEY`
4. Uncomment the Resend block in `src/app/contact/actions.ts`
5. Push to `main` — Vercel redeploys automatically
