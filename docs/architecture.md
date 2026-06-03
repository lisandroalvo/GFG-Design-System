# GFG Design System — Architecture

> Current as of June 2026. See `migration-plan.md` for the target architecture.

---

## Current Data Flow

```
Figma File (design source of truth)
        │
        │  Figma REST API
        ▼
Local sync scripts (run manually or via CI)
  sync-component-props.cjs     → design-tokens/component-properties.json + .js
  sync-figma-tokens.cjs        → design-tokens/colors.json + typography.json
  scripts/sync-tokens.mjs      → design-tokens/raw-components.json + raw-styles.json
        │
        ▼
design-tokens/                 (generated — never hand-edit)
        │
        │  loaded at runtime via <script src="...component-properties.js">
        ▼
index.html                     (12,000+ line monolithic portal — current live app)
        │
        │  GitHub Actions (deploy.yml on push to main on gfg remote)
        ▼
GitHub Pages — https://lisandroalvo.github.io/GFG-Design-System/
```

---

## Live App: index.html

The live portal is a single static HTML file. It loads data at runtime by including `design-tokens/component-properties.js` as a script tag. No build step is required for deployment.

**What it renders:**
- Left sidebar with searchable component list organized by category
- Component modal with:
  - Header (name, variant count, View Code button)
  - Interactive Prototype tab (Figma iframe — only when a prototype URL is configured)
  - Design tab (live Figma variant PNG via `/design/` embed mode)
  - Playground (property dropdowns with variant matching)
  - Code section (full React/TypeScript source from `extracted-components/`)

**Why it is still a single file:**
A previous attempt to replace it with a React app (Vite + React in `src/`) produced blank components. The static HTML approach was reliable and is kept until a safe migration plan is ready.

---

## Sync Scripts

| Script | Runner | Purpose |
|---|---|---|
| `sync-component-props.cjs` | Local (`node sync-component-props.cjs`) | Primary sync. Fetches 128 component sets, uses `componentPropertyDefinitions` as source of truth. Outputs `component-properties.json` and `.js`. |
| `sync-figma-tokens.cjs` | Local | Syncs color palettes and typography styles |
| `scripts/sync-tokens.mjs` | CI (`figma-sync.yml`) | Weekly CI version of token sync. Opens a PR when tokens change. |
| `scripts/check-drift.mjs` | CI (`consistency-check.yml`) | Compares Figma component sets vs React extracted components. Posts drift report on PRs. Fails CI if errors found. |

**The canonical local sync command is `sync-component-props.cjs`.** The `scripts/` versions are the CI equivalents.

---

## Generated Files (never hand-edit)

| File | Source | Used by |
|---|---|---|
| `design-tokens/component-properties.json` | `sync-component-props.cjs` | index.html runtime, CI |
| `design-tokens/component-properties.js` | `sync-component-props.cjs` | index.html (loaded via script tag) |
| `design-tokens/colors.json` | `sync-figma-tokens.cjs` | index.html, future token pipeline |
| `design-tokens/typography.json` | `sync-figma-tokens.cjs` | index.html, future token pipeline |
| `design-tokens/raw-components.json` | `scripts/sync-tokens.mjs` | CI drift check |
| `design-tokens/raw-styles.json` | `scripts/sync-tokens.mjs` | CI drift check |
| `design-tokens/organized-components.json` | sync scripts | Used as fallback by component-props sync |
| `design-tokens/drift-report.json` | `scripts/check-drift.mjs` | CI PR comment |
| `public/component-thumbs/*.png` | Manual Figma export or fetch script | index.html sidebar thumbnails |

---

## GitHub Actions Workflows

### deploy.yml
- Trigger: push to `main` on `gfg` remote
- Steps: copies `index.html`, `design-tokens/`, `public/component-thumbs/`, `extracted-components/` into `dist/` and deploys to GitHub Pages
- Does NOT require `FIGMA_TOKEN`

### figma-sync.yml
- Trigger: weekly (Monday 9am UTC) or manual dispatch
- Steps: runs `scripts/sync-tokens.mjs`, creates a PR if `design-tokens/` changed
- Requires `FIGMA_TOKEN` as a GitHub Actions secret

### consistency-check.yml
- Trigger: PR to `main` touching `extracted-components/`, `design-tokens/`, `code-connect/`, or `src/`
- Steps: runs `scripts/check-drift.mjs`, posts drift report as PR comment, fails if error count > 0
- Requires `FIGMA_TOKEN` as a GitHub Actions secret

---

## Git Remotes

| Remote | URL | Purpose |
|---|---|---|
| `gfg` | `https://github.com/lisandroalvo/GFG-Design-System` | GitHub Pages deploy |
| `origin` | `https://github.com/lisandroalvo/design-system-live-app` | Source repository |

Push to `gfg main` to deploy. Push to `origin main` for source backup.

---

## Component Inventory

- **128 component sets** from Figma
- **3,028 variants** total
- **83 extracted React components** in `extracted-components/` (`.tsx` files)
- **70 component thumbnails** in `public/component-thumbs/` (`.png` files)
- **67+ Code Connect definitions** in `code-connect/` (`.figma.tsx` files — future use)

Component categories: Inputs, Data Display, Feedback, Surfaces, Navigation, Layout, Utils, Advanced, Form

---

## Key Technical Decisions

| Decision | Reason |
|---|---|
| Static HTML, not React build | React/Vite build produced blank components; static HTML is reliable |
| `/design/` embed mode, not `/proto/` | `/proto/` embeds were blank in iframes |
| `componentPropertyDefinitions` as prop source | Most accurate; avoids invented props like `startIcon`/`endIcon` |
| Scoring algorithm for variant matching | Scores all variants against selected props; tiebreak by most axes matched |
| Strip trailing `?` from boolean prop names | Figma appends `?` to boolean names (e.g. `On Close?`) |
| Prototype tab is conditional | Only shown when component has a URL configured in `COMPONENT_PROTOTYPES` object |
| Figma REST API for sync, not MCP | REST API is reliable for production sync; MCP is exploration-only |
| Two GitHub remotes | Separates source code from deployment artifact |

---

## Known Past Bugs and Fixes

| Bug | Fix |
|---|---|
| Alert prototype iframe was blank | Switched embed from `/proto/` to `/design/` mode |
| Button props showed invented values (`startIcon`, `endIcon`) | Rewrote sync to use `componentPropertyDefinitions` |
| FAB always showed generic preview | Synced all 3,028 variants; rewrote variant matching algorithm |
| Switch and Alert missing from synced props | Fixed to iterate all 128 component sets, not just prototype-mapped ones |
| Boolean prop names doubled (`On Close??`) | Strip trailing `?` in `normaliseProps()` function |

---

## What Is Not the Live App

The following exist but are **not** the production portal:

- `src/App.tsx`, `src/main.tsx`, `src/componentRegistry.ts` — a disconnected React skeleton from an earlier attempt. Not deployed. Not the live app.
- `design-system-final.html`, `enhanced-design-system.html`, `gfg-design-system.html` — older backup versions of the portal. Kept for reference.
- `server.js` — an earlier version of the dev server. `server.cjs` is the current one.
- `sync-figma-tokens.js` — an earlier ESM version of the sync script. `sync-figma-tokens.cjs` is the current one.

---

## Environment Variables

The following environment variables must be set in `.env` for local development:

| Variable | Required | Description |
|---|---|---|
| `FIGMA_TOKEN` | Yes | Figma Personal Access Token |
| `FIGMA_FILE_KEY` | Yes | Figma file ID for the design system |

For GitHub Actions, set `FIGMA_TOKEN` as a repository secret. `FIGMA_FILE_KEY` is currently hardcoded in scripts as a fallback (see migration plan for when to change this).

---

See [`migration-plan.md`](migration-plan.md) for the planned evolution of this architecture.
