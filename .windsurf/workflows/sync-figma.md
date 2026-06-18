---
description: Sync all changes from Figma and push to GitHub
---

# Figma Sync Workflow

This workflow uses Figma MCP to detect 100% of changes accurately and deploy to Storybook.

## Steps:

// turbo
1. Search for updated components using `mcp0_search_design_system`

2. For each updated component:
   - Get screenshot using `mcp0_get_screenshot` to see visual changes
   - Identify exact changes (colors, icons, spacing, typography)

3. Update code files:
   - Update `gfgTheme.ts` for color changes
   - Update component `.stories.tsx` files for documentation
   - Add sync timestamp

4. Commit with descriptive message including:
   - What changed (e.g., "Primary color: #af9577 → #d946ef")
   - Date/time of Figma update
   - "Updated via MCP-powered Figma sync"

// turbo
5. Push to GitHub main branch

6. Verify Vercel auto-deployment (2-3 minutes)

7. Confirm changes are live at https://gfg-design-system.vercel.app

## Usage:

**User says:** "Sync Figma"

**Cascade will:**
- Detect all changes from Figma
- Update theme and component files
- Push to GitHub
- Verify deployment

## Expected Result:

- ✅ Changes visible on localhost:6006 immediately
- ✅ Changes deployed to Vercel in 2-3 minutes
- ✅ All color values documented with hex codes
- ✅ Sync timestamp added to component docs
