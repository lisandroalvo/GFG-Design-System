# Figma Auto-Sync Setup

This project includes **fully automated syncing** from Figma to Storybook with zero manual intervention.

## How It Works

A GitHub Action runs daily (9 AM UTC) to:
1. ✅ Fetch latest component properties from Figma
2. ✅ Fetch latest design tokens (colors, typography, etc.)
3. ✅ **Automatically generate/update React component code**
4. ✅ Update component documentation
5. ✅ Create a Pull Request if changes are detected
6. ✅ **Auto-deploy to Storybook** when PR is merged (via Vercel)

## Complete Automation Flow

```
Figma (Publish Changes)
    ↓
GitHub Action (Daily at 9 AM UTC)
    ↓
Sync JSON Data + Generate React Code
    ↓
Create Pull Request
    ↓
You Review & Merge
    ↓
Vercel Auto-Deploy
    ↓
Storybook Updated! 🎉
```

## Setup Instructions

### 1. Get Your Figma Personal Access Token

1. Go to [Figma Account Settings](https://www.figma.com/settings)
2. Scroll to **Personal Access Tokens**
3. Click **Generate new token**
4. Name it: `GFG Design System Sync`
5. Copy the token (you'll only see it once!)

### 2. Add Token to GitHub Secrets

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `FIGMA_TOKEN`
5. Value: Paste your Figma token
6. Click **Add secret**

### 3. Test the Sync

You can manually trigger the sync:

1. Go to **Actions** tab in GitHub
2. Click **Sync Figma Design System**
3. Click **Run workflow**
4. Select branch: `main`
5. Click **Run workflow**

The action will run and create a PR if there are changes.

## Manual Sync (Local)

You can also run the sync locally:

```bash
# Set your Figma token
export FIGMA_TOKEN="your-figma-token-here"

# Run the sync script
node scripts/sync-from-figma.js
```

## What Gets Synced & Generated

### Automatically Synced:
- ✅ Component properties (variants, props)
- ✅ Design tokens (colors, typography)
- ✅ Component metadata

### Automatically Generated:
- ✅ React component documentation updates
- ✅ Component story files (node IDs, variant counts)
- ✅ Figma metadata JSON for all 133 components
- ✅ Theme file validation

## Schedule

The sync runs automatically:
- **Daily at 9 AM UTC** (3 AM EST / 12 AM PST)
- **Can be triggered manually** anytime

## Reviewing Changes

When the sync creates a PR:
1. Review the changes in the PR
2. Check that component properties match Figma
3. Verify design tokens are correct
4. Merge the PR if everything looks good

## Troubleshooting

### Sync fails with "401 Unauthorized"
- Check that your `FIGMA_TOKEN` secret is set correctly
- Verify the token hasn't expired
- Generate a new token if needed

### No PR created
- No changes detected in Figma
- Check the Action logs for details

### Changes not reflected in Storybook
- The sync updates JSON files, not React components
- You may need to manually update component code
- Consider using the synced data to generate components

## Next Steps

For more advanced syncing:
- Set up Code Connect (requires Enterprise plan)
- Auto-generate React components from Figma data
- Sync component screenshots for documentation

## Questions?

Check the GitHub Action logs or review the sync script at `scripts/sync-from-figma.js`
