# Storybook Deployment Guide

## Overview

The GFG Design System Storybook is automatically deployed to GitHub Pages using GitHub Actions.

## Deployment Architecture

```
apps/storybook/
    ↓ npm run build-storybook
storybook-static/
    ↓ GitHub Actions (.github/workflows/deploy-storybook.yml)
gh-pages-storybook branch
    ↓ GitHub Pages
Live Storybook URL
```

## Live URLs

- **Main Portal**: https://lisandroalvo.github.io/GFG-Design-System/
- **Storybook**: https://lisandroalvo.github.io/GFG-Design-System/storybook/ (after configuration)

## GitHub Pages Configuration

### One-Time Setup Required

After the first deployment, you need to configure GitHub Pages to serve from the `gh-pages-storybook` branch:

1. Go to the **GFG-Design-System** repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: Select `gh-pages-storybook` and `/ (root)`
   - Click **Save**

### Alternative: Use a Subdirectory

If you want Storybook at `/storybook/` path:

1. In the workflow file, add a `destination_dir` parameter:
   ```yaml
   - name: Deploy to GitHub Pages (storybook branch)
     uses: peaceiris/actions-gh-pages@v4
     with:
       github_token: ${{ secrets.GITHUB_TOKEN }}
       publish_dir: ./apps/storybook/storybook-static
       publish_branch: gh-pages
       destination_dir: storybook
   ```

2. This will deploy to the same `gh-pages` branch as the main portal, but in a `/storybook/` subdirectory

## Automatic Deployment

The workflow automatically deploys when:

- Changes are pushed to `main` branch in `apps/storybook/` directory
- The workflow file itself is modified
- Manual trigger via GitHub Actions UI (workflow_dispatch)

## Manual Deployment

To manually trigger a deployment:

1. Go to **Actions** tab in GitHub
2. Select "Deploy Storybook" workflow
3. Click "Run workflow"
4. Select `main` branch
5. Click "Run workflow"

## Local Build

To build Storybook locally:

```bash
cd apps/storybook
npm run build-storybook
```

Output will be in `apps/storybook/storybook-static/`

## Troubleshooting

### Build Fails

Check the GitHub Actions logs:
1. Go to **Actions** tab
2. Click on the failed workflow run
3. Expand the "Build Storybook" step

Common issues:
- Missing dependencies: Run `npm ci` in `apps/storybook/`
- TypeScript errors: Fix type errors in component files
- Build warnings: Large chunks are expected for Storybook

### Deployment Succeeds but Site is Blank

1. Check that GitHub Pages is configured to use `gh-pages-storybook` branch
2. Wait 1-2 minutes for GitHub Pages to rebuild
3. Clear browser cache and hard refresh

### Wrong Base Path

If assets fail to load, check the `base` setting in `apps/storybook/.storybook/main.ts`:

```ts
export default {
  // ...
  viteFinal: async (config) => {
    config.base = '/GFG-Design-System/'; // Must match repo name
    return config;
  },
};
```

## Monitoring

- **Build status**: Check the Actions tab for workflow runs
- **Deploy status**: Check the Environments section in the repo
- **Live site**: Visit the Storybook URL after deployment completes

## Rollback

To rollback to a previous version:

1. Find the commit hash of the working version
2. Go to Actions → Deploy Storybook → Run workflow
3. Select the specific commit/branch
4. Deploy

Or manually:

```bash
git checkout <commit-hash> apps/storybook/
git commit -m "chore: rollback Storybook to <commit-hash>"
git push gfg main && git push origin main
```
