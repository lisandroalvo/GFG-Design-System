# GFG Design System

Monorepo for the GFG Design System — a React component library built on MUI, verified against Figma.

**Storybook (visual documentation):** https://gfg-design-system.vercel.app/ *(update URL after first Vercel deploy)*

---

## What is this?

| | |
|---|---|
| **`packages/design-system/`** | Canonical component source. Published to GitHub Packages as `@lisandroalvo/gfg-design-system`. |
| **`apps/storybook/`** | Storybook documentation and visual QA. Deployed to Vercel. |
| **Figma** | Design source of truth. All component tokens, variants, and states are verified against Figma file `OjFchNAdeHiNH5W4wYLSGS`. |
| **GitHub Packages** | Distributes the installable npm package. |

---

## Approved components

| Component | Figma node |
|---|---|
| Button | `6543:36744` |
| TextField | `16350:35724` |
| Alert | `6595:48211` |
| Badge | `6587:47500` |

Not yet approved (not exported): Card, Dialog.

---

## Local setup

### Requirements

- Node.js 22
- pnpm 10.12.4 (`corepack enable` then `pnpm` is available, or `npm install -g pnpm@10.12.4`)

### Install

```bash
pnpm install
```

### Run Storybook

```bash
pnpm storybook
```

Opens at `http://localhost:6006`.

### Build the package

```bash
pnpm build
```

Outputs ESM, CJS, and TypeScript declarations to `packages/design-system/dist/`.

### Build Storybook (production)

```bash
pnpm build:storybook
```

Outputs to `apps/storybook/storybook-static/`.

### Type check

```bash
pnpm typecheck
```

### Validate package archive

```bash
pnpm --filter @lisandroalvo/gfg-design-system pack --dry-run
```

---

## CI/CD

| Workflow | Trigger | What it does |
|---|---|---|
| `ci.yml` | Push to `main`, pull requests | Typecheck → build package → build Storybook → validate archive |
| `deploy-storybook-vercel.yml` | Push to `main` (storybook/package paths) | Deploy Storybook to Vercel |
| `publish-package.yml` | GitHub Release published | Publish package to GitHub Packages |

---

## Publishing a new version

1. Update `packages/design-system/package.json` → `"version"`.
2. Commit and merge the version bump to `main`.
3. Confirm CI passes.
4. Go to **GitHub → Releases → Draft a new release**.
5. Create a tag matching the version with a `v` prefix — e.g. `v0.1.0`.
6. Publish the release.
7. The `publish-package.yml` workflow validates the tag matches the package version and publishes to GitHub Packages.

See [`docs/GITHUB_PACKAGES_SETUP.md`](docs/GITHUB_PACKAGES_SETUP.md) for the full manual GitHub setup checklist.

---

## Installing the package in another project

Add a `.npmrc` to the consuming project:

```
@lisandroalvo:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

Set `NODE_AUTH_TOKEN` to a GitHub Personal Access Token with `read:packages` scope.

Then install:

```bash
pnpm add @lisandroalvo/gfg-design-system
# or
npm install @lisandroalvo/gfg-design-system
```

Usage:

```tsx
import { Button, TextField, Alert, Badge, gfgTheme } from "@lisandroalvo/gfg-design-system";
import { ThemeProvider, CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={gfgTheme}>
      <CssBaseline />
      <Button variant="contained" color="primary">Save</Button>
    </ThemeProvider>
  );
}
```

---

## Repository structure

```
apps/
  storybook/              Storybook documentation app
packages/
  design-system/          Component library source + npm package
.github/
  workflows/              CI, publish, Storybook deploy
docs/
  GITHUB_PACKAGES_SETUP.md   Manual GitHub setup guide
pnpm-workspace.yaml       pnpm monorepo config
pnpm-lock.yaml            Single lockfile
package.json              Root monorepo scripts
README.md                 This file
```

---

## Security

- Never commit `.env` or any Figma/GitHub token.
- `FIGMA_TOKEN` is used only locally for Figma API access; set it in `.env` only.
- Package publishing uses the built-in `GITHUB_TOKEN` in CI — no personal access token required.
- See `docs/GITHUB_PACKAGES_SETUP.md` for token setup instructions for consumers.
