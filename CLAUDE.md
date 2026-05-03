# GFG Design System Live App — Claude Context

## Project Overview
Real-time design system application synced with Figma. All components, properties, typography, and colors reflect live Figma data via REST API integration.

**Live Demo:** https://lisandroalvo.github.io/GFG-Design-System/

## Development Rules

⚠️ **Critical Constraints:**
1. **Never create one-off styles** — Always use DS tokens from `design-tokens/` (colors, typography)
2. **Always import from /components/ui** — Use existing UI components; don't reinvent
3. **Match Figma MCP context** — All components must reflect live Figma data, not hardcoded defaults
4. **Ask before creating new components** — Verify with user first; ensure alignment with Figma design system

---

## Key Architecture

### Data Pipeline
1. **sync-component-props.cjs** — Authoritative sync script
   - Fetches 128 component sets from Figma REST API
   - Reads `componentPropertyDefinitions` (most accurate source)
   - Fallback: Parses variant names for legacy components
   - Outputs: `design-tokens/component-properties.json` + `.js` wrapper

2. **Design Tokens** (synced from Figma)
   - `colors.json` — 6 palettes, 128+ swatches with CSS vars
   - `typography.json` — 10 text styles (H1–H4, Body 1–2, Caption, Overline, etc.)
   - `component-properties.json` — Full component metadata with all 3,028 variants

### Frontend (index.html)
- Loads `component-properties.js` at runtime
- **getPropertiesForComponent()** — Uses synced Figma data (not hardcoded)
- **findMatchingVariant()** — Scores against axes in variant names; tiebreaks by "most axes matched"
- **renderLiveComponent()** — Shows exact Figma variant PNG with thumbnail URL
- Live preview: all components show Figma design embed (`/design/` mode)

### Deployment (deploy.yml)
- Copies `design-tokens/` to dist folder
- Deploys to GitHub Pages on push to main

## Critical Fixes (Latest Session)

| Issue | Fix |
|-------|-----|
| Alert prototype blank | Switched from `/proto/` to `/design/` embed mode |
| Button props invented (startIcon/endIcon) | Built sync script to pull actual `componentPropertyDefinitions` |
| Fab always showed generic preview | Updated sync to capture all 3,028 variants; rewrote matching algorithm |
| Switch/Alert missing from synced props | Iterate ALL 128 component sets, not just ones in prototypeMap |
| Boolean prop names doubled (On Close??) | Strip trailing `?` before returning from `normaliseProps()` |

## Files & Responsibilities

```
design-tokens/
  ├── colors.json                    # 128 color swatches (Figma sync)
  ├── typography.json                # 10 text styles (Figma sync)
  ├── component-properties.json       # All 128 components + 3,028 variants
  └── component-properties.js         # Runtime wrapper (loaded in HTML)

index.html                            # Main app; loads component-properties.js

sync-component-props.cjs              # Run: node sync-component-props.cjs

.github/workflows/deploy.yml          # Auto-deploy to GitHub Pages

```

## Key Functions

### normaliseProps(propDefs)
Converts Figma `componentPropertyDefinitions` → runtime format
- Handles VARIANT, BOOLEAN, TEXT, INSTANCE_SWAP types
- Strips trailing `?` from boolean names
- Sorts by type (variants, booleans, text, instance)

### propsFromVariantNames(variants)
Fallback parser for components without `componentPropertyDefinitions`
- Extracts axes from variant names (e.g., "Size=Medium, Color=Primary")
- De-dupes case-insensitively, prefers uppercase versions

### findMatchingVariant(setName, selectedProps)
Scores all variants in set against selected properties
- Only scores axes that exist in variant name
- Tiebreak: most axes matched wins
- Returns variant.nodeId for thumbnail lookup

### switchPreviewTab(tabName)
Switches between "design" (Live Design) and "prototype" (Interactive Prototype) tabs
- Called when user clicks tab button
- Hides/shows corresponding content

### updatePreviewTabs(setName)
Checks if component has interactive prototype link & shows/hides prototype tab
- Looks up `setName` in `COMPONENT_PROTOTYPES` config
- If found: enables prototype tab + loads Figma embed URL
- If not found: hides prototype tab (stays on design view)

## Recent Commits
- **52028cb**: "Variant matching: use full Figma variant list, not just set summary"
  - Updated sync script to capture all 3,028 variants with metadata
  - Rewrote matching to score against actual variant axes
  - Result: playground now shows exact Figma PNG for user's selections

## To Sync New Figma Changes
```bash
cd "/Users/lisandroalvo/Desktop/Design  System Live App"
node sync-component-props.cjs
git add design-tokens/component-properties.*
git commit -m "Sync component properties from Figma"
git push origin main
```

## Adding Interactive Prototypes

The app now has **two preview tabs**:
1. **🎨 Live Design** — Figma design/variant view (always visible)
2. **🎬 Interactive Prototype** — Figma prototype embed (conditional)

### How to Add Prototype Links

Edit `index.html` and find the `COMPONENT_PROTOTYPES` object (near line 10021):

```javascript
const COMPONENT_PROTOTYPES = {
    'Alert': 'https://www.figma.com/proto/YOUR_FILE_ID/YOUR_PROTOTYPE_ID',
    'Button': 'https://www.figma.com/proto/YOUR_FILE_ID/YOUR_PROTOTYPE_ID',
    'Fab': 'https://www.figma.com/proto/YOUR_FILE_ID/YOUR_PROTOTYPE_ID',
    // Add more as needed
};
```

**To get a Figma prototype link:**
1. In Figma, open the component's prototype page
2. Click the **Share prototype** button (top right)
3. Copy the **public link** 
4. Add it to `COMPONENT_PROTOTYPES` with the component name as key

**Example:**
```javascript
const COMPONENT_PROTOTYPES = {
    'Alert': 'https://www.figma.com/proto/OjFchNAdeHiNH5W4wYLSGS/Design-System?node-id=15883%3A11893&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=15883%3A11893&embed-host=share',
    // Tab will auto-appear when Alert component is opened
};
```

**Notes:**
- Keys are component set names (e.g., 'Alert', 'Button', not '<Alert>' or 'Button/Prototype')
- Only components with entries show the prototype tab
- Missing or invalid URLs are gracefully handled (tab stays hidden)
- Tabs reset to "Live Design" if prototype URL is empty

## Deployment
Push to `main` → GitHub Actions runs deploy.yml → Live on GitHub Pages (~2 min)

**Repository:** https://github.com/lisandroalvo/GFG-Design-System

---

**User Priority:** Components & properties must match Figma exactly. Interactive playground accuracy is critical.
