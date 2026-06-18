---
description: Sync all changes from Figma and push to GitHub
---

# Figma Sync Workflow

This workflow uses Figma MCP to detect 100% of changes accurately and push them to GitHub.

## Steps:

// turbo
1. Search for all updated components using `mcp0_search_design_system`

2. For each updated component (Badge, Button, Alert, Card, TextField, Dialog):
   - Get screenshot using `mcp0_get_screenshot` to see visual changes
   - Compare with previous version
   - Identify what changed (colors, icons, spacing, etc.)

3. Update the corresponding React component files:
   - Update colors in theme file if needed
   - Update component documentation
   - Update story files with new variants

4. Generate metadata file with all changes

5. Commit all changes with descriptive message

// turbo
6. Push to GitHub main branch

7. Confirm that Vercel will auto-deploy

## Usage:

Just say: "Sync all Figma changes and push to GitHub"

Or run: `npm run sync-figma` (which reminds you to ask Cascade)
