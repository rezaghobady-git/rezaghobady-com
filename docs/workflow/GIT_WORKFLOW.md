# Git Workflow — rezaghobady.com

> Load this file before any `git` operations. Follow this exactly.

---

## Branch Strategy

```
main          ← Production. Always deployable. Protected.
│
├── dev       ← Integration branch. Merge features here first.
│
└── feat/*    ← Feature branches. One per task.
    fix/*     ← Bug fix branches.
    content/* ← Content-only changes (blog posts, copy edits).
    chore/*   ← Config, deps, tooling.
```

**Rules:**
- **Never commit directly to `main`**
- **Never commit directly to `dev`** (except hotfixes)
- Always branch off `dev`, not `main`
- Merge `dev` → `main` only when `dev` is stable and tested

---

## Branch Naming

```bash
feat/add-blog-page
feat/contact-form
fix/nav-mobile-overflow
content/add-first-blog-post
chore/update-dependencies
chore/setup-eslint
```

All lowercase, hyphenated, prefixed with type.

---

## Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <short description>

[optional body]
```

**Types:**
| Type | Use for |
|---|---|
| `feat` | New feature or page |
| `fix` | Bug fix |
| `style` | CSS/design changes, no logic change |
| `content` | Copy, text, blog posts |
| `chore` | Config, tooling, deps |
| `refactor` | Code restructuring, no behavior change |
| `perf` | Performance improvements |
| `docs` | Documentation changes |

**Examples:**
```
feat(nav): add mobile hamburger menu
fix(blog): resolve slug 404 on dynamic routes
style(home): adjust hero typography spacing
content(blog): add post on n8n automation
chore: upgrade next.js to 15.2
docs: update deployment guide with PM2 setup
```

**Rules:**
- Max 72 characters in the first line
- Use imperative mood: "add", not "added" or "adds"
- No capital letter at start of description
- No period at the end

---

## Workflow for a New Feature

```bash
# 1. Make sure you're up to date
git checkout dev
git pull origin dev

# 2. Create your feature branch
git checkout -b feat/my-feature-name

# 3. Work, make commits as you go
git add .
git commit -m "feat(scope): description"

# 4. Before merging, verify the build
npm run build

# 5. Push your branch
git push origin feat/my-feature-name

# 6. Merge into dev (no PR needed for solo workflow)
git checkout dev
git merge feat/my-feature-name
git push origin dev

# 7. When dev is stable, merge to main (triggers deploy)
git checkout main
git merge dev
git push origin main

# 8. Clean up
git branch -d feat/my-feature-name
```

---

## .gitignore Requirements

Ensure `.gitignore` includes:

```
# Dependencies
node_modules/
.pnp
.pnp.js

# Next.js
.next/
out/

# Environment
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Build
dist/
build/

# OS
.DS_Store
Thumbs.db

# Editor
.vscode/
.idea/
*.swp
*.swo

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

---

## Tags for Releases

When deploying a significant version, tag `main`:

```bash
git tag -a v1.0.0 -m "Launch: rezaghobady.com v1"
git push origin v1.0.0
```

Use semantic versioning: `v1.0.0`, `v1.1.0`, `v1.1.1`

---

## Emergency Hotfix on Main

If production is broken and you must fix directly on `main`:

```bash
git checkout main
git checkout -b fix/emergency-fix-name
# make the fix
npm run build   # must pass
git commit -m "fix: emergency description"
git checkout main
git merge fix/emergency-fix-name
git push origin main
git checkout dev
git merge main   # keep dev in sync
git push origin dev
```

---

## Claude Code Commit Checklist

Before every commit, Claude Code must verify:
- [ ] `npm run build` passes
- [ ] No `console.log` statements left in production code
- [ ] No hardcoded secrets or API keys
- [ ] Branch is NOT `main` or `dev` (unless merging)
- [ ] Commit message follows convention above
