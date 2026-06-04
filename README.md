# GFG Design System

A live design system portal synced with Figma. Component metadata, tokens, and variant data are pulled directly from the Figma file via the REST API and served as a static web app.

**Live sites:**
- 🌐 **Design System Portal**: https://lisandroalvo.github.io/GFG-Design-System/
- 📚 **Storybook (Components)**: https://lisandroalvo.github.io/GFG-Design-System/storybook/

---

## What This Is

- A **custom design system portal** showing components, tokens, variants, and code
- Powered by **static HTML** deployed to GitHub Pages
- Synced from a **Figma file** using Node.js scripts and the Figma REST API
- 128 component sets · 3,028 variants · 83 extracted React components

---

## Quick Start

### Prerequisites
- Node.js 20+
- A Figma Personal Access Token (see `.env.example`)

### Setup

```bash
# Install dependencies
npm install

# Copy env file and add your token
cp .env.example .env
# Edit .env — set FIGMA_TOKEN and FIGMA_FILE_KEY

# Run local dev server
node server.cjs
```

### Sync from Figma

```bash
# Pull latest component properties + variants
node sync-component-props.cjs

# Pull latest color + typography tokens
node sync-figma-tokens.cjs
```

### Deploy

```bash
# Commit synced data and push to deploy remote
git add design-tokens/
git commit -m "chore: sync from Figma"
git push gfg main
# GitHub Actions deploys to GitHub Pages (~2 min)
```

---

## Project Structure

```
├── index.html                    # Live portal (production app — do not delete)
├── design-tokens/                # Generated from Figma — do not hand-edit
│   ├── component-properties.json # 128 components + 3,028 variants
│   ├── component-properties.js   # Runtime wrapper loaded by index.html
│   ├── colors.json               # Color tokens (6 palettes, 128+ swatches)
│   └── typography.json           # Text styles (10 styles)
├── extracted-components/         # 83 React .tsx components (Code tab source)
├── public/
│   └── component-thumbs/         # 70 component thumbnail PNGs
├── code-connect/                 # Figma Code Connect definitions (future use)
├── scripts/
│   ├── sync-tokens.mjs           # Token sync (used by CI)
│   └── check-drift.mjs           # Figma vs React drift detection
├── sync-component-props.cjs      # Primary local sync script
├── sync-figma-tokens.cjs         # Color and typography sync script
├── server.cjs                    # Local development server
├── .github/workflows/
│   ├── deploy.yml                # Deploy to GitHub Pages on push to main
│   ├── figma-sync.yml            # Weekly automated token sync (opens PR)
│   └── consistency-check.yml    # Drift detection on PRs
└── docs/
    ├── architecture.md           # Current architecture deep-dive
    └── migration-plan.md         # Roadmap toward Storybook + portal architecture
```

---

## Rules

- **Never hand-edit files in `design-tokens/`** — they are generated from Figma
- **Never invent component props** — if a prop is not in Figma it does not exist
- **Never hardcode the Figma token** — keep it in `.env` only, never commit it
- **Always run sync before editing** any generated data
- **Push to `gfg` remote** to deploy to GitHub Pages; `origin` is the source repo

---

## Environment Variables

See `.env.example` for all required variables.

| Variable | Description |
|---|---|
| `FIGMA_TOKEN` | Figma Personal Access Token — never commit this value |
| `FIGMA_FILE_KEY` | Figma file ID for the design system source file |

---

## CI Workflows

| Workflow | Trigger | What it does |
|---|---|---|
| `deploy.yml` | Push to `main` | Builds and deploys static site to GitHub Pages |
| `figma-sync.yml` | Weekly Monday 9am UTC | Syncs tokens from Figma, opens a PR if anything changed |
| `consistency-check.yml` | PR to `main` | Checks Figma vs React drift, posts report as PR comment |

The `figma-sync.yml` and `consistency-check.yml` workflows require a `FIGMA_TOKEN` secret configured in GitHub repository settings under Settings > Secrets and variables > Actions.

---

## Git Remotes

| Remote | Repo | Purpose |
|---|---|---|
| `gfg` | `lisandroalvo/GFG-Design-System` | GitHub Pages deploy target |
| `origin` | `lisandroalvo/design-system-live-app` | Source code repo |

---

## Architecture and Roadmap

See [`docs/architecture.md`](docs/architecture.md) for the current architecture deep-dive.
See [`docs/migration-plan.md`](docs/migration-plan.md) for the roadmap toward the Storybook and modular portal architecture.

---

## Security Notes

- The `.env` file is git-ignored and must never be committed
- The Figma Personal Access Token must never be printed, logged, or hardcoded
- Rotate the token immediately if it has ever appeared in a log, message, or document
- The `FIGMA_TOKEN` GitHub Actions secret must be set separately in each repository's settings
- When migrating to a company GitHub organization, rotate all tokens and reconfigure secrets
