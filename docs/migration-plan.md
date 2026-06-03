# GFG Design System — Migration Plan

> Living document. Updated as phases are completed.
> Current state: **Phase 1 in progress.**

---

## Target Architecture

```
Figma Design System
        │
        ▼
Design Tokens (generated JSON → CSS custom properties)
        │
        ▼
Coded Component Library (React + TypeScript)
        │
        ├──▶ Storybook (live component engine)
        │         real components · variants · props · states
        │         controls · usage examples · accessibility testing
        │
        └──▶ Custom Design System Portal (high-level experience)
                  foundations · tokens · component overview
                  Figma screen embeds · wireframes · product flows
                  patterns · usage guidance · changelog
                  links to Storybook stories · links to Figma
                  future Code Connect documentation
```

**Principle:** Storybook renders real coded components. The custom portal documents the design system holistically and embeds Figma screens, flows, and patterns. The two layers complement each other rather than compete.

---

## Phase 1 — Stabilize (Current)

**Goal:** Do not touch the live app. Clean up documentation, security, and configuration.

### Tasks

- [x] Rewrite `README.md` (was one line)
- [x] Create `docs/architecture.md`
- [x] Create `docs/migration-plan.md` (this file)
- [ ] Move Figma File Key from hardcoded scripts to `FIGMA_FILE_KEY` env var
- [x] Update `.env.example` with both `FIGMA_TOKEN` and `FIGMA_FILE_KEY`
- [x] Verify `.gitignore` covers `.env` and `figd_*` patterns
- [ ] Rotate the Figma Personal Access Token (it was exposed in a session log)
- [ ] Confirm `FIGMA_TOKEN` is set as a secret in GitHub Actions for both repos

### Files Modified in Phase 1

| File | Change |
|---|---|
| `README.md` | Rewritten from scratch |
| `docs/architecture.md` | New |
| `docs/migration-plan.md` | New |
| `.env.example` | Add `FIGMA_FILE_KEY` |
| `sync-component-props.cjs` | Use `process.env.FIGMA_FILE_KEY` with fallback |
| `sync-figma-tokens.cjs` | Same |
| `scripts/sync-tokens.mjs` | Same |
| `scripts/check-drift.mjs` | Same |

### Not Touched in Phase 1

- `index.html` — live app, do not modify
- `design-tokens/` generated files — do not modify
- GitHub Actions deploy workflow — do not modify
- Any sync script logic — only env var wiring

---

## Phase 2 — Restructure

**Goal:** Clean up the root directory. Establish clear folder structure. Remove ambiguity.

### Tasks

- [ ] Archive old backup HTML files (`design-system-final.html`, `enhanced-design-system.html`, `gfg-design-system.html`) into `_archive/`
- [ ] Remove or clearly mark `src/` as non-production with a README inside it
- [ ] Consolidate `sync-figma-tokens.js` and `sync-figma-tokens.cjs` — delete the `.js` version if it is redundant
- [ ] Consolidate `server.js` and `server.cjs` — confirm which is active
- [ ] Move all sync-related scripts into `scripts/` for a single canonical location
- [ ] Add `CHANGELOG.md` to track changes going forward
- [ ] Add `docs/contribution.md` with contribution guidelines

### Target Folder Shape After Phase 2

```
gfg-design-system/
├── index.html                    # Still the live portal
├── design-tokens/                # Generated — no change
├── extracted-components/         # No change
├── public/component-thumbs/      # No change
├── code-connect/                 # No change
├── scripts/                      # All sync scripts consolidated here
├── docs/
│   ├── architecture.md
│   ├── migration-plan.md
│   ├── contribution.md
│   └── changelog.md
├── _archive/                     # Old backup files (not deployed)
├── .github/workflows/
├── .env.example
├── CLAUDE.md
└── README.md
```

---

## Phase 3 — Add Storybook (Parallel Layer)

**Goal:** Add Storybook without breaking the existing static app.

### Rules for This Phase
- Install Storybook inside `apps/storybook/` — completely isolated from `index.html`
- Do NOT modify `index.html`
- Do NOT modify `deploy.yml`
- Storybook must use tokens from `design-tokens/` — do not duplicate token values
- Do NOT invent props — use only what exists in Figma

### Starting Components (in order)
1. Button
2. Alert
3. Badge
4. Card
5. Input (TextField)
6. Modal (Dialog)

### Story Requirements Per Component
- Default story (most common use case)
- Variants story (one control per Figma property axis)
- States story (disabled, loading, error where applicable)
- Docs page with usage guidance and prop table
- No invented props

### Token Integration
- Storybook theme should load `design-tokens/colors.json` and `design-tokens/typography.json`
- Use CSS custom properties generated from the token files
- Do not hardcode color values or font sizes

### Deployment for Phase 3
- Storybook can be deployed to a separate URL (e.g. Chromatic, Netlify, or a separate GitHub Pages branch)
- The existing GitHub Pages deployment must remain untouched

---

## Phase 4 — Improve the Portal

**Goal:** Evolve `index.html` from a monolith into a modular portal.

### New Sections to Add
- Foundations (color, typography, spacing, elevation, motion)
- Tokens (browsable token reference)
- Components (current functionality, improved)
- Patterns (multi-component usage examples)
- Screens (Figma embed: full screen designs)
- Flows (Figma embed: user journeys and wireframes)
- Guidelines (writing, accessibility, iconography)
- Changelog
- Contribution guide
- Link to Storybook for each component

### Approach
- Start by extracting sections from `index.html` into separate HTML partials or a lightweight templating approach
- Do not introduce a full framework until there is a concrete reason to
- The portal can remain static HTML initially

### Figma Embeds
- Use `/design/` embed mode (not `/proto/`) for component frames
- Use `/proto/` or `/design/` depending on what the frame type is for screens and flows
- Keep `COMPONENT_PROTOTYPES` config pattern from current `index.html`

---

## Phase 5 — Figma Code Connect

**Goal:** Wire the existing `code-connect/*.figma.tsx` definitions to live Storybook stories.

### Prerequisites Before This Phase
- Storybook must be stable with real components
- Component prop names must match between Figma and code
- A component name mapping table must exist

### Deliverables
- Verified prop alignment: Figma property name === code prop name for each component
- `code-connect/` definitions linked to real component imports
- Code Connect published to Figma file
- Storybook stories linked from Code Connect output
- Documentation of the mapping

### Future Flow After Code Connect
```
Figma component → Code Connect definition → Storybook story → Code example in Figma
```

---

## Phase 6 — Company GitHub Organization Migration

**Goal:** Move the repository from personal GitHub to a company organization safely.

### What Can Stay in the Prototype
- Development history and commit log (if appropriate)
- Storybook stories
- Design token files
- Extracted components

### What Must Be Done Before Company Migration

| Item | Action |
|---|---|
| Figma Personal Access Token | Rotate. Generate a new one. Remove personal token from all scripts. |
| Figma file access | Confirm the company Figma team has access to the file |
| GitHub repository | Transfer to org or create new repo under org |
| GitHub Actions secrets | Reconfigure `FIGMA_TOKEN` secret in the new org repo |
| GitHub Pages | Reconfigure Pages source in the new repo settings |
| Git remotes | Update local remotes to point to org repo URLs |
| Deploy URL | Update live URL in README, CLAUDE.md, and anywhere else it is referenced |
| Personal access patterns | Audit for any other personal tokens or personal accounts embedded in config |
| Repo visibility | Confirm whether it should be public or private under the org |
| Branch protection | Set up branch protection rules on `main` in the org repo |
| Team permissions | Configure org team write access to the repo |

### GitHub Actions Secrets Needed in Company Repo
- `FIGMA_TOKEN` — must be a token from a service account or a shared team Figma account, not a personal token
- `GITHUB_TOKEN` — automatically provided by GitHub Actions, no action needed

### Deployment Transfer Notes
- GitHub Pages is configured per repository
- The new org repo will need Pages enabled in Settings > Pages
- The custom domain (if any) must be reconfigured
- The `gfg` remote alias will need to be updated to the new org URL

---

## Decisions Log

| Date | Decision | Reason |
|---|---|---|
| Apr 2026 | Use static HTML as live app, not React build | React/Vite build produced blank components |
| Apr 2026 | Use `/design/` embed mode, not `/proto/` | `/proto/` embeds were blank in iframes |
| Apr 2026 | `componentPropertyDefinitions` as prop source | Avoids invented props from variant name parsing |
| Apr 2026 | Two GitHub remotes (source + deploy) | Separates source history from Pages deployment artifact |
| Jun 2026 | Begin migration toward Storybook + portal architecture | Scalability and professionalism for company handoff |
