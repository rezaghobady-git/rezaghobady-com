# Deployment Guide — rezaghobady.com

> Load this file for any deployment, hosting, CI/CD, or domain configuration work.

---

## Hosting Setup

**Provider:** Hostinger VPS  
**Domain:** rezaghobady.com (managed via Hostinger)  
**Strategy:** Build locally or via GitHub Actions → deploy to Hostinger VPS via SSH  
**Node version:** 20.x LTS

---

## Deployment Architecture

```
GitHub (main branch)
    ↓ push triggers
GitHub Actions (CI/CD)
    ↓ builds Next.js
Hostinger VPS (Ubuntu)
    ↓ serves via
PM2 + Nginx (reverse proxy)
```

Next.js runs as a Node.js process managed by PM2. Nginx sits in front and handles HTTPS, compression, and routing.

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

On the VPS, set these in `/etc/environment` or via PM2 ecosystem file.

---

## GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Hostinger VPS

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_SITE_URL: ${{ secrets.NEXT_PUBLIC_SITE_URL }}

      - name: Deploy to VPS
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.VPS_HOST }}
          username: ${{ secrets.VPS_USER }}
          key: ${{ secrets.VPS_SSH_KEY }}
          script: |
            cd /var/www/rezaghobady
            git pull origin main
            npm ci --production
            npm run build
            pm2 restart rezaghobady
```

### Required GitHub Secrets

Set these in `GitHub → Repo Settings → Secrets and variables → Actions`:

| Secret | Value |
|---|---|
| `VPS_HOST` | Your Hostinger VPS IP address |
| `VPS_USER` | SSH username (e.g. `root` or `ubuntu`) |
| `VPS_SSH_KEY` | Your private SSH key content |
| `NEXT_PUBLIC_SITE_URL` | `https://rezaghobady.com` |

---

## VPS Setup (One-Time)

SSH into your Hostinger VPS and run:

```bash
# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 globally
npm install -g pm2

# Install Nginx
sudo apt install nginx

# Clone your repo
mkdir -p /var/www/rezaghobady
cd /var/www/rezaghobady
git clone https://github.com/YOUR_USERNAME/rezaghobady-website.git .

# Build and start
npm ci
npm run build
pm2 start npm --name "rezaghobady" -- start
pm2 save
pm2 startup
```

---

## Nginx Configuration

```nginx
# /etc/nginx/sites-available/rezaghobady.com
server {
    listen 80;
    server_name rezaghobady.com www.rezaghobady.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name rezaghobady.com www.rezaghobady.com;

    ssl_certificate /etc/letsencrypt/live/rezaghobady.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/rezaghobady.com/privkey.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable with:
```bash
sudo ln -s /etc/nginx/sites-available/rezaghobady.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## SSL Certificate (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d rezaghobady.com -d www.rezaghobady.com
```

Certbot auto-renews. Verify with: `sudo certbot renew --dry-run`

---

## DNS Configuration (Hostinger)

In Hostinger DNS settings, point:

| Type | Name | Value |
|---|---|---|
| A | @ | Your VPS IP |
| A | www | Your VPS IP |
| CNAME | www | rezaghobady.com |

---

## PM2 Commands (Common)

```bash
pm2 list                    # See all processes
pm2 logs rezaghobady        # Tail logs
pm2 restart rezaghobady     # Restart app
pm2 stop rezaghobady        # Stop app
pm2 monit                   # Live monitoring
```

---

## Pre-Deploy Checklist

Claude Code must run through this before every deploy to `main`:

- [ ] `npm run build` passes with no errors
- [ ] `npm run lint` passes
- [ ] `.env.local` is not committed (check `.gitignore`)
- [ ] All pages have metadata defined
- [ ] `/public/og-image.jpg` exists
- [ ] No hardcoded `localhost` URLs in the codebase
