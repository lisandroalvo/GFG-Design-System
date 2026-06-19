---
description: Sync design changes from Figma to Storybook with 100% accuracy
---

# Sync Figma to Storybook Workflow

This workflow ensures **100% accurate** syncing of design data from Figma to Storybook using MCP tools.

## Prerequisites

- Figma file access: `OjFchNAdeHiNH5W4wYLSGS` (GFG Design System 2026)
- Icon MS3 library enabled in Figma
- MCP tools configured in Windsurf

## Step 1: Identify Changes in Figma

1. Open Figma file: `https://figma.com/design/OjFchNAdeHiNH5W4wYLSGS`
2. Navigate to the component you want to sync (e.g., Badge)
3. Note the component node ID from the URL (e.g., `node-id=6587-47476`)

## Step 2: Get Component Screenshot

Use MCP to capture the current state:

```bash
# In Windsurf, ask Cascade:
"Get a screenshot of the Badge component from Figma (node 6587:47476)"
```

This will:
- Download a PNG of the component
- Show you the exact visual state
- Help verify icons and colors

## Step 3: Extract Icon Information

For components with icons:

```bash
# In Windsurf, ask Cascade:
"Search the Icon MS3 library for [icon_name] and tell me the MUI equivalent"
```

Example:
- Figma icon: `mail` → MUI: `Mail`
- Figma icon: `arrow_back` → MUI: `ArrowBack`

## Step 4: Get Color Tokens

```bash
# In Windsurf, ask Cascade:
"Get variable definitions for Badge component (node 6587:47476)"
```

This extracts:
- Color values (hex codes)
- Token names from Figma
- Semantic color mappings

## Step 5: Update Storybook Files

### Automatic (Recommended)
```bash
npm run sync-figma
```

### Manual
1. Update icon imports in `*.stories.tsx`:
   ```tsx
   import Mail from '@mui/icons-material/Mail';
   ```

2. Update color tokens in `gfgTheme.ts`:
   ```ts
   primary: '#d946ef',  // From Figma variable
   ```

3. Update documentation in stories:
   ```tsx
   | Primary | \`#d946ef\` | \`--primary/color\` |
   ```

## Step 6: Verify in Storybook

```bash
cd apps/storybook
npm run storybook
```

1. Open http://localhost:6006
2. Navigate to the component
3. Compare with Figma screenshot
4. Verify:
   - ✅ Icons match exactly
   - ✅ Colors match exactly
   - ✅ Spacing/sizing matches
   - ✅ All variants work

## Step 7: Commit Changes

```bash
git add .
git commit -m "sync: Update [Component] from Figma

- Icon: [icon_name] → [MuiIcon]
- Colors: [list changes]
- Synced from Figma node [node-id]"
git push origin main
```

## Step 8: Deploy to Vercel

Changes will auto-deploy when pushed to `main`.

Verify at: https://gfg-design-system.vercel.app

## Common Scenarios

### Scenario 1: Icon Mismatch

**Problem:** Icon in Storybook doesn't match Figma

**Solution:**
1. Get Figma screenshot of component
2. Search Icon MS3 library: `"Search for [description] icon in Icon MS3"`
3. Check `ICON_MAPPING.md` for correct MUI component
4. Update import and usage in stories

### Scenario 2: Color Mismatch

**Problem:** Colors don't match Figma

**Solution:**
1. Get variable definitions from Figma node
2. Update `gfgTheme.ts` with exact hex values
3. Add Figma token name as comment
4. Update story documentation

### Scenario 3: New Component

**Problem:** Need to add a new component from Figma

**Solution:**
1. Get component metadata: `mcp0_get_metadata`
2. Get design context: `mcp0_get_design_context`
3. Create component wrapper in `src/components/[Name]/[Name].tsx`
4. Create stories in `src/components/[Name]/[Name].stories.tsx`
5. Add to `COMPONENTS` array in `sync-from-figma.ts`

## MCP Tools Reference

### Get Screenshot
```
Tool: mcp0_get_screenshot
Params: { fileKey, nodeId, maxDimension }
Use: Visual verification
```

### Search Design System
```
Tool: mcp0_search_design_system
Params: { query, fileKey, includeLibraryKeys }
Use: Find icons, components, variables
```

### Get Variable Definitions
```
Tool: mcp0_get_variable_defs
Params: { fileKey, nodeId }
Use: Extract color tokens
```

### Get Metadata
```
Tool: mcp0_get_metadata
Params: { fileKey, nodeId }
Use: Component structure
```

## Troubleshooting

### Storybook Won't Load

```bash
cd apps/storybook
rm -rf .cache node_modules/.vite
npm run storybook
```

### Icon Import Error

```bash
# Check available icons
ls node_modules/@mui/icons-material/ | grep -i [name]

# Update import to match exact file name
```

### Git Push Rejected

```bash
# Check for .git/config.lock
rm .git/config.lock
git push origin main
```

## Best Practices

1. **Always screenshot first** - Visual verification prevents errors
2. **Use exact Figma token names** - Add as comments in code
3. **Update ICON_MAPPING.md** - Keep documentation current
4. **Test all variants** - Check Standard, Dot, all colors
5. **Compare side-by-side** - Figma screenshot vs Storybook

## Automation Roadmap

Future improvements:
- [ ] Auto-detect icon changes via MCP
- [ ] Auto-generate color token updates
- [ ] CI/CD integration for Figma webhooks
- [ ] Visual regression testing
- [ ] Automated PR creation

---

**Last Updated:** June 19, 2026
**Owner:** Design System Team
