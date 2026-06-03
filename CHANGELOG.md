# Changelog

All notable changes to the GFG Design System are documented here.

---

## [Unreleased]

### Added
- `docs/architecture.md` — full architecture deep-dive
- `docs/migration-plan.md` — 6-phase roadmap toward Storybook + modular portal
- `docs/contribution.md` — contribution guidelines
- `_archive/` — old scripts and backup HTML files moved here
- `src/NOT-PRODUCTION.md` — clarifies src/ is not the live app
- `FIGMA_FILE_KEY` environment variable support across all sync scripts

### Changed
- `README.md` rewritten from scratch with full setup, structure, CI, and security notes
- `.env.example` updated to include `FIGMA_FILE_KEY`
- `.gitignore` strengthened with additional patterns
- All 4 sync scripts now read `FIGMA_FILE_KEY` from env with safe fallback

### Security
- Figma Personal Access Token rotated
- Token verified working via manual GitHub Actions workflow trigger

---

## [0.1.0] — April 2026

### Added
- Initial live design system portal (`index.html`)
- 128 component sets synced from Figma via REST API
- 3,028 total variants
- 83 extracted React components in `extracted-components/`
- 70 component thumbnails in `public/component-thumbs/`
- `sync-component-props.cjs` — primary Figma sync script
- `sync-figma-tokens.cjs` — color and typography token sync
- `design-tokens/` — generated token files (colors, typography, component properties)
- `code-connect/` — 67+ Figma Code Connect definitions (future use)
- GitHub Actions: `deploy.yml`, `figma-sync.yml`, `consistency-check.yml`
- Deployed to GitHub Pages
