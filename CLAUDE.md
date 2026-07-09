# GFG Design System — Claude Context

## Repository Overview

Monorepo for the GFG Design System.

- `packages/design-system/` — canonical React component source, published to GitHub Packages as `@lisandroalvo/gfg-design-system`
- `apps/storybook/` — Storybook documentation and visual QA, deployed to Vercel
- Figma file `OjFchNAdeHiNH5W4wYLSGS` is the design source of truth

**Package manager:** pnpm@10.12.4 (workspace)

---

## Critical Rules

1. **Never modify component visuals without Figma verification.** Use the Figma REST API or MCP as the mandatory source of truth.
2. **Single source of truth for components:** `packages/design-system/src/components/`. Storybook imports from `@lisandroalvo/gfg-design-system` — do not duplicate implementations.
3. **Never commit the Figma API token.** It lives in `.env` only. The `.env` file is git-ignored.
4. **Never publish the npm package manually.** Publishing is triggered by GitHub Release only.
5. **Do not add Card or Dialog** to the package exports — they are not yet approved in the GFG Design System.
6. **Never add components not verified in Figma.** All props, variants, and tokens must match `OjFchNAdeHiNH5W4wYLSGS`.

---

## Architecture

### Component pipeline

```
Figma file OjFchNAdeHiNH5W4wYLSGS
        ↓ (manual verification via Figma REST API / MCP)
packages/design-system/src/components/
        ↓ (tsup build → dist/)
@lisandroalvo/gfg-design-system (workspace:*)
        ↓
apps/storybook/ (imports and documents components)
        ↓ (Vercel deploy)
Public Storybook
```

### Approved exports (packages/design-system/src/index.ts)

- `Alert`, `AlertProps`
- `Badge`, `BadgeProps`
- `Button`, `ButtonProps`
- `TextField`, `TextFieldProps`
- `gfgTheme` (MUI theme with GFG tokens)

Not exported: Card, Dialog (not yet approved).

### Design tokens

GFG color tokens (source: Figma file):
- primary: `#af9577`
- secondary: `#333333`
- error: `#a34740`
- warning: `#8a5d1f`
- info: `#2b4a60`
- success: `#637058`

Theme lives in `packages/design-system/src/tokens/gfgTheme.ts`.

---

## Common Tasks

### Local setup
```bash
pnpm install
```

### Run Storybook
```bash
pnpm storybook
```

### Build package
```bash
pnpm build
```

### Build Storybook
```bash
pnpm build:storybook
```

### Type check
```bash
pnpm typecheck
```

### Validate package archive
```bash
pnpm --filter @lisandroalvo/gfg-design-system pack --dry-run
```

---

## GitHub Actions

| Workflow | Trigger | Purpose |
|---|---|---|
| `ci.yml` | Push to main, PRs | Typecheck + build + Storybook build + pack validation |
| `publish-package.yml` | GitHub Release published | Publish `@lisandroalvo/gfg-design-system` to GitHub Packages |
| `deploy-storybook-vercel.yml` | Push to main (storybook/package paths) | Deploy Storybook to Vercel |

---

## Figma Integration

- Figma File Key: `OjFchNAdeHiNH5W4wYLSGS`
- Use Figma REST API v1: `GET /v1/files/{key}/nodes?ids={node_id}` with `X-Figma-Token` header
- Token is in `.env` as `FIGMA_TOKEN` — never commit it
- MCP server (Figma Dev Mode) is available in Claude Desktop for live node inspection

---

## Security Notes

- `.env` is git-ignored. Never commit it.
- `FIGMA_TOKEN` secret must be set separately in GitHub Actions repository settings.
- `NODE_AUTH_TOKEN` must be set for local publish; in CI it uses the built-in `GITHUB_TOKEN`.
- The `publish-package.yml` workflow validates that the git release tag matches the package version before publishing.
