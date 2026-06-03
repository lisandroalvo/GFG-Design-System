# Contributing to GFG Design System

---

## Before You Start

- Read `docs/architecture.md` to understand how the system works
- Read `docs/migration-plan.md` to understand where the system is going
- Never hand-edit files in `design-tokens/` — they are generated from Figma
- Never invent component props — if a prop is not in Figma it does not exist
- Always run the sync script before editing any generated data

---

## Setup

```bash
# Clone the repo
git clone https://github.com/lisandroalvo/GFG-Design-System.git
cd GFG-Design-System

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env and fill in FIGMA_TOKEN and FIGMA_FILE_KEY

# Start local dev server
node server.cjs
```

---

## Syncing from Figma

Always sync before making changes that depend on Figma data:

```bash
# Sync component properties and variants
node sync-component-props.cjs

# Sync color and typography tokens
node sync-figma-tokens.cjs
```

Commit the resulting changes in `design-tokens/` as a separate commit from any UI changes.

---

## Making Changes

### Changing the portal UI
- Edit `index.html`
- Do not introduce one-off styles — use tokens from `design-tokens/`
- Do not hardcode colors or font sizes
- Test locally with `node server.cjs`

### Adding a new component
1. Confirm the component exists in Figma
2. Run `node sync-component-props.cjs` to pick it up
3. Add the React component to `extracted-components/`
4. Add a thumbnail PNG to `public/component-thumbs/`
5. If a Code Connect definition is needed, add it to `code-connect/`

### Updating tokens
- Run `node sync-figma-tokens.cjs` — do not manually edit `colors.json` or `typography.json`

---

## Committing

Use clear, consistent commit messages:

```
chore: sync from Figma               # After running sync scripts
feat: add Slider component           # New component
fix: correct Button variant matching # Bug fix
docs: update architecture notes      # Documentation only
refactor: clean up root folder       # Code cleanup, no behavior change
```

Commit generated `design-tokens/` changes separately from manual code changes.

---

## Deploying

```bash
# Push to deploy remote (triggers GitHub Actions → GitHub Pages)
git push gfg main
```

Deployment takes ~2 minutes. Check the Actions tab on GitHub to confirm success.

**Push to `origin` separately** to keep the source repo up to date:
```bash
git push origin main
```

---

## Pull Request Guidelines

- Target `main` branch
- Include a brief description of what changed and why
- If tokens changed, note which Figma components were updated
- If a new component was added, confirm it exists in Figma with a link
- The `consistency-check.yml` workflow will automatically post a drift report

---

## What Not to Do

- Do not commit `.env`
- Do not hardcode the Figma token anywhere
- Do not invent component properties
- Do not manually edit files in `design-tokens/`
- Do not push to `gfg main` unless you intend to deploy to production
- Do not modify the React source in `src/` — it is not the live app (see `src/NOT-PRODUCTION.md`)
